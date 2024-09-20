import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";
import AllApps from "@/components/Apps";

const Desktop = () => {
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
