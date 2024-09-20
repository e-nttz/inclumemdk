import { useTranslation } from "react-i18next";
import Desktop from "./Desktop";
import Taskbar from "./Taskbar";

import IconWarningColor from "@/assets/icons/colors/warning.svg?react";

const InclumeOs = () => {
	const { t } = useTranslation();

	return (
		<>
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
		</>
	);
};

export default InclumeOs;
