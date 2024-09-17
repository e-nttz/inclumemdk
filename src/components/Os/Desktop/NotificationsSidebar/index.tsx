import { Transition } from "@headlessui/react";
import Actions from "./Actions";
import Notifications from "./Notifications";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

interface NotificationsSidebarProps {
	notificationsOpen: boolean;
	setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationsSidebar = ({
	notificationsOpen,
	setNotificationsOpen,
}: NotificationsSidebarProps) => {
	const nodeRef = useRef<HTMLDivElement>(null);

	useClickOutside(nodeRef, () => {
		setNotificationsOpen(false);
	});

	return (
		<Transition
			show={notificationsOpen}
			enter="transition ease-out duration-300"
			enterFrom="opacity-0 translate-x-full"
			enterTo="opacity-100 translate-x-0"
			leave="transition ease-in duration-100"
			leaveFrom="opacity-100 translate-x-0"
			leaveTo="opacity-0 translate-x-60"
			unmount={false}
		>
			<div
				id="notifications-area"
				className="absolute top-0 bottom-0 right-0 flex flex-col w-96 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter"
				ref={nodeRef}
			>
				<Notifications />
				<Actions />
			</div>
		</Transition>
	);
};

export default NotificationsSidebar;
