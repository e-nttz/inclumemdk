import Message from "@/components/Apps/Message.exe";
import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";
import { useOS } from "@/providers/InclumeOS";

const Desktop = () => {
	const { currentApp } = useOS();

	return (
		<div id="desktop" className="relative grow">
			<GridIcons />

			{currentApp && <Message />}

			<StartMenu />

			<NotificationsSidebar />
		</div>
	);
};

export default Desktop;
