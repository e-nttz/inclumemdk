import { useOS } from "@/providers/InclumeOS";

const ControlButtons = ({
	onClose,
	onReduce,
}: {
	onClose?: () => void;
	onReduce?: () => void;
}) => {
	const { currentApp, setCurrentApp, setOpenedApps, openedApps } = useOS();

	const handleReduceButton = () => {
		setCurrentApp("");
		if (onReduce) onReduce();
	};

	const handleCloseButton = () => {
		const openedAppsCopy = [...openedApps];
		setOpenedApps(openedAppsCopy.filter((app) => app.title !== currentApp));
		setCurrentApp("");

		if (onClose) onClose();
	};
	return (
		<ul className="flex items-center h-full gap-2">
			<li className="flex items-center justify-center h-[80%]">
				<button
					className="h-full px-2 transition rounded-md hover:bg-black hover:bg-opacity-20 focus-visible:bg-black focus-visible:bg-opacity-20 focus-visible:outline-none dark:hover:bg-white dark:hover:bg-opacity-10"
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
				<button className="h-full px-2 transition rounded-md hover:bg-black hover:bg-opacity-20 focus-visible:bg-black focus-visible:bg-opacity-20 focus-visible:outline-none dark:hover:bg-white dark:hover:bg-opacity-10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 21 19"
						aria-hidden="true"
						className="w-[14px] h-auto"
					>
						<path
							stroke="currentColor"
							strokeWidth="1.824"
							d="M1.713 0.112L1.713 18.351"
						></path>
						<path
							stroke="currentColor"
							strokeWidth="1.824"
							d="M19.207 0.112L19.207 18.351"
						></path>
						<path
							stroke="currentColor"
							strokeWidth="1.824"
							d="M20.239 1.024L0.801 1.024"
						></path>
						<path
							stroke="currentColor"
							strokeWidth="1.824"
							d="M20.239 17.439L0.801 17.439"
						></path>
					</svg>
					<span className="sr-only">Bouton factice</span>
				</button>
			</li>
			<li className="flex items-center justify-center h-[80%]">
				<button
					className="h-full px-2 transition rounded-md hover:bg-black hover:bg-opacity-20 focus-visible:bg-black focus-visible:bg-opacity-20 focus-visible:outline-none dark:hover:bg-white dark:hover:bg-opacity-10"
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
	);
};

export default ControlButtons;
