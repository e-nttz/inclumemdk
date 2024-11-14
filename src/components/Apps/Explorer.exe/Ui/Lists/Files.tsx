import { useExplorer } from "@/providers/explorer";
import FileItem from "../FileItem";
import Icon from "../Icon";

const FilesList = () => {
	const { currentPath, getFolderView, getMainFolder } = useExplorer();

	return (
		<div className="flex-1 px-2 py-3 overflow-auto">
			{currentPath !== "/root" && (
				<div className="p-4">
					<h1 className="flex items-center gap-2 pb-4 text-2xl font-bold border-b border-gray-50/50">
						<Icon type="folder" className="flex-shrink-0" />
						{currentPath === "/root"
							? "Mes fichiers"
							: getMainFolder()?.name}
					</h1>
				</div>
			)}

			<div className="flex flex-row gap-2 px-4 font-bold">
				<p className="flex-1">Nom</p>
				<p className="w-1/4">Type</p>
				<p className="w-1/4">Date de création</p>
			</div>

			{getFolderView(
				currentPath.replace("/root", "/").replace("//", "/")
			)?.map((file) => (
				<FileItem key={file.id || file.path} file={file} complete />
			))}
		</div>
	);
};

export default FilesList;
