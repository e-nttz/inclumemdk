import { useOS } from "@/providers/InclumeOS";

const Topbar = () => {
	const { currentApp, setCurrentApp, setOpenedApps, openedApps } = useOS();

	const handleReduceButton = () => {
		setCurrentApp("");
	};

	const handleCloseButton = () => {
		const openedAppsCopy = [...openedApps];
		setOpenedApps(openedAppsCopy.filter((app) => app.name !== currentApp));
		setCurrentApp("");
	};

	return (
		<header className="fixed top-0 left-0 z-10 w-full h-20">
			<div className="h-10 bg-[#CCDEEC] flex items-center justify-between px-4">
				<h2 className="px-2 text-sm font-medium text-black pointer-events-none text-opacity-80">
					{currentApp}
				</h2>
				<ul className="flex items-center h-full gap-2">
					<li className="flex items-center justify-center h-[80%]">
						<button
							className="h-full px-2 transition rounded-md hover:bg-black hover:bg-opacity-20 focus-visible:bg-black focus-visible:bg-opacity-20 focus-visible:outline-none"
							onClick={handleReduceButton}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="2"
								fill="none"
								viewBox="0 0 14 2"
								aria-hidden="true"
							>
								<path
									fill="currentColor"
									d="M.528 1a.5.5 0 01.5-.5h12a.5.5 0 110 1h-12a.5.5 0 01-.5-.5z"
								></path>
							</svg>
							<span className="sr-only">Réduire l'application</span>
						</button>
					</li>
					<li className="flex items-center justify-center h-[80%]">
						<button className="h-full px-2 transition rounded-md hover:bg-black hover:bg-opacity-20 focus-visible:bg-black focus-visible:bg-opacity-20 focus-visible:outline-none">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="13"
								height="12"
								fill="none"
								viewBox="0 0 13 12"
								aria-hidden="true"
							>
								<rect
									width="9"
									height="9"
									x="3.028"
									y="0.5"
									stroke="currentColor"
									rx="0.5"
								></rect>
								<rect
									width="9"
									height="9"
									x="1.028"
									y="2.5"
									fill="#CCDEEC"
									stroke="currentColor"
									rx="0.5"
								></rect>
							</svg>
							<span className="sr-only">Bouton factice</span>
						</button>
					</li>
					<li className="flex items-center justify-center h-[80%]">
						<button
							className="h-full px-2 transition rounded-md hover:bg-black hover:bg-opacity-20 focus-visible:bg-black focus-visible:bg-opacity-20 focus-visible:outline-none"
							onClick={handleCloseButton}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								fill="none"
								viewBox="0 0 14 14"
								aria-hidden="true"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M.528 1l6 6m6 6l-6-6m0 0l-6 6 12-12"
								></path>
							</svg>
							<span className="sr-only">Fermer l'application</span>
						</button>
					</li>
				</ul>
			</div>
			<div className="flex items-center h-10 px-4 bg-slate-100">
				<ul>
					<li>
						<button className="px-2 py-1 text-sm transition hover:bg-black hover:bg-opacity-10 rounded-[3px]">
							Fichier
						</button>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Topbar;
