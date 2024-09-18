import Topbar from "./Topbar";

interface WindowProps {
	children: React.ReactNode;
}

const Window = ({ children }: WindowProps) => {
	return (
		<div className="absolute top-0 left-0 w-full h-[calc(100vh-3.5rem)] rounded-md z-[100] overflow-hidden flex flex-col">
			<Topbar />
			<main className="flex-1 bg-white">{children}</main>
		</div>
	);
};

export default Window;
