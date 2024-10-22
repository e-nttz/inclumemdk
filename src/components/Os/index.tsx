import Desktop from "./Desktop";
import Taskbar from "./Taskbar";

import { useTranslate } from "@tolgee/react";
import IconWarningColor from "@/assets/icons/colors/warning.svg?react";
import { ContextMenu, ContextMenuTrigger } from "../Ui/context-menu";
import OSContextualMenu from "../Ui/Menus/ContextualMenu";
import { NotificationProvider } from "@/providers/notifications";
import ScreenPaused from "./ScreenPaused";
import { useOS } from "@/providers/InclumeOS";

const InclumeOs = () => {
	const { t } = useTranslate();
	const { pauseMode } = useOS();

	return (
		<>
			<NotificationProvider>
				<ContextMenu>
					<ContextMenuTrigger className="flex flex-col flex-1">
						{pauseMode && <ScreenPaused />}
						<div
							id="fullscreen-notice"
							className="absolute top-6 px-4 py-3 right-6 z-[100000] rounded border border-gray-100 bg-white/80 dark:border-gray dark:bg-gray/50 backdrop-blur gap-4 max-w-[320px] items-start text-sm hidden"
						>
							<IconWarningColor className="flex-shrink-0 w-6 h-auto" />
							<p>
								{t(
									"fullscreen_notice",
									"Pour une meilleure immersion, l'application devrait être affichée en pleine écran."
								)}
							</p>
						</div>

						<Desktop />
						<Taskbar />

						<OSContextualMenu />
					</ContextMenuTrigger>
				</ContextMenu>
			</NotificationProvider>
		</>
	);
};

export default InclumeOs;
