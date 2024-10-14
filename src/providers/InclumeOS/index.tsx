import { getLocalStorage, setLocalStorage } from "@/helpers/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../auth";

const defaultTheme = "light";

const InclumeOSContext = createContext<InclumeOSContextType>({
	appLoading: true,
	testStatus: "success",
	theme: defaultTheme,
	changeTheme: () => {},
	currentApp: "",
	setCurrentApp: () => {},
	openedApps: [],
	setOpenedApps: () => {},
	launchApp: () => {},
	startMenuOpen: false,
	setStartMenuOpen: () => {},
	notificationsOpen: false,
	setNotificationsOpen: () => {},
	focusedElement: null,
});

const InclumeOSProvider = ({ children }: InclumeOSProviderProps) => {
	const [appLoading, setAppLoading] = useState<boolean>(true);

	const { session, authLoading } = useAuth();

	useEffect(() => {
		(async () => {
			if (session) {
				setAppLoading(false);
			}

			if (authLoading) return;

			// Make a fake loader
			await new Promise((resolve) => setTimeout(resolve, 2000));

			setAppLoading(false);
		})();
	}, [session]);

	const [testStatus] = useState<TestStatus>("success");

	/**
	 * The theme state
	 */
	const [theme, setTheme] = useState<Theme>(
		(getLocalStorage("theme") as Theme) || defaultTheme
	);

	const changeTheme = (theme: Theme) => {
		setTheme(theme);

		setLocalStorage("theme", theme);
	};

	/**
	 * The current app state
	 */
	const [currentApp, setCurrentApp] = useState<string>("");

	const [openedApps, setOpenedApps] = useState<App[]>([]);

	const launchApp = (app: App) => {
		if (!openedApps.find((a) => a.title === app.title)) {
			setOpenedApps([...openedApps, app]);
		}

		setCurrentApp(app.title);
	};

	/**
	 * UI State handler
	 */
	const [startMenuOpen, _setStartMenuOpen] = useState<boolean>(false);

	const setStartMenuOpen = (open: boolean) => {
		_setStartMenuOpen(open);
	};

	const [notificationsOpen, _setNotificationsOpen] = useState<boolean>(false);

	const setNotificationsOpen = (open: boolean) => {
		_setNotificationsOpen(open);
	};

	const [focusedElement, setFocusedElement] = useState<HTMLElement | null>(
		null
	);

	// Listener
	useEffect(() => {
		// Check if the user exit the full screen mode
		const listener = () => {
			if (document.fullscreenElement === null) {
				document.body.classList.add("fullscreen-exited");
			}
		};

		document.addEventListener("fullscreenchange", listener);

		// Listen for onbeforeunload
		// window.onbeforeunload = () => {
		// 	// Avoid the user to leave the page
		// 	return false;
		// };

		// Listen for right-click event
		document.addEventListener("contextmenu", (e) => {
			// If element is different than focusedElement, and is an input, textarea or something focusable
			setFocusedElement(e.target as HTMLElement);
		});

		return () => {
			document.removeEventListener("fullscreenchange", listener);
		};
	}, []);

	return (
		<InclumeOSContext.Provider
			value={{
				appLoading,
				testStatus,
				theme,
				changeTheme,
				currentApp,
				setCurrentApp,
				openedApps,
				setOpenedApps,
				launchApp,
				startMenuOpen,
				setStartMenuOpen,
				notificationsOpen,
				setNotificationsOpen,
				focusedElement,
			}}
		>
			{children}
		</InclumeOSContext.Provider>
	);
};

export default InclumeOSProvider;

export const useOS = () => useContext(InclumeOSContext);
