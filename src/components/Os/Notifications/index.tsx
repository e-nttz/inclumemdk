import { useNotification } from "@/providers/notifications";
import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useTranslate } from "@tolgee/react";

import React from "react";

const Notification = ({
	id,
	title,
	message,
	temporary = false,
}: NotificationInterface) => {
	const [show, setShow] = React.useState<boolean>(true);
	const NotificationRef = React.useRef<HTMLDivElement | null>(null);
	const NotificationRefTimer = React.useRef<HTMLDivElement | null>(null);

	const NotificationDuration = 5000;

	const { notificationDispatch } = useNotification();

	const handleLeave = (): void => {
		if (NotificationRef?.current) {
			NotificationRef.current.classList.add("h-0");
		}

		setTimeout(() => {
			notificationDispatch({ type: "REMOVE", payload: { id } });
		}, 300);
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
			unmount={false}
		>
			<div
				className="w-full max-w-sm overflow-hidden transition-all duration-300 ease-in border rounded shadow-lg pointer-events-auto dark:border-gray-600/-20 border-gray-300/20 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter"
				ref={NotificationRef}
			>
				<div className="relative p-4">
					<div className="flex items-center justify-between mb-4">
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
								className="inline-flex"
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
						<div className=" w-0 flex-1 pt-0.5">
							<p className="text-sm font-bold text-gray-900 dark:text-white">
								{title}
							</p>

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
						className="absolute inset-x-0 bottom-0 block w-full h-1 origin-left transform opacity-0 bg-accent dark:bg-accent-dark"
						style={{
							transitionProperty: "all",
							transitionDuration: NotificationDuration + "ms",
							transitionTimingFunction: "linear",
						}}
						ref={NotificationRefTimer}
					></span>
				</div>
			</div>
		</Transition>
	);
};

const NotificationCenter = ({ notifications, handleClearAll }: any) => {
	const { t } = useTranslate();

	return (
		<div
			aria-live="assertive"
			className="fixed top-0 bottom-0 right-0 flex items-end w-full max-w-sm max-h-screen px-4 pt-6 pb-20 overflow-auto pointer-events-none sm:px-6 sm:items-start"
			style={{ zIndex: 9000 }}
		>
			<div className="flex flex-col items-center w-full h-full space-y-4 sm:items-end sm:justify-end">
				{notifications.length > 1 && (
					<button
						onClick={() => handleClearAll()}
						className="-mb-2 px-1.5 font-bold opacity-70 hover:opacity-100 py-1 text-xs text-black bg-white rounded-2xl pointer-events-auto transition ease-in"
						type="button"
					>
						{t("clear_all", "Tout effacer")}
					</button>
				)}

				{notifications.map((t: AppNotification) => {
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
