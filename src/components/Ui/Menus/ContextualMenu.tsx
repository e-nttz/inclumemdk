import { useContextualMenu } from "@/hooks/useContextualMenu";

const ContextualMenu = () => {
	const { isVisible, position, showMenu } = useContextualMenu();
	return isVisible ? (
		<div
			onContextMenu={showMenu}
			style={{ height: "100vh", width: "100vw" }}
			className="absolute inset-0"
		>
			<ul
				style={{
					top: `${position.y}`,
					left: `${position.x}`,
				}}
				className="absolute bg-[#FCFCFC] bg-opacity-85 backdrop-blur-[60px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.14)] rounded-[7px] border border-white border-opacity-[0.06] w-64"
			>
				<li className="flex items-center justify-between w-full h-8 px-4 text-sm text-black text-opacity-90">
					Option 1
				</li>
				<li className="flex items-center justify-between w-full h-8 px-4 text-sm text-black text-opacity-90">
					Option 2
				</li>
				<li className="flex items-center justify-between w-full h-8 px-4 text-sm text-black text-opacity-90">
					Option 3
				</li>
			</ul>
		</div>
	) : null;
};

export default ContextualMenu;
