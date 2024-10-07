import { createContext, useContext, useState } from "react";

import defaultStructure from "./structures.json";
import { useAuth } from "../auth";
import { getLocalSession, storeLocalSession } from "@/helpers/storage";
import { addFolderToFolder } from "@/helpers/file";
import { slugify } from "@/helpers/sanitize";

export const ExplorerContext = createContext<ExplorerContextType>({
	currentPath: "/root",
	structures: defaultStructure as FileNode,
	setPath: () => {},
	getFolderView: () => [],
	getMainFolder: () => ({} as FileNode),
	getThree: () => [],
	getStructure: () => ({} as FileNode),
	rename: () => {},
	createFolder: () => {},
});

export const ExplorerProvider = ({ children }) => {
	const { session } = useAuth();

	const [currentPath, setCurrentPath] = useState("/root");

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
	 * Get the root folder
	 *
	 * @returns FileNode
	 */
	const getStructure = () => {
		return structures;
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
				rename,
				createFolder,
			}}
		>
			{children}
		</ExplorerContext.Provider>
	);
};

export const useExplorer = () => {
	return useContext(ExplorerContext);
};
