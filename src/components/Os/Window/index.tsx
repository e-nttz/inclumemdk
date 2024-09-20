import { classNames } from "@/helpers/sanitize";
import Topbar from "./Topbar";
import { useOS } from "@/providers/InclumeOS";
import { Transition } from "@headlessui/react";

interface WindowProps {
	children: React.ReactNode;
	contextMenus?: React.ReactNode;
	appName: string;
}

const Window = ({ children, contextMenus, appName }: WindowProps) => {
	const { currentApp, openedApps } = useOS();

	const currentAppIndex = openedApps.findIndex((app) => app.title === appName);

	return currentAppIndex >= 0 ? (
		<Transition
			show={currentApp === appName}
			enter="transition ease-out duration-300"
			enterFrom="opacity-0 scale-0 translate-y-full"
			enterTo="opacity-100 scale-100 translate-y-0"
			leave="transition ease-in duration-125"
			leaveFrom="opacity-100 scale-100 translate-y-0"
			leaveTo="opacity-0 scale-0 translate-y-full"
			unmount={false}
		>
			<div
				className={classNames(
					"absolute top-0 left-0 w-full h-full flex-1 rounded-md z-[100] overflow-x-hidden overflow-y-auto flex flex-col"
				)}
			>
				<Topbar contextMenus={contextMenus} />
				<main className="flex flex-col flex-1 overflow-auto mt-00">
					{children}
				</main>
			</div>
		</Transition>
	) : null;
};

export default Window;
