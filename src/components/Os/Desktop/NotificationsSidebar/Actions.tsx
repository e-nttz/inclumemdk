import { useOS } from "@/providers/InclumeOS";

import IconSun from "@/assets/icons/sun-on.svg?react";
import IconSunOff from "@/assets/icons/sun-off.svg?react";
import IconSettings from "@/assets/icons/settings.svg?react";
import IconPause from "@/assets/icons/pause.svg?react";

const Actions = () => {
	const { theme, changeTheme, setPauseMode } = useOS();

	const IconDarkMode = theme === "dark" ? IconSunOff : IconSun;

	return (
		<div className="grid grid-cols-4 gap-2 p-4 text-xs">
			<button
				type="button"
				className="p-2 text-left bg-white rounded hover:bg-white/50 focus:outline-none active:bg-white dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
			>
				<IconSettings className="block w-6 h-6 mb-5" />
				<span>Paramètres</span>
			</button>
			<button
				type="button"
				className="p-2 text-left bg-white rounded hover:bg-white/50 focus:outline-none active:bg-white dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
				onClick={() => {
					changeTheme(theme === "dark" ? "light" : "dark");
				}}
			>
				<IconDarkMode className="block w-6 h-6 mb-5" />
				<span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
			</button>
			<button
				type="button"
				className="p-2 text-left bg-white rounded hover:bg-white/50 focus:outline-none active:bg-white dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
				onClick={() => setPauseMode(true)}
			>
				<IconPause className="block w-6 h-6 mb-5" />
				<span>Pause</span>
			</button>
			<button
				type="button"
				className="p-2 text-left bg-white rounded hover:bg-white/50 focus:outline-none active:bg-white dark:bg-black/30 dark:hover:bg-black/50 dark:active:bg-black/30"
			>
				<svg className="block w-6 h-6 mb-5" fill="none" viewBox="0 0 24 24">
					<circle cx="12" cy="18" r="1" fill="currentColor"></circle>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M9.5 14.5627C10.2016 14.0516 11.0656 13.75 12 13.75C12.9344 13.75 13.7984 14.0516 14.5 14.5627"
					></path>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M16.7128 11.2276C15.3768 10.2962 13.7523 9.75 12.0002 9.75C10.2481 9.75 8.62358 10.2962 7.2876 11.2276"
					></path>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="1.5"
						d="M5 7.94571C6.98421 6.56168 9.39732 5.75 12 5.75C14.6027 5.75 17.0158 6.56168 19 7.94571"
					></path>
				</svg>
				<span>Réseau</span>
			</button>
		</div>
	);
};

export default Actions;
