import { getLocalStorage, setLocalStorage } from "@/helpers/storage";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { useAuth } from "../auth";
import { beacon } from "@/helpers/beacon";

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
	focusedElement: null,
});

const InclumeOSProvider = ({ children }: InclumeOSProviderProps) => {
	const [appLoading, setAppLoading] = useState<boolean>(true);

	const { sessionLoading } = useAuth();

	useEffect(() => {
		(async () => {
			if (sessionLoading) return;

			setAppLoading(false);
		})();
	}, [sessionLoading]);

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

	const launchApp = useCallback(
		(app: App) => {
			if (!openedApps.find((a) => a.title === app.title)) {
				setOpenedApps([...openedApps, app]);
			} else {
				// Add app.defaultContent to the openedApps
				setOpenedApps(
					openedApps.map((a) => {
						if (a.title === app.title) {
							return {
								...a,
								defaultContent: app.defaultContent,
							};
						}

						return a;
					})
				);
			}

			beacon("triggerStep", {
				value: "open" + app.title,
			});

			setCurrentApp(app.title);
		},
		[openedApps]
	);

	/**
	 * UI State handler
	 */
	const [startMenuOpen, _setStartMenuOpen] = useState<boolean>(false);

	const setStartMenuOpen = (open: boolean) => {
		_setStartMenuOpen(open);
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

	const value = useMemo(
		() => ({
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
			focusedElement,
		}),
		[
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
			focusedElement,
		]
	);

	return (
		<InclumeOSContext.Provider value={value}>
			{children}
		</InclumeOSContext.Provider>
	);
};

export default InclumeOSProvider;

export const useOS = () => useContext(InclumeOSContext);
