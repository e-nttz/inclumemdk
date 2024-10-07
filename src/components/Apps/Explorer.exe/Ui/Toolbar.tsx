import IconArrowLeft from "@/assets/icons/arrow-left.svg?react";
import IconFolderAdd from "@/assets/icons/folder-add.svg?react";
import HomeIcon from "@/assets/icons/home.svg?react";

import { useExplorer } from "@/providers/explorer";

const Toolbar = () => {
	const { getThree, getStructure, setPath, createFolder } = useExplorer();

	console.log("Three", getThree());

	const three = getThree();

	return (
		<>
			<div className="p-4 bg-[#F7F7F7] dark:bg-gray-900 shadow flex items-center justify-between gap-6">
				<div className="flex items-center gap-6">
					<button
						type="button"
						className="px-2 first:pl-0"
						onClick={() => {
							const parent = three?.[three.length - 2];

							if (parent) {
								setPath(parent);
							} else {
								setPath(getStructure());
							}
						}}
					>
						<IconArrowLeft className="w-6 h-auto" />
						<span className="sr-only">Afficher le dossier parent</span>
					</button>
				</div>

				<div className="relative flex items-center flex-1 px-1.5 py-1 rounded bg-gray-100/25 dark:bg-gray-800 truncate overflow-ellipsis">
					<button
						onClick={() => setPath(getStructure())}
						className="rounded p-1.5 hover:bg-gray-50/50 transition dark:hover:bg-gray-700"
					>
						<HomeIcon className="w-5 h-auto" />
					</button>

					<ul className="flex items-center">
						{three.map((node) => (
							<li key={`file-three-${node.path}`}>
								<span className="mx-1.5">/</span>
								<button
									onClick={() => setPath(node)}
									className="hover:underline"
								>
									{node.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="flex items-center justify-between gap-6 px-4 py-2 bg-white border-b border-gray-100/50 dark:bg-black">
				<div className="flex items-center gap-6">
					<button
						type="button"
						className="flex items-center gap-2 px-2 py-1 transition rounded hover:bg-gray-50/50"
						onClick={() => {
							// Prompt to create a folder
							const newFolderName = prompt("Nom du dossier :");

							if (newFolderName) {
								// Create the folder
								createFolder(newFolderName);
							}
						}}
					>
						<IconFolderAdd className="w-5 h-auto" />
						<span className="text-sm">Créer un dossier</span>
					</button>
				</div>
			</div>
		</>
	);
};

export default Toolbar;
