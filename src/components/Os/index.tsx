import { useState } from "react";
import Desktop from "./Desktop";
import Taskbar from "./Taskbar";

const InclumeOs = () => {
	const [startMenuOpen, setStartMenuOpen] = useState(false);
	const [notificationsOpen, setNotificationsOpen] = useState(false);

	return (
		<>
			<Desktop
				startMenuOpen={startMenuOpen}
				setStartMenuOpen={setStartMenuOpen}
				notificationsOpen={notificationsOpen}
				setNotificationsOpen={setNotificationsOpen}
			/>
			<Taskbar
				startMenuOpen={startMenuOpen}
				setStartMenuOpen={setStartMenuOpen}
				notificationsOpen={notificationsOpen}
				setNotificationsOpen={setNotificationsOpen}
			/>
		</>
	);
};

export default InclumeOs;
