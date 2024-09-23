import { useOS } from "@/providers/InclumeOS";
import ContextualBar from "./ContextualBar";
import ControlButtons from "./ControlButtons";
import { classNames } from "@/helpers/sanitize";

const Topbar = ({ contextMenus }) => {
	const { currentApp, openedApps } = useOS();

	const currentAppIcon = openedApps.find(
		(app) => app.title === currentApp
	)?.icon;

	return (
		<header
			className={classNames(
				"top-0 left-0 z-10 w-full",
				contextMenus ? "h-20" : "h-10"
			)}
		>
			<div className="flex items-center justify-between h-10 px-4 border-b dark:border-gray-600/-20 border-gray-300/20 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter">
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

			{contextMenus && <ContextualBar>{contextMenus}</ContextualBar>}
		</header>
	);
};

export default Topbar;
