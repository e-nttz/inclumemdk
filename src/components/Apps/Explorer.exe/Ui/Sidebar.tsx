import { useExplorer } from "@/providers/explorer";
import FileItem from "./FileItem";

const Sidebar = () => {
	const { getFolderView, getStructure } = useExplorer();

	return (
		<aside className="flex-1 px-1 py-4 overflow-auto border-r border-gray-50 dark:border-gray-800 dark:bg-gray-900/50">
			<ul className="space-y-1">
				<li>
					<FileItem file={getStructure()} />
				</li>

				{getFolderView("/")?.map((node) => (
					<li key={node.path}>
						<FileItem file={node} />
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;
