import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";

const Desktop = () => {
	return (
		<div id="desktop" className="relative grow">
			<GridIcons />

			<StartMenu />

			<NotificationsSidebar />
		</div>
	);
};

export default Desktop;
