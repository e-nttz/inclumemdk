import { useNotification } from "@/providers/notifications";
import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import React from "react";

const Notification = ({ message, temporary = true }: NotificationInterface) => {
	const [show, setShow] = React.useState<boolean>(true);
	const NotificationRef = React.useRef<HTMLDivElement | null>(null);
	const NotificationRefTimer = React.useRef<HTMLDivElement | null>(null);

	const NotificationDuration = 10000;

	const { showSidebar } = useNotification();

	const handleLeave = (): void => {
		if (NotificationRef?.current) {
			NotificationRef.current.classList.add("h-0");
		}
	};

	let timer: any = false;

	if (temporary) {
		timer = setTimeout(() => {
			setShow(false);
		}, NotificationDuration);
	}

	React.useEffect(() => {
		if (temporary) {
			NotificationRefTimer?.current?.classList.remove("opacity-0");

			setTimeout(() => {
				NotificationRefTimer?.current?.classList.add("scale-x-0");
			}, 10);
		}

		return () => timer && clearTimeout(timer);
	});

	return (
		<Transition
			appear={true}
			show={show}
			as={React.Fragment}
			enter="transform ease-out duration-300 transition"
			enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
			enterTo="translate-y-0 opacity-100 sm:translate-x-0"
			leave="transition ease-in duration-150"
			leaveFrom="translate-y-0 opacity-100 sm:translate-x-0"
			leaveTo="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
			afterLeave={handleLeave}
			unmount={true}
		>
			<div
				className="w-full max-w-sm overflow-hidden transition-all duration-300 ease-in border rounded shadow-lg pointer-events-auto dark:border-gray-600/-20 border-gray-300/20 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter"
				ref={NotificationRef}
			>
				<div className="relative p-4">
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center gap-2">
							<img
								src="/images/picto.svg"
								alt=""
								className="w-5 h-auto"
							/>
							<p className="text-sm font-bold">Inclume</p>
						</div>

						<div className="flex flex-shrink-0">
							<button
								className="relative z-20 inline-flex"
								onClick={() => {
									setShow(false);
								}}
							>
								<span className="sr-only">Fermer</span>
								<XMarkIcon className="w-5 h-5" aria-hidden="true" />
							</button>
						</div>
					</div>

					<div className="flex items-start">
						<div className="flex-1 w-0 ">
							{message && (
								<p
									className="mt-1 text-sm dark:text-white line-clamp-3"
									dangerouslySetInnerHTML={{
										__html: message.replaceAll("\n", "<br />"),
									}}
								/>
							)}
						</div>
					</div>

					<span
						className="absolute inset-x-0 bottom-0 z-20 block w-full h-1 origin-left transform opacity-0 bg-accent dark:bg-accent-dark"
						style={{
							transitionProperty: "all",
							transitionDuration: NotificationDuration + "ms",
							transitionTimingFunction: "linear",
						}}
						ref={NotificationRefTimer}
					/>

					<button
						onClick={() => {
							showSidebar();
							// Clear timer
							clearTimeout(timer);
							setShow(false);
						}}
						className="absolute inset-0 bg-transparent appearance-none avoid-click-outside outline-focus"
					>
						<span className="sr-only">Afficher les notifications</span>
					</button>
				</div>
			</div>
		</Transition>
	);
};

const NotificationCenter = ({ notifications }: any) => {
	return (
		<div
			aria-live="assertive"
			className="fixed top-0 bottom-0 right-0 flex items-end w-full max-w-sm max-h-screen px-4 pt-6 pb-20 overflow-auto pointer-events-none sm:px-6 sm:items-start"
			style={{ zIndex: 9000 }}
		>
			<div className="flex flex-col items-center w-full h-full space-y-4 sm:items-end sm:justify-end">
				{/* {notifications.length > 1 && (
					<button
						onClick={() => handleClearAll()}
						className="-mb-2 px-1.5 font-bold opacity-70 hover:opacity-100 py-1 text-xs text-black bg-white rounded-2xl pointer-events-auto transition ease-in"
						type="button"
					>
						{t("clear_all", "Tout effacer")}
					</button>
				)} */}

				{notifications.map((t: AppNotification) => {
					if (t.muted) return null;

					return (
						<Notification
							id={t.id}
							key={t.id}
							title={t.title}
							message={t.message}
							temporary={t.temporary}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default NotificationCenter;
