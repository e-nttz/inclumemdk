import Topbar from "./Topbar";

interface WindowProps {
	children: React.ReactNode;
}

const Window = ({ children }: WindowProps) => {
	return (
		<div className="absolute top-0 left-0 w-full h-full flex-1 rounded-md z-[100] overflow-x-hidden overflow-y-auto flex flex-col">
			<Topbar />
			<main className="flex flex-col flex-1 overflow-auto mt-00">
				{children}
			</main>
		</div>
	);
};

export default Window;
