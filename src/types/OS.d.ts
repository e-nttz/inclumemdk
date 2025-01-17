interface App {
	title: string;
	icon?: ReactElement;
	defaultContent?: any;
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
	focusedElement: HTMLElement | null;
}

interface InclumeOSProviderProps {
	children: React.ReactNode;
}

interface Website extends React.FC {
	title: string;
	favicon?: ReactElement;
	componentName: string;
	pages: {
		title: string;
		url: string;
	}[];
}

type AnyDetail = {
	[key: string]: any;
};

type TestStatus = "waiting" | "success" | "failed";

interface ExplorerContextType {
	currentPath: string;
	structures: FileNode;
	setPath: (fileNode: FileNode) => void;
	getFolderView: (forcedPath?: string) => FileNode[];
	getMainFolder: () => FileNode;
	getThree: () => FileNode[];
	getStructure: () => FileNode;
	selectedFile: FileNode | null;
	setSelectedFile: (file: FileNode) => void;
	rename: (fileNode: FileNode, newName: string) => void;
	createFolder: (name: string) => void;
	createFile: (
		name: string,
		fileType: string,
		content: any,
		currentFolderPath: string
	) => void;
	handleInfoWindow: (
		onSelect?: (selectedFile: FileNode) => void,
		onSave?: (filename: string) => void
	) => FileNode;
	closeInfoWindow: () => void;
}

type FileNode = {
	id?: string; // Identifiant unique
	name: string; // Nom modifiable
	type: "file" | "folder";
	createdAt: string; // Date de création au format ISO
	updatedAt: string; // Date de modification au format ISO
	path: string; // Slug formaté basé sur le nom
	extension?: string; // Extension de fichier pour les fichiers uniquement
	slug?: string; // Nom complet avec extension en slug
	children?: FileNode[]; // Optionnel pour les dossiers
	url?: string | null; // URL pour les fichiers images uniquement
	content?: {
		data?: string;
		url?: string;
		localFile?: string;
	};
};

interface StepsListenerContextType {
	pauseMode: boolean;
	setPauseMode: React.Dispatch<React.SetStateAction<boolean>>;
	setTimer: React.Dispatch<React.SetStateAction<number>>;
	clearTimer: () => void;
}

type Session = {
	currentStep: number;
	timer: number;
	cluesShowed: number;
};

type TestStepTemplate = {
	id: string;
	createdAd: string;
	updatedAt: string;
	number: number;
	subNumber: string | null;
	name: string;
	isLastQuestion: boolean;
	stepType: string;
	nextQuestionIfSuccessed: number | null;
	nextQuestionIfFailed: number | null;
	skills: number[];
};

type Clue = {
	time_launched: number;
	title: string;
	message: string;
	media: string;
};
