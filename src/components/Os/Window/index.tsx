import Topbar from "./Topbar";

interface WindowProps {
	children: React.ReactNode;
	contextMenus?: React.ReactNode;
}

const Window = ({ children, contextMenus }: WindowProps) => {
	return (
		<div className="absolute top-0 left-0 w-full h-full flex-1 rounded-md z-[100] overflow-x-hidden overflow-y-auto flex flex-col">
			<Topbar contextMenus={contextMenus} />
			<main className="flex flex-col flex-1 overflow-auto mt-00">
				{children}
			</main>
		</div>
	);
};

export default Window;
