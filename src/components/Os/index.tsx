import { useState } from "react";
import Desktop from "./Desktop";
import Taskbar from "./Taskbar";

interface InclumeOsProps {
	darkMode?: boolean;
}

const InclumeOs = ({ darkMode = false }: InclumeOsProps) => {
	const [startMenuOpen, setStartMenuOpen] = useState(false);
	const [notificationsOpen, setNotificationsOpen] = useState(false);
	return (
		<div className="min-w-5xl">
			<div
				id="container"
				className="flex h-dvh min-w-[320px] flex-col overflow-hidden bg-cover bg-center dark:text-gray-100"
				style={{
					backgroundImage: darkMode
						? "url('./images/win11_wallpaper_dark.jpg')"
						: "url('./images/win11_wallpaper_light.jpg')",
				}}
			>
				<Desktop
					startMenuOpen={startMenuOpen}
					notificationsOpen={notificationsOpen}
					setNotificationsOpen={setNotificationsOpen}
				/>
				<Taskbar
					startMenuOpen={startMenuOpen}
					setStartMenuOpen={setStartMenuOpen}
					notificationsOpen={notificationsOpen}
					setNotificationsOpen={setNotificationsOpen}
				/>
			</div>
		</div>
	);
};

export default InclumeOs;
