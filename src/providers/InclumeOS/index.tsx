import { getLocalStorage, setLocalStorage } from "@/helpers/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../auth";

const defaultTheme = "light";

const InclumeOSContext = createContext<InclumeOSContextType>({
	appLoading: true,
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
		if (!openedApps.find((a) => a.name === app.name)) {
			setOpenedApps([...openedApps, app]);
		}

		setCurrentApp(app.name);
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

	return (
		<InclumeOSContext.Provider
			value={{
				appLoading,
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
			}}
		>
			{children}
		</InclumeOSContext.Provider>
	);
};

export default InclumeOSProvider;

export const useOS = () => useContext(InclumeOSContext);
