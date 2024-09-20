import { useTranslation } from "react-i18next";
import Desktop from "./Desktop";
import Taskbar from "./Taskbar";

import IconWarningColor from "@/assets/icons/colors/warning.svg?react";
import { ContextMenu, ContextMenuTrigger } from "../Ui/context-menu";
import OSContextualMenu from "../Ui/Menus/ContextualMenu";

const InclumeOs = () => {
	const { t } = useTranslation();

	return (
		<>
			<ContextMenu>
				<ContextMenuTrigger className="flex flex-col flex-1">
					<div
						id="fullscreen-notice"
						className="absolute top-6 px-4 py-3 right-6 z-[100000] rounded border border-gray-100 bg-white/80 dark:border-gray dark:bg-gray/50 backdrop-blur flex gap-4 max-w-[320px] items-start text-sm hidden"
					>
						<IconWarningColor className="flex-shrink-0 w-6 h-auto" />
						<p>
							{t(
								"Pour une meilleure immersion, l'application devrait être affichée en pleine écran."
							)}
						</p>
					</div>

					<Desktop />
					<Taskbar />

					<OSContextualMenu />
				</ContextMenuTrigger>
			</ContextMenu>
		</>
	);
};

export default InclumeOs;
