import { useOS } from "@/providers/InclumeOS";
import ContextualBar from "./ContextualBar";
import ControlButtons from "./ControlButtons";

const Topbar = () => {
	const { currentApp, openedApps } = useOS();

	const currentAppIcon = openedApps.find(
		(app) => app.name === currentApp
	)?.icon;

	return (
		<header className="fixed top-0 left-0 z-10 w-full h-20">
			<div className="h-10 bg-[#CCDEEC] flex items-center justify-between px-4 dark:bg-black dark:bg-opacity-30 dark:backdrop-blur-3xl">
				<div className="flex flex-row-reverse items-center">
					<h2 className="px-2 text-sm font-medium text-black pointer-events-none text-opacity-80 dark:text-white">
						{currentApp}
					</h2>
					<figure className="[&>svg]:w-6 [&>svg]:h-auto">
						<>{currentAppIcon}</>
					</figure>
				</div>
				<ControlButtons />
			</div>
			<ContextualBar />
		</header>
	);
};

export default Topbar;
