interface App extends React.FC {
	name: string;
	icon: React.FC;
}

interface AppProps {
	defaultProps?: object;
}

interface InclumeOSContextType {
	currentApp: string;
	openedApp: App[];
	launchApp: (app: App) => void;
}

interface InclumeOSProviderProps {
	children: React.ReactNode;
}
