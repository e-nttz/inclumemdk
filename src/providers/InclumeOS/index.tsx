import { getLocalStorage, setLocalStorage } from "@/helpers/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../auth";

const defaultTheme = "light";

const InclumeOSContext = createContext<InclumeOSContextType>({
	appLoading: true,
	theme: defaultTheme,
	changeTheme: () => {},
	currentApp: "",
	openedApp: [],
	launchApp: () => {},
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

	const [openedApp, setOpenedApp] = useState<App[]>([]);

	const launchApp = (app: App) => {
		if (!openedApp.find((a) => a.name === app.name)) {
			setOpenedApp([...openedApp, app]);
		}

		setCurrentApp(app.name);
	};

	return (
		<InclumeOSContext.Provider
			value={{
				appLoading,
				theme,
				changeTheme,
				currentApp,
				openedApp,
				launchApp,
			}}
		>
			{children}
		</InclumeOSContext.Provider>
	);
};

export default InclumeOSProvider;

export const useOS = () => useContext(InclumeOSContext);
