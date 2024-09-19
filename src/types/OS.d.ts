interface App extends React.FC {
	name: string;
	icon: React.FC;
}

interface AppProps {
	defaultProps?: object;
}

type Theme = "light" | "dark";

interface InclumeOSContextType {
	appLoading: boolean;
	theme: Theme;
	changeTheme: (theme: Theme) => void;
	currentApp: string;
	openedApps: App[];
	launchApp: (app: App) => void;
	startMenuOpen: boolean;
	setStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	notificationsOpen: boolean;
	setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface InclumeOSProviderProps {
	children: React.ReactNode;
}
