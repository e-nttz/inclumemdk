import { useExplorer } from "@/providers/explorer";
import FileItem from "../FileItem";

const FilesList = () => {
	const { currentPath, getFolderView } = useExplorer();

	return (
		<div className="flex-1 px-2 py-3 overflow-auto">
			{getFolderView(
				currentPath.replace("/root", "/").replace("//", "/")
			)?.map((file) => (
				<FileItem key={file.id || file.path} file={file} complete />
			))}
		</div>
	);
};

export default FilesList;
