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
				className="absolute bg-[#FCFCFC] bg-opacity-85 backdrop-blur-[60px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.14)] rounded-[7px] border border-white border-opacity-[0.06] w-64 py-1 px-[5px]"
			>
				<li>
					<button className="flex items-center w-full h-8 gap-3 px-[11px] text-sm text-black text-opacity-90 rounded-[3px] transition hover:bg-black hover:bg-opacity-[0.04]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 12 12"
							className="w-4 h-4"
							aria-hidden="true"
						>
							<path
								fill="currentColor"
								d="M6 4a2 2 0 100 4 2 2 0 000-4zM5 6a1 1 0 112 0 1 1 0 01-2 0zm3.618-3.602a.708.708 0 01-.824-.567L7.534.415a.354.354 0 00-.275-.282 6.072 6.072 0 00-2.519 0 .354.354 0 00-.275.282l-.259 1.416a.71.71 0 01-.936.538l-1.359-.484a.355.355 0 00-.382.095c-.569.627-1 1.367-1.262 2.173a.352.352 0 00.108.378l1.102.931a.704.704 0 010 1.076l-1.102.931a.352.352 0 00-.108.378A5.986 5.986 0 001.53 10.02a.355.355 0 00.382.095l1.36-.484a.711.711 0 01.935.538l.26 1.416c.025.14.134.252.274.281a6.075 6.075 0 002.52 0 .353.353 0 00.274-.281l.26-1.416a.71.71 0 01.936-.538l1.359.484c.135.048.286.01.382-.095.569-.627 1-1.367 1.262-2.173a.352.352 0 00-.108-.378l-1.102-.931a.703.703 0 010-1.076l1.102-.931a.352.352 0 00.108-.378A5.985 5.985 0 0010.47 1.98a.355.355 0 00-.382-.095l-1.36.484a.71.71 0 01-.111.03zm-6.62.58l.937.333a1.71 1.71 0 002.255-1.3l.177-.97a5.105 5.105 0 011.265 0l.178.97a1.708 1.708 0 002.255 1.3L10 2.977c.255.334.467.698.63 1.084l-.754.637a1.704 1.704 0 000 2.603l.755.638a4.99 4.99 0 01-.63 1.084l-.937-.334a1.71 1.71 0 00-2.255 1.3l-.178.97a5.099 5.099 0 01-1.265 0l-.177-.97a1.708 1.708 0 00-2.255-1.3L2 9.023a4.986 4.986 0 01-.63-1.084l.754-.638a1.704 1.704 0 000-2.603l-.755-.637c.164-.386.376-.75.63-1.084z"
							></path>
						</svg>
						Paramètres
					</button>
				</li>
				<li>
					<button className="flex items-center w-full h-8 gap-3 px-[11px] text-sm text-black text-opacity-90 rounded-[3px] transition hover:bg-black hover:bg-opacity-[0.04]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 17"
							className="w-4 h-4"
							aria-hidden="true"
						>
							<path
								fill="currentColor"
								d="M9.795 13.993a6.5 6.5 0 10-6.788-6.788c-.351.099-.688.232-1.006.394L2 7.5A7.5 7.5 0 119.4 15c.163-.32.296-.656.395-1.007zM4.5 17a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1-6.5v4a.5.5 0 01-1 0v-4a.5.5 0 011 0zm3 0v4a.5.5 0 01-1 0v-4a.5.5 0 011 0zm3-7.5a.5.5 0 01.492.41L10 3.5V7h2.5a.5.5 0 01.09.992L12.5 8h-3a.5.5 0 01-.492-.41L9 7.5v-4a.5.5 0 01.5-.5z"
							></path>
						</svg>
						Mettre la session sur pause
					</button>
				</li>
				<li>
					<button className="flex items-center w-full h-8 gap-3 px-[11px] text-sm text-black text-opacity-90 rounded-[3px] transition hover:bg-black hover:bg-opacity-[0.04]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 16 16"
							className="w-4 h-4"
							aria-hidden="true"
						>
							<path
								fill="currentColor"
								d="M8 1a7 7 0 110 14V1zm0-1a8 8 0 100 16A8 8 0 008 0z"
							></path>
						</svg>
						Dark Mode
					</button>
				</li>
			</ul>
		</div>
	) : null;
};

export default ContextualMenu;
