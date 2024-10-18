import NotificationCenter from "@/components/Os/Notifications";
import { createContext, useContext, useReducer, useState } from "react";
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
		[]
	);

	const notificationData = { notifications, notificationDispatch };

	const [sidebarVisibile, setSidebarVisibility] = useState<boolean>(false);

	/**
	 * Set the sidebar visibility
	 *
	 * @returns void
	 *
	 */
	const showSidebar = () => {
		setSidebarVisibility(true);
	};

	/**
	 * Hide the sidebar
	 *
	 * @returns void
	 *
	 */
	const hideSidebar = () => {
		setSidebarVisibility(false);
	};

	/**
	 * Clear all notifications
	 *
	 * @returns void
	 *
	 */
	const handleClearAll = () => {
		notificationDispatch({
			type: "REMOVE_ALL",
		});
	};

	/**
	 * Add a notification
	 *
	 * @param {AppNotification} notification
	 * @returns void
	 *
	 */
	const addNotification = (notification) => {
		notificationDispatch({
			type: "ADD",
			payload: notification,
		});
	};

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
