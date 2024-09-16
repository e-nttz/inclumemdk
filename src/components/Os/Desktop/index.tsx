import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";

interface DesktopProps {
	startMenuOpen: boolean;
	notificationsOpen: boolean;
	setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Desktop = ({
	startMenuOpen,
	notificationsOpen,
	setNotificationsOpen,
}: DesktopProps) => {
	return (
		<>
			<div id="desktop" className="relative grow">
				<StartMenu startMenuOpen={startMenuOpen} />
				<NotificationsSidebar
					notificationsOpen={notificationsOpen}
					setNotificationsOpen={setNotificationsOpen}
				/>
			</div>
		</>
	);
};

export default Desktop;
