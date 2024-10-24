import Apps from "./Apps";
import NotificationsArea from "./NotificationsArea";

const Taskbar = () => {
	return (
		<div
			id="taskbar"
			className="relative z-[101] flex justify-center flex-none px-56 border-t shadow-lg dark:border-gray-600/-20 border-gray-300/20 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter"
		>
			<figure className="absolute -translate-y-1/2 left-5 top-1/2">
				<img src="/images/brand.svg" alt="Logo" className="w-20 h-auto" />
			</figure>
			<Apps />
			<NotificationsArea />
		</div>
	);
};

export default Taskbar;
