import { ContextMenu, ContextMenuTrigger } from "@radix-ui/react-context-menu";
import { useTranslation } from "react-i18next";
import OSContextualMenu from "@/components/Ui/Menus/ContextualMenu";

import FileIcon from "@/assets/icons/colors/file.svg?react";
import FolderIcon from "@/assets/icons/colors/folder.svg?react";
import HouseIcon from "@/assets/icons/colors/house.svg?react";
import { useExplorer } from "@/providers/explorer";
import { classNames } from "@/helpers/sanitize";
import { useEffect, useRef, useState } from "react";

interface FileItemProps {
	file: FileNode;
	complete?: boolean;
}

interface FileItemWrapperProps extends FileItemProps {
	children: React.ReactNode;
	setShowRename: React.Dispatch<React.SetStateAction<boolean>>;
}

const FileItem = ({ file, complete = false }: FileItemProps) => {
	const { t } = useTranslation();
	const { setPath, getMainFolder, rename } = useExplorer();

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

	return (
		<FileItemWrapper
			file={file}
			complete={complete}
			setShowRename={setShowRename}
		>
			<button
				onDoubleClick={() => {
					if (file.type === "folder" && !showRename) {
						setPath(file);
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
							{t(file.name)}
							{file.type === "file" && file.extension}
						</span>
					)}
				</div>

				{complete && file.type === "file" && (
					<div>
						<p className="text-sm text-gray-300">Date</p>
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
							action: () => setPath(file),
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
