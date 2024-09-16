interface App extends React.FC {
	name: string;
	icon: React.FC;
}

interface AppProps {
	defaultProps?: object;
}

type Theme = "light" | "dark";

interface InclumeOSContextType {
	theme: Theme;
	changeTheme: (theme: Theme) => void;
	currentApp: string;
	openedApp: App[];
	launchApp: (app: App) => void;
}

interface InclumeOSProviderProps {
	children: React.ReactNode;
}
