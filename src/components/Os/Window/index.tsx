import { classNames } from "@/helpers/sanitize";
import Topbar from "./Topbar";
import { useOS } from "@/providers/InclumeOS";
import { Transition } from "@headlessui/react";

interface WindowProps {
	children: React.ReactNode;
	contextMenus?: React.ReactNode;
	appName: string;
	onClose?: () => void;
	onReduce?: () => void;
	forceRender?: boolean;
	hideTopbar?: boolean;
}

const Window = ({
	children,
	contextMenus,
	appName,
	onClose,
	onReduce,
	forceRender = false,
	hideTopbar = false,
}: WindowProps) => {
	const { currentApp, openedApps } = useOS();

	const currentAppIndex = forceRender
		? 1
		: openedApps.findIndex((app) => app.title === appName);

	return currentAppIndex >= 0 ? (
		<Transition
			show={currentApp === appName || forceRender}
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
					"absolute inset-0 flex flex-col flex-1",
					hideTopbar &&
						"bg-white/50 dark:bg-black/40 z-[1000] backdrop-blur-sm"
				)}
			>
				<div
					className={classNames(
						"absolute flex-1 rounded-md z-[100] overflow-x-hidden overflow-y-auto flex flex-col",
						hideTopbar
							? "inset-x-16 inset-y-16 max-h-[620px] shadow-lg border border-gray-100 dark:border-gray-700"
							: "inset-0"
					)}
				>
					{!hideTopbar && (
						<Topbar
							contextMenus={contextMenus}
							onClose={onClose}
							onReduce={onReduce}
						/>
					)}
					<main className="flex flex-col flex-1 overflow-auto mt-00">
						{children}
					</main>
				</div>
			</div>
		</Transition>
	) : null;
};

export default Window;
