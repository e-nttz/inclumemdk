import { Transition } from "@headlessui/react";

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
	let date = new Date() as Date;
	let currentDay = date.toLocaleDateString("fr-FR", {
		day: "numeric",
	});
	let currentYear = date.toLocaleDateString("fr-FR", {
		year: "numeric",
	});
	let currentMonth = date.toLocaleDateString("fr-FR", {
		month: "long",
	});
	currentMonth =
		currentMonth.length > 4 ? `${currentMonth.slice(0, 4)}.` : currentMonth;

	const currentDate = currentDay + " " + currentMonth + " " + currentYear;

	return (
		<div
			id="taskbar"
			className="relative z-10 flex justify-center flex-none px-56 border-t shadow-lg dark:border-gray-600/-20 border-gray-300/20 bg-white/75 backdrop-blur-lg backdrop-filter dark:bg-gray-800/75 dark:backdrop-blur-lg dark:backdrop-filter"
		>
			{/* <!-- Apps --> */}
			<nav className="flex items-center justify-center gap-1 h-14">
				<button
					type="button"
					className="relative transition duration-150 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
					onClick={() => setStartMenuOpen((prevState) => !prevState)}
				>
					<Transition
						show={startMenuOpen}
						enter="transition ease-out duration-200"
						enterFrom="opacity-0 scale-0"
						enterTo="opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="opacity-100 scale-100"
						leaveTo="opacity-0 scale-0"
					>
						<span className="absolute bottom-0 left-0 right-0 h-1 mx-4 bg-blue-500 rounded" />
					</Transition>
					<span className="block p-2 transition duration-75 active:scale-90">
						<img
							className="relative w-8 h-8"
							src="./images/icons/windows.png"
							alt="Start Menu"
						/>
					</span>
				</button>
				<button
					type="button"
					id="btn-fullscreen"
					className="relative transition duration-75 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					<span className="block p-2 transition duration-75 active:scale-90">
						<img
							className="relative w-8 h-8"
							src="./images/icons/desktop.png"
							alt="Full screen mode"
						/>
					</span>
				</button>
				<button
					type="button"
					className="relative transition duration-75 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					<span className="block p-2 transition duration-75 active:scale-90">
						<img
							className="relative w-8 h-8"
							src="./images/icons/computer-dark.png"
							alt="Dark mode"
						/>
					</span>
				</button>
				<button
					type="button"
					className="relative transition duration-150 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					<span className="block p-2 transition duration-75 active:scale-90">
						<img
							className="relative w-8 h-8"
							src="./images/icons/edge.png"
							alt="MS Edge"
						/>
					</span>
				</button>
				<button
					type="button"
					className="relative transition duration-150 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					<span className="block p-2 transition duration-75 active:scale-90">
						<img
							className="relative w-8 h-8"
							src="./images/icons/folder.png"
							alt="Explorer"
						/>
					</span>
				</button>
				<button
					type="button"
					className="relative transition duration-150 rounded group hover:bg-white/50 focus:outline-none active:bg-white/75 dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					<span className="block p-2 transition duration-75 active:scale-90">
						<img
							className="relative w-8 h-8"
							src="./images/icons/store.png"
							alt="Windows Store"
						/>
					</span>
				</button>
			</nav>
			{/* <!-- END Apps --> */}

			{/* <!-- Notifications Area --> */}
			<nav className="absolute top-0 bottom-0 right-0 flex items-center w-56 h-14">
				<button
					type="button"
					className="flex items-center justify-center w-8 h-8 transition duration-150 rounded hover:bg-white/50 focus:outline-none active:scale-90 active:bg-white dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					<svg className="block w-8 h-8" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M15.25 14.25L12 10.75L8.75 14.25"
						></path>
					</svg>
				</button>
				<button
					type="button"
					className="flex items-center justify-center w-8 h-8 transition duration-150 rounded hover:bg-white/50 focus:outline-none active:scale-90 active:bg-white dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					<svg className="block w-5 h-5" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
						></path>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M15.25 19.25L12 17.25L8.75 19.25"
						></path>
					</svg>
				</button>
				<button
					type="button"
					className="flex items-center justify-center w-8 h-8 transition duration-150 rounded hover:bg-white/50 focus:outline-none active:scale-90 active:bg-white dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					<svg className="block w-5 h-5" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M17.25 4.75L10.5 8.75H7.75C7.19772 8.75 6.75 9.19772 6.75 9.75V14.25C6.75 14.8023 7.19772 15.25 7.75 15.25H10.5L17.25 19.25V4.75Z"
						></path>
					</svg>
				</button>
				<button
					type="button"
					className="flex items-center justify-center flex-shrink-0 h-8 px-2 text-xs font-medium transition duration-150 rounded hover:bg-white/50 focus:outline-none active:scale-90 active:bg-white dark:hover:bg-black/25 dark:active:bg-black/50"
				>
					{date.toLocaleTimeString("fr-FR", {
						hour: "numeric",
						minute: "numeric",
					})}
					<br />
					{currentDate}
				</button>
				<button
					type="button"
					className="flex items-center justify-center w-8 h-8 transition duration-150 rounded hover:bg-white/50 focus:outline-none active:scale-90 active:bg-white dark:hover:bg-black/25 dark:active:bg-black/50"
					onClick={() => setNotificationsOpen((prevState) => !prevState)}
				>
					<svg className="block w-5 h-5" fill="none" viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1.5"
							d="M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z"
						></path>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z"
						></path>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z"
						></path>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z"
						></path>
					</svg>
				</button>
			</nav>
		</div>
	);
};

export default Taskbar;
