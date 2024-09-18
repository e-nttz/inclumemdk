import Message from "@/components/Apps/Message.exe";
import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";

const Desktop = () => {
	return (
		<div id="desktop" className="relative grow">
			<GridIcons />

			{/* App window */}
			<div className="absolute inset-0">
				<Message />
			</div>

			<StartMenu />

			<NotificationsSidebar />
		</div>
	);
};

export default Desktop;
