import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";
import { useOS } from "@/providers/InclumeOS";
import AllApps from "@/components/Apps";

const Desktop = () => {
	const { currentApp } = useOS();

	return (
		<div id="desktop" className="relative grow">
			<GridIcons />

			<AllApps />

			<StartMenu />

			<NotificationsSidebar />
		</div>
	);
};

export default Desktop;
