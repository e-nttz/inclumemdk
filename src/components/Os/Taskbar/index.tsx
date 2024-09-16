import { Transition } from "@headlessui/react";
import Apps from "./Apps";
import NotificationsArea from "./NotificationsArea";

interface TaskbarProps {
	startMenuOpen: boolean;
	setStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	notificationsOpen: boolean;
	setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Taskbar = ({
	startMenuOpen,
	setStartMenuOpen,
	notificationsOpen,
	setNotificationsOpen,
}: TaskbarProps) => {
	return (
		<div
			id="taskbar"
			className="relative z-10 flex justify-center flex-none px-56 border-t shadow-lg dark:border-gray-600/-20 border-gray-300/20 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter"
		>
			<Apps
				startMenuOpen={startMenuOpen}
				setStartMenuOpen={setStartMenuOpen}
			/>
			<NotificationsArea setNotificationsOpen={setNotificationsOpen} />
		</div>
	);
};

export default Taskbar;
