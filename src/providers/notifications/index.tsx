import NotificationCenter from "@/components/Os/Notifications";
import {
	createContext,
	useCallback,
	useContext,
	useReducer,
	useState,
} from "react";
import { createPortal } from "react-dom";

export const notificationReducer = (
	state: AppNotification[] = [],
	action: NotificationAction
): AppNotification[] => {
	switch (action.type) {
		case "ADD":
			return [
				...state,
				{
					id: +new Date(),
					...action.payload,
				},
			];
		case "REMOVE":
			return state.filter((t) => t.id !== action.payload.id);
		case "REMOVE_ALL":
			return [];
		default:
			return state;
	}
};

export const NotificationContext = createContext<NotificationProvider>({
	notifications: [],
	notificationDispatch: () => {},
	addNotification: (): void => {},
	sidebarVisibile: false,
	showSidebar: () => {},
	hideSidebar: () => {},
});

export const NotificationProvider = ({ children }) => {
	const [notifications, notificationDispatch] = useReducer(
		notificationReducer,
		[
			// {
			// 	id: 1,
			// 	title: "Welcome to Inclume OS",
			// 	message: "This is a notification",
			// 	muted: true,
			// 	action: {
			// 		label: "View",
			// 		onClick: () => {
			// 			alert("Hello");
			// 		},
			// 	},
			// },
			// {
			// 	id: 33333,
			// 	title: "Welcome to Inclume OS",
			// 	message: "This is a notification with image",
			// 	muted: true,
			// 	visualHint: {
			// 		image: "https://external-preview.redd.it/8-reasons-to-avoid-the-latest-windows-11-update-hint-theyre-v0-5r9jKiru_PTykEpqMk_nUtYBZ0TJGepL3huWTi8qgvE.jpg?auto=webp&s=1cdb83b896a4456b59c7f73cea255f1748f7d9cd",
			// 	},
			// 	action: {
			// 		label: "View",
			// 		onClick: () => {
			// 			alert("Hello");
			// 		},
			// 	},
			// },
			// {
			// 	id: 3033,
			// 	title: "Welcome to Inclume OS",
			// 	message: "This is a notification with image",
			// 	muted: true,
			// 	visualHint: {
			// 		image: "https://external-preview.redd.it/8-reasons-to-avoid-the-latest-windows-11-update-hint-theyre-v0-5r9jKiru_PTykEpqMk_nUtYBZ0TJGepL3huWTi8qgvE.jpg?auto=webp&s=1cdb83b896a4456b59c7f73cea255f1748f7d9cd",
			// 	},
			// 	action: {
			// 		label: "View",
			// 		onClick: () => {
			// 			alert("Hello");
			// 		},
			// 	},
			// },
			// {
			// 	id: 3313,
			// 	title: "Welcome to Inclume OS",
			// 	message: "This is a notification with image",
			// 	muted: true,
			// 	visualHint: {
			// 		image: "https://external-preview.redd.it/8-reasons-to-avoid-the-latest-windows-11-update-hint-theyre-v0-5r9jKiru_PTykEpqMk_nUtYBZ0TJGepL3huWTi8qgvE.jpg?auto=webp&s=1cdb83b896a4456b59c7f73cea255f1748f7d9cd",
			// 	},
			// 	action: {
			// 		label: "View",
			// 		onClick: () => {
			// 			alert("Hello");
			// 		},
			// 	},
			// },
			// {
			// 	id: 3233,
			// 	title: "Welcome to Inclume OS",
			// 	message: "This is a notification with image",
			// 	muted: true,
			// 	visualHint: {
			// 		image: "https://external-preview.redd.it/8-reasons-to-avoid-the-latest-windows-11-update-hint-theyre-v0-5r9jKiru_PTykEpqMk_nUtYBZ0TJGepL3huWTi8qgvE.jpg?auto=webp&s=1cdb83b896a4456b59c7f73cea255f1748f7d9cd",
			// 	},
			// 	action: {
			// 		label: "View",
			// 		onClick: () => {
			// 			alert("Hello");
			// 		},
			// 	},
			// },
			// {
			// 	id: 2,
			// 	title: "Welcome to Inclume OS",
			// 	message: "This is an helpful notification with video",
			// 	muted: true,
			// 	visualHint: {
			// 		video: "https://www.youtube.com/watch?v=_85L5NWT87M",
			// 	},
			// },
		]
	);

	const notificationData = { notifications, notificationDispatch };

	const [sidebarVisibile, setSidebarVisibility] = useState<boolean>(false);

	/**
	 * Set the sidebar visibility
	 *
	 * @returns void
	 *
	 */
	const showSidebar = useCallback(() => {
		setSidebarVisibility(true);
	}, []);

	/**
	 * Hide the sidebar
	 *
	 * @returns void
	 *
	 */
	const hideSidebar = useCallback(() => {
		setSidebarVisibility(false);
	}, []);

	/**
	 * Clear all notifications
	 *
	 * @returns void
	 *
	 */
	const handleClearAll = useCallback(() => {
		notificationDispatch({
			type: "REMOVE_ALL",
		});
	}, []);

	/**
	 * Add a notification
	 *
	 * @param {AppNotification} notification
	 * @returns void
	 *
	 */
	const addNotification = useCallback((notification) => {
		notificationDispatch({
			type: "ADD",
			payload: notification,
		});
	}, []);

	return (
		<NotificationContext.Provider
			value={{
				...notificationData,
				addNotification,
				sidebarVisibile,
				showSidebar,
				hideSidebar,
			}}
		>
			<>
				{children}

				{typeof window !== "undefined" &&
					document.querySelector("#inclume-os") &&
					createPortal(
						<NotificationCenter
							notifications={notifications}
							handleClearAll={() => handleClearAll()}
						/>,
						document.querySelector("#inclume-os")
					)}
			</>
		</NotificationContext.Provider>
	);
};

export const useNotification = () => {
	return useContext(NotificationContext);
};
