import { createContext, useCallback, useContext, useState } from "react";

import defaultStructure from "./structures.json";
import { useAuth } from "../auth";
import { getLocalSession, storeLocalSession } from "@/helpers/storage";
import { addFileToFolder, addFolderToFolder } from "@/helpers/file";
import { slugify } from "@/helpers/sanitize";
import Explorer from "@/components/Apps/Explorer.exe";

export const ExplorerContext = createContext<ExplorerContextType>({
	currentPath: "/root",
	structures: defaultStructure as FileNode,
	setPath: () => {},
	getFolderView: () => [],
	getMainFolder: () => ({} as FileNode),
	getThree: () => [],
	getStructure: () => ({} as FileNode),
	selectedFile: null,
	setSelectedFile: () => {},
	rename: () => {},
	createFolder: () => {},
	handleInfoWindow: () => ({} as FileNode),
	createFile: () => {},
	closeInfoWindow: () => {},
});

export const ExplorerProvider = ({ children }) => {
	const { session } = useAuth();

	const [currentPath, setCurrentPath] = useState("/root");
	const [selectedFile, _setSelectedFile] = useState<FileNode | null>(null);

	console.log("ExplorerProvider", selectedFile);

	const setSelectedFile = (file: FileNode) => {
		_setSelectedFile(file);
	};

	const [structures, setStructures] = useState<FileNode>(
		(getLocalSession(session, "explorer") as FileNode) ||
			(defaultStructure as FileNode)
	);

	/**
	 * Based on the currentPath, get the folder and file on this view
	 *
	 * @returns FileNode[]
	 */
	const getFolderView = (forcedPath?: string) => {
		const path = (forcedPath || currentPath)
			.split("/")
			.filter((p) => p !== "");

		let currentStructure = structures;

		for (const p of path) {
			const folder = currentStructure.children?.find((f) => f.path === p);

			if (!folder) {
				return [];
			}

			currentStructure = folder;
		}

		const children = currentStructure.children || [];

		// Sort children to display, before the folders, then the files, by name
		children.sort((a, b) => {
			if (a.type === "folder" && b.type === "file") {
				return -1;
			}

			if (a.type === "file" && b.type === "folder") {
				return 1;
			}

			return a.name.localeCompare(b.name);
		});

		return currentStructure.children || [];
	};

	/**
	 * Return the current main folder (root if is root, else the current subfolder of root (only first level))
	 *
	 * @returns FileNode
	 */
	const getMainFolder = () => {
		const path = currentPath.split("/").filter((p) => p !== "");

		if (path.length === 1) {
			return structures;
		}

		return structures.children?.find(
			(f) => f?.path === path[1]?.replace("/root/", "/")
		);
	};

	/**
	 * Resolve the tree of the current path, based on the currentPath to display a breadcrumb
	 * of the current folder view
	 *
	 * @returns FileNode[]
	 */
	const getThree = () => {
		const path = currentPath.split("/").filter((p) => p !== "");

		let currentStructure = structures;

		// Resolve each parent of the current path until we're on root
		const tree = path.map((p) => {
			const folder = currentStructure.children?.find((f) => f.path === p);

			if (!folder) {
				return {} as FileNode;
			}

			currentStructure = folder;

			return folder;
		});

		return tree.filter((b) => b.name);
	};

	/**
	 * Change le chemin actuel en remontant récursivement dans la structure
	 *
	 * @param fileNode - Le fichier ou dossier sélectionné
	 * @returns void
	 */
	const setPath = (fileNode: FileNode) => {
		/**
		 * Fonction récursive pour obtenir le chemin complet d'un fichier ou dossier
		 * @param node - L'élément actuel de la structure (fichier ou dossier)
		 * @param target - Le slug de l'élément sélectionné
		 * @returns Le chemin complet
		 */
		const findFullPath = (
			node: FileNode,
			target: FileNode
		): string | null => {
			// Si l'élément courant correspond à la cible, on retourne son chemin
			if (node.path === target.path) {
				return `/${node.path}`;
			}

			// Si l'élément a des enfants, on cherche dans ses enfants récursivement
			if (node.children) {
				for (const child of node.children) {
					const result = findFullPath(child, target);
					if (result) {
						// On remonte dans l'arborescence en concaténant les chemins
						return `/${node.path}${result}`;
					}
				}
			}

			// Si on ne trouve pas le chemin, retourner null
			return null;
		};

		// Utiliser la fonction récursive pour trouver le chemin complet
		const fullPath = findFullPath(structures, fileNode); // Pas besoin de passer structures comme paramètre

		if (fullPath) {
			setCurrentPath(fullPath);
		} else {
			console.error("Chemin non trouvé pour:", fileNode);
		}
	};

	/**
	 * Handle rename of a file or a folder
	 *
	 * @param fileNode - The file or folder to rename
	 * @param newName - The new name of the file or folder
	 *
	 * @returns void
	 */
	const rename = (fileNode: FileNode, newName: string) => {
		// Get the fileNode in the structure, rename the name and update the structure
		const findAndRename = (node: FileNode): FileNode => {
			if (node.path === fileNode.path) {
				return {
					...node,
					name: newName,
				};
			}

			if (node.children) {
				return {
					...node,
					children: node.children.map(findAndRename),
				};
			}

			return node;
		};

		const newStructure = findAndRename(structures);

		// Save the new structure to localStorage
		storeLocalSession(session, "explorer", newStructure);

		setStructures(newStructure);
	};

	/**
	 * Create folder
	 *
	 * @param {string} name
	 *
	 * @returns {void}
	 */
	const createFolder = (name: string) => {
		const newFolder: FileNode = {
			name,
			path: slugify(name),
			type: "folder",
			children: [],
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
		};

		const path = currentPath.split("/").filter((p) => p !== "");

		addFolderToFolder(structures, path[path.length - 1], newFolder);

		// Save the new structure to localStorage
		storeLocalSession(session, "explorer", structures);

		setStructures({ ...structures });
	};

	/**
	 * Create file
	 *
	 * @param {string} name
	 * @param {string} content
	 *
	 * @returns {void}
	 */
	const createFile = useCallback(
		(
			name: string,
			fileType: string,
			content: string,
			currentFolderPath = currentPath
		) => {
			const randId = Math.random().toString(36).substring(7);

			const newFile: FileNode = {
				id: randId,
				name,
				path: slugify(name),
				slug: slugify(name) + "." + fileType,
				type: "file",
				extension: "." + fileType,
				createdAt: new Date().toISOString(),
				updatedAt: new Date().toISOString(),
			};

			const path = currentFolderPath.split("/").filter((p) => p !== "");

			addFileToFolder(structures, path[path.length - 1], newFile);

			// Save the new structure to localStorage
			storeLocalSession(session, "explorer", structures);

			setStructures({ ...structures });
		},
		[currentPath, structures]
	);

	/**
	 * Get the root folder
	 *
	 * @returns FileNode
	 */
	const getStructure = () => {
		return structures;
	};

	const [onSave, setOnSave] = useState(undefined);
	const [onSelect, setOnSelect] = useState(undefined);

	/**
	 * Create a function to handle the info window.
	 * This window can be used to open explorer in-app to save or open a file
	 *
	 * @param {function} onSelect - The function to call when the user insert a file
	 * @param {function} onSave - The function to call when the user save a file
	 *
	 * @returns {FileNode} - The file node to display in the explorer
	 */
	const handleInfoWindow = (
		onSelect: (selectedFile: FileNode) => void = undefined,
		onSave: (filename: string) => void = undefined
	) => {
		setOnSave(onSave ? () => onSave : undefined);
		setOnSelect(onSelect ? () => onSelect : undefined);

		return getMainFolder();
	};

	const closeInfoWindow = () => {
		setOnSave(undefined);
		setOnSelect(undefined);
	};

	return (
		<ExplorerContext.Provider
			value={{
				currentPath,
				structures,
				setPath,
				getFolderView,
				getMainFolder,
				getThree,
				getStructure,
				selectedFile,
				setSelectedFile,
				rename,
				createFolder,
				createFile,
				handleInfoWindow,
				closeInfoWindow,
			}}
		>
			{children}

			{(onSave || onSelect) && (
				<Explorer
					forceRender
					onSave={() => onSave(currentPath)}
					onSelect={() => onSelect(selectedFile)}
					onCancel={() => {
						setOnSave(undefined);
						setOnSelect(undefined);
					}}
				/>
			)}
		</ExplorerContext.Provider>
	);
};

export const useExplorer = () => {
	return useContext(ExplorerContext);
};
