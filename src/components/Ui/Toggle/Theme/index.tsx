import { useOS } from "@/providers/InclumeOS";

import IconSun from "@/assets/icons/sun-on.svg?react";
import IconSunOff from "@/assets/icons/sun-off.svg?react";

const ThemeToggler = () => {
	const { theme, changeTheme } = useOS();

	const Icon = theme === "dark" ? IconSunOff : IconSun;

	return (
		<button
			onClick={() => {
				changeTheme(theme === "dark" ? "light" : "dark");
			}}
		>
			<span className="sr-only">Changer le thème</span>
			<Icon className="w-6 h-auto text-white mix-blend-difference" />
		</button>
	);
};

export default ThemeToggler;
