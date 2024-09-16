import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";

interface DesktopProps {
	startMenuOpen: boolean;
	setStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	notificationsOpen: boolean;
	setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Desktop = ({
	startMenuOpen,
	setStartMenuOpen,
	notificationsOpen,
	setNotificationsOpen,
}: DesktopProps) => {
	return (
		<>
			<div id="desktop" className="relative grow">
				<StartMenu
					startMenuOpen={startMenuOpen}
					setStartMenuOpen={setStartMenuOpen}
				/>
				<NotificationsSidebar
					notificationsOpen={notificationsOpen}
					setNotificationsOpen={setNotificationsOpen}
				/>
			</div>
		</>
	);
};

export default Desktop;
