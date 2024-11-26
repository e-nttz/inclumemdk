import { useNotification } from "@/providers/notifications";

import { useTranslate } from "@tolgee/react";
import { useEffect } from "react";
import NotificationItem from "./NotificationItem";

const Notifications = () => {
	const { t } = useTranslate();
	const { notifications, sidebarVisibile } = useNotification();

	useEffect(() => {
		// Each time the sidebar come visible, scroll to the bottom of notification-scrollable
		if (sidebarVisibile) {
			const scrollable = document.getElementById("notification-scrollable");

			setTimeout(() => {
				if (scrollable) {
					scrollable.scrollTop = scrollable.scrollHeight;
				}
			}, 300);
		}
	}, [sidebarVisibile]);

	return (
		<>
			<div className="flex flex-col flex-1 p-4 space-y-4 overflow-hidden">
				<div className="flex flex-col flex-1 space-y-2 overflow-hidden">
					<h2 className="flex items-center justify-center gap-2 text-sm font-bold">
						<svg
							width="11"
							height="14"
							viewBox="0 0 11 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="opacity-60"
						>
							<path
								d="M10.9609 9.67188C10.9609 9.85417 10.9245 10.026 10.8516 10.1875C10.7839 10.349 10.6875 10.4896 10.5625 10.6094C10.4427 10.7292 10.3021 10.8255 10.1406 10.8984C9.97917 10.9661 9.8099 11 9.63281 11H8.16406V11.0547C8.16406 11.4141 8.09115 11.7526 7.94531 12.0703C7.80469 12.388 7.61198 12.6641 7.36719 12.8984C7.1224 13.1328 6.83854 13.3203 6.51562 13.4609C6.19271 13.5964 5.85417 13.6641 5.5 13.6641C5.15625 13.6641 4.82292 13.5964 4.5 13.4609C4.17708 13.3255 3.89323 13.1406 3.64844 12.9062C3.40365 12.6719 3.20573 12.3984 3.05469 12.0859C2.90885 11.7734 2.83594 11.4401 2.83594 11.0859V11H1.36719C1.1849 11 1.01042 10.9661 0.84375 10.8984C0.682292 10.8255 0.541667 10.7292 0.421875 10.6094C0.302083 10.4896 0.205729 10.349 0.132812 10.1875C0.0651042 10.0208 0.03125 9.84635 0.03125 9.66406C0.03125 9.40885 0.0989583 9.17448 0.234375 8.96094L1.5 6.94531V4.25781C1.5 3.71615 1.60677 3.20833 1.82031 2.73438C2.03906 2.25521 2.33073 1.83854 2.69531 1.48438C3.0651 1.13021 3.48958 0.851562 3.96875 0.648438C4.45312 0.440104 4.96354 0.335938 5.5 0.335938C6.05208 0.335938 6.57031 0.440104 7.05469 0.648438C7.54427 0.856771 7.96875 1.14323 8.32812 1.50781C8.69271 1.86719 8.97917 2.29167 9.1875 2.78125C9.39583 3.26562 9.5 3.78385 9.5 4.33594V6.94531L10.7578 8.96094C10.8932 9.17448 10.9609 9.41146 10.9609 9.67188ZM1.36719 9.66406H9.63281L8.26562 7.48438C8.19792 7.38021 8.16406 7.26302 8.16406 7.13281V4.28125C8.16406 3.92188 8.09115 3.58333 7.94531 3.26562C7.80469 2.94792 7.61198 2.67188 7.36719 2.4375C7.1224 2.19792 6.83854 2.01042 6.51562 1.875C6.19271 1.73438 5.85417 1.66406 5.5 1.66406C5.13021 1.66406 4.78385 1.73438 4.46094 1.875C4.13802 2.01562 3.85417 2.20833 3.60938 2.45312C3.36979 2.69271 3.17969 2.97396 3.03906 3.29688C2.90365 3.61979 2.83594 3.96615 2.83594 4.33594V7.13281C2.83594 7.26302 2.80208 7.38021 2.73438 7.48438L1.36719 9.66406ZM6.83594 11H4.16406C4.16406 11.1823 4.19792 11.3542 4.26562 11.5156C4.33854 11.6771 4.4349 11.8203 4.55469 11.9453C4.67969 12.0651 4.82292 12.1615 4.98438 12.2344C5.14583 12.3021 5.31771 12.3359 5.5 12.3359C5.68229 12.3359 5.85417 12.3021 6.01562 12.2344C6.17708 12.1615 6.31771 12.0651 6.4375 11.9453C6.5625 11.8203 6.65885 11.6771 6.72656 11.5156C6.79948 11.3542 6.83594 11.1823 6.83594 11Z"
								fill="black"
							/>
						</svg>

						<span>{t("notifications", "Notifications")}</span>
					</h2>

					<ul
						className="flex-1 space-y-2 overflow-auto"
						id="notification-scrollable"
					>
						{notifications.map((notification, index) => {
							const hasVideo =
								notification?.visualHint?.video !== undefined;

							let videoId = "";

							if (hasVideo) {
								// Get the youtube watch id
								videoId =
									notification?.visualHint?.video.split("v=")[1];
							}

							return (
								<NotificationItem
									notification={notification}
									key={`sidebar-notification-${index}`}
									hasVideo={hasVideo}
									videoId={videoId}
									isLast={index === notifications.length - 1}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
};

export default Notifications;
