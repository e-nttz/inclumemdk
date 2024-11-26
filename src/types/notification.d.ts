interface AppNotification {
	id: number;
	title: string;
	message: string;
	temporary?: boolean;
	muted?: boolean;
	visualHint?: {
		video?: string;
		image?: string;
	};
	action?: {
		label: string;
		onClick: () => void;
	};
}

type NotificationAction =
	| { type: "ADD"; payload: Omit<AppNotification, "id"> }
	| { type: "REMOVE"; payload: { id: number } }
	| { type: "REMOVE_ALL" };

interface NotificationProvider {
	notifications: AppNotification[];
	notificationDispatch: React.Dispatch<NotificationAction>;
	addNotification: (notification: Omit<AppNotification, "id">) => void;
	sidebarVisibile: boolean;
	showSidebar: () => void;
	hideSidebar: () => void;
}

interface NotificationInterface {
	id: number;
	title: string;
	message?: string;
	temporary?: boolean;
}
