import { ContextMenu, ContextMenuTrigger } from "@radix-ui/react-context-menu";

import OSContextualMenu from "@/components/Ui/Menus/ContextualMenu";

import FileIcon from "@/assets/icons/colors/file.svg?react";
import FolderIcon from "@/assets/icons/colors/folder.svg?react";
import HouseIcon from "@/assets/icons/colors/house.svg?react";
import { useExplorer } from "@/providers/explorer";
import { classNames } from "@/helpers/sanitize";
import { useEffect, useRef, useState } from "react";
import { useOS } from "@/providers/InclumeOS";
import TextEditor from "../../TextEditor.exe";

interface FileItemProps {
	file: FileNode;
	complete?: boolean;
}

interface FileItemWrapperProps extends FileItemProps {
	children: React.ReactNode;
	setShowRename: React.Dispatch<React.SetStateAction<boolean>>;
}

const getAppToOpen = async (file: FileNode): Promise<App | null> => {
	// TODO : Get content of file if file.url (come from API)
	const app = {
		".docs,.docx,.doc": TextEditor,
	};

	const extension = file.extension;

	// Check if the file extension is in one of key (split by comma)
	const appToOpen = Object.keys(app).find((key) =>
		key.split(",").includes(extension)
	);

	if (appToOpen) {
		return {
			title: app[appToOpen]?.title,
			icon: app[appToOpen]?.icon,
			defaultContent: file.content?.data || "",
		};
	}

	return null;
};

const FileItem = ({ file, complete = false }: FileItemProps) => {
	const { setPath, getMainFolder, rename, setSelectedFile } = useExplorer();
	const { launchApp } = useOS();

	const renameRef = useRef<HTMLInputElement>(null);
	const [showRename, setShowRename] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			if (showRename && renameRef.current) {
				renameRef.current?.focus();
			}
		}, 100);
	}, [showRename]);

	const Icon =
		file.path === "root"
			? HouseIcon
			: file.type === "folder"
			? FolderIcon
			: FileIcon;

	// Random createdAt time for file and folder from 1 month to 2 week ago
	const createdAt = new Date(
		Date.now() - Math.floor(Math.random() * 1209600000 + 2592000000)
	);

	return (
		<FileItemWrapper
			file={file}
			complete={complete}
			setShowRename={setShowRename}
		>
			<button
				onDoubleClick={async () => {
					if (file.type === "folder" && !showRename) {
						setPath(file);
						setSelectedFile(null);
					} else if (file.type === "file" && !showRename) {
						const appToOpen = await getAppToOpen(file);

						if (appToOpen) {
							launchApp(appToOpen);
						}
					}
				}}
				onClick={() => {
					if (file.type === "file" && !showRename) {
						setSelectedFile(file);
					}
				}}
				className={classNames(
					"flex items-center justify-between w-full gap-2 px-4 py-1 text-left transition rounded hover:bg-gray-100/15",
					getMainFolder()?.path === file.path && "bg-gray-100/15",
					complete && "focus:bg-gray-100/15"
				)}
			>
				<div className="flex items-center flex-1 gap-2">
					<Icon className="flex-shrink-0 w-5 h-5" />

					{showRename ? (
						<form
							className="flex-1 w-full"
							onSubmit={(e) => {
								e.preventDefault();

								const newName = renameRef.current?.value || "";

								if (newName) {
									rename(file, newName);
								}

								setShowRename(false);
							}}
						>
							<input
								type="text"
								className="w-full border border-transparent max-w-none focus:outline-none focus:border focus:border-gray-200"
								ref={renameRef}
								defaultValue={file.name}
							/>
						</form>
					) : (
						<span className="line-clamp-1">
							{file.name}
							{file.type === "file" && file.extension}
						</span>
					)}
				</div>

				{complete && (
					<div className="w-1/4">
						<p className="text-sm text-gray-300">
							{/* Type de fichier */}
							{file.type === "file" ? "Fichier" : "Dossier"}
						</p>
					</div>
				)}

				{complete && (
					<div className="w-1/4">
						<p className="text-sm text-gray-300">
							{createdAt.toLocaleDateString("fr-FR")}
						</p>
					</div>
				)}
			</button>
		</FileItemWrapper>
	);
};

const FileItemWrapper = ({
	children,
	file,
	complete = false,
	setShowRename,
}: FileItemWrapperProps) => {
	const { launchApp } = useOS();
	const { setPath } = useExplorer();

	if (!complete) {
		return children;
	}

	return (
		<ContextMenu>
			<ContextMenuTrigger className="flex flex-col flex-1">
				{children}

				<OSContextualMenu
					actions={[
						{
							label: "Ouvrir",
							action: () => {
								if (file.type === "folder") {
									setPath(file);
								} else {
									console.log("Open" + file.slug);

									// launchApp({
									// 	title: file.name,
									// 	icon: FileIcon,
									// })
								}
							},
						},
						{
							label: "Renommer",
							action: () => setShowRename(true),
						},
						{
							label: "Supprimer",
							action: () => console.log("Delete" + file.slug),
						},
					]}
				/>
			</ContextMenuTrigger>
		</ContextMenu>
	);
};

export default FileItem;
