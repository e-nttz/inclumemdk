import { getLocalStorage, setLocalStorage } from "@/helpers/storage";
import { createContext, useContext, useState } from "react";

const defaultTheme = "light";

const InclumeOSContext = createContext<InclumeOSContextType>({
	theme: defaultTheme,
	changeTheme: () => {},
	currentApp: "",
	openedApp: [],
	launchApp: () => {},
});

const InclumeOSProvider = ({ children }: InclumeOSProviderProps) => {
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
			value={{ theme, changeTheme, currentApp, openedApp, launchApp }}
		>
			{children}
		</InclumeOSContext.Provider>
	);
};

export default InclumeOSProvider;

export const useOS = () => useContext(InclumeOSContext);
