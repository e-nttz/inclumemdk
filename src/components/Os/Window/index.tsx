import Topbar from "./Topbar";

interface WindowProps {
	children: React.ReactNode;
}

const Window = ({ children }: WindowProps) => {
	return (
		<div className="absolute top-0 left-0 w-full h-[calc(100vh-3.5rem)] rounded-md z-[100] overflow-x-hidden overflow-y-auto flex flex-col">
			<Topbar />
			<main className="flex-1 mt-20">{children}</main>
		</div>
	);
};

export default Window;
