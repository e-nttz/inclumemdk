import Apps from "./Apps";
import NotificationsArea from "./NotificationsArea";

const Taskbar = () => {
	return (
		<div
			id="taskbar"
			className="relative z-10 flex justify-center flex-none px-56 border-t shadow-lg dark:border-gray-600/-20 border-gray-300/20 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter"
		>
			<Apps />
			<NotificationsArea />
		</div>
	);
};

export default Taskbar;
