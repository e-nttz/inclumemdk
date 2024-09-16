import { createContext, useContext, useState } from "react";

const InclumeOSContext = createContext<InclumeOSContextType>({
	currentApp: "",
	openedApp: [],
	launchApp: () => {},
});

const InclumeOSProvider = ({ children }: InclumeOSProviderProps) => {
	const [currentApp, setCurrentApp] = useState<string>("");

	const [openedApp, setOpenedApp] = useState<App[]>([]);

	const launchApp = (app: App) => {
		if (!openedApp.find((a) => a.name === app.name)) {
			setOpenedApp([...openedApp, app]);
		}

		setCurrentApp(app.name);
	};

	return (
		<InclumeOSContext.Provider value={{ currentApp, openedApp, launchApp }}>
			{children}
		</InclumeOSContext.Provider>
	);
};

export default InclumeOSProvider;

export const useOS = () => useContext(InclumeOSContext);
