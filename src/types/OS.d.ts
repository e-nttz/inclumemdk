interface App {
	title: string;
	icon?: ReactElement;
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
	setCurrentApp: React.Dispatch<React.SetStateAction<string>>;
	openedApps: App[];
	setOpenedApps: React.Dispatch<React.SetStateAction<App[]>>;
	launchApp: (app: App) => void;
	startMenuOpen: boolean;
	setStartMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	notificationsOpen: boolean;
	setNotificationsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	focusedElement: HTMLElement | null;
}

interface InclumeOSProviderProps {
	children: React.ReactNode;
}

interface Website extends React.FC {
	title: string;
	favicon?: ReactElement;
	pages: {
		title: string;
		url: string;
	}[];
}

type AnyDetail = {
	[key: string]: any;
};
