import { useNotification } from "@/providers/notifications";
import { useEffect, useState } from "react";

const NotificationsArea = () => {
	const { sidebarVisibile, showSidebar, hideSidebar, notifications } =
		useNotification();
	const [currentTime, setCurrentTime] = useState(new Date());

	// update clock every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const date = new Date() as Date;
	const currentDay = date.toLocaleDateString("fr-FR", {
		day: "numeric",
	});
	const currentYear = date.toLocaleDateString("fr-FR", {
		year: "numeric",
	});
	let currentMonth = date.toLocaleDateString("fr-FR", {
		month: "long",
	});

	currentMonth =
		currentMonth.length > 4 ? `${currentMonth.slice(0, 4)}.` : currentMonth;

	const currentDate = currentDay + " " + currentMonth + " " + currentYear;
	return (
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
				{currentTime.toLocaleTimeString("fr-FR", {
					hour: "numeric",
					minute: "numeric",
				})}
				<br />
				{currentDate}
			</button>
			<button
				type="button"
				className="relative flex items-center justify-center w-8 h-8 transition duration-150 rounded hover:bg-white/50 focus:outline-none active:scale-90 active:bg-white dark:hover:bg-black/25 dark:active:bg-black/50"
				onClick={() => (sidebarVisibile ? hideSidebar() : showSidebar())}
				id="notifications-button"
			>
				<svg
					width="14"
					height="15"
					viewBox="0 0 14 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.07812 12H1.96094C1.70052 12 1.45052 11.9479 1.21094 11.8438C0.976562 11.7344 0.768229 11.5911 0.585938 11.4141C0.408854 11.2318 0.265625 11.0234 0.15625 10.7891C0.0520833 10.5495 0 10.2995 0 10.0391V1.96094C0 1.70052 0.0520833 1.45312 0.15625 1.21875C0.265625 0.979167 0.408854 0.770833 0.585938 0.59375C0.768229 0.411458 0.976562 0.268229 1.21094 0.164062C1.45052 0.0546875 1.70052 0 1.96094 0H12.0391C12.2995 0 12.5469 0.0546875 12.7812 0.164062C13.0208 0.268229 13.2292 0.411458 13.4062 0.59375C13.5885 0.770833 13.7318 0.979167 13.8359 1.21875C13.9453 1.45312 14 1.70052 14 1.96094V10.0391C14 10.3099 13.9453 10.5651 13.8359 10.8047C13.7266 11.0391 13.5807 11.2448 13.3984 11.4219C13.2161 11.599 13.0026 11.7396 12.7578 11.8438C12.5182 11.9479 12.2656 12 12 12H9.92188L7.375 14.8359C7.27604 14.9453 7.15104 15 7 15C6.84896 15 6.72396 14.9453 6.625 14.8359L4.07812 12ZM13 10V2C13 1.86458 12.974 1.73698 12.9219 1.61719C12.8698 1.49219 12.7969 1.38542 12.7031 1.29688C12.6146 1.20312 12.5078 1.13021 12.3828 1.07812C12.263 1.02604 12.1354 1 12 1H2C1.85938 1 1.72917 1.02604 1.60938 1.07812C1.48958 1.13021 1.38281 1.20312 1.28906 1.29688C1.20052 1.38542 1.13021 1.48958 1.07812 1.60938C1.02604 1.72917 1 1.85938 1 2V10C1 10.1406 1.02604 10.2734 1.07812 10.3984C1.13021 10.5182 1.20052 10.6224 1.28906 10.7109C1.3776 10.7995 1.48177 10.8698 1.60156 10.9219C1.72656 10.974 1.85938 11 2 11H4.29688C4.36979 11 4.4375 11.013 4.5 11.0391C4.56771 11.0651 4.625 11.1068 4.67188 11.1641L7 13.75L9.32812 11.1641C9.375 11.1068 9.42969 11.0651 9.49219 11.0391C9.5599 11.013 9.63021 11 9.70312 11H12C12.1406 11 12.2708 10.974 12.3906 10.9219C12.5104 10.8698 12.6146 10.7995 12.7031 10.7109C12.7969 10.6172 12.8698 10.5104 12.9219 10.3906C12.974 10.2708 13 10.1406 13 10Z"
						fill="currentColor"
					/>
				</svg>

				{notifications.length > 0 && (
					<span className="absolute right-0 flex items-center justify-center h-5 text-sm font-bold leading-none text-white bg-red rounded-full -top-1 min-w-5 pt-0.5 px-0.5">
						{notifications.length}
					</span>
				)}
			</button>
		</nav>
	);
};

export default NotificationsArea;
