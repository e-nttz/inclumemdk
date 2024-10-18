import { NotificationProvider } from "@/providers/notifications";
import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";
import RenderAllApps from "@/components/Apps";

const Desktop = () => {
	return (
		<div id="desktop" className="relative grow">
			<GridIcons />

			<RenderAllApps />

			<StartMenu />

			<NotificationsSidebar />
		</div>
	);
};

export default Desktop;
