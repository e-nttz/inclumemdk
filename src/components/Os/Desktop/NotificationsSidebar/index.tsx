import { Transition } from "@headlessui/react";
import Actions from "./Actions";
import Notifications from "./Notifications";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useNotification } from "@/providers/notifications";

const NotificationsSidebar = () => {
	const { sidebarVisibile, hideSidebar } = useNotification();

	const nodeRef = useRef<HTMLDivElement>(null);

	useClickOutside(nodeRef, (e: MouseEvent) => {
		// Check if e.target has the id of start-menu, or if it's a child of start-menu
		if (
			(e.target as HTMLElement).closest("#notifications-button") ||
			(e.target as HTMLElement).closest(".avoid-click-outside")
		) {
			return;
		}

		hideSidebar();
	});

	return (
		<Transition
			show={sidebarVisibile}
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
				className="absolute top-0 bottom-0 right-0 flex flex-col w-96 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter z-[9998]"
				ref={nodeRef}
			>
				<Notifications />
				<Actions />
			</div>
		</Transition>
	);
};

export default NotificationsSidebar;
