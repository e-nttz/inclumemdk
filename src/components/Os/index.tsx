import Desktop from "./Desktop";
import Taskbar from "./Taskbar";

import { useTranslate } from "@tolgee/react";
import IconWarningColor from "@/assets/icons/colors/warning.svg?react";
import { ContextMenu, ContextMenuTrigger } from "../Ui/context-menu";
import OSContextualMenu from "../Ui/Menus/ContextualMenu";
import ScreenPaused from "./ScreenPaused";
import { useStepsListener } from "@/providers/stepsListener";
import { beacon } from "@/helpers/beacon";
import { useNotification } from "@/providers/notifications";
import { useAuth } from "@/providers/auth";
import { getNextStep } from "@/lib/client/quiz";

const InclumeOs = () => {
	const { notifications } = useNotification();
	const { t } = useTranslate();
	const { pauseMode } = useStepsListener();
	const { addNotification } = useNotification();
	const {session} = useAuth();

	// const fetchStepId = async (session) => {
	// 	try {
	// 	  const step = await getNextStep(session);
	  
	// 	  // Vérifiez si la notification existe déjà
	// 	  const notificationExists = notifications.some(
	// 		(notif) =>
	// 		  notif.title === "Nouveau message !" &&
	// 		  notif.message ===
	// 			"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter."
	// 	  );
	  
	// 	  if (step.id === 1 && !notificationExists) {
	// 		setTimeout(() => {
	// 		  addNotification({
	// 			title: "Nouveau message !",
	// 			message:
	// 			  "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
	// 		  });
	// 		}, 5000);
	// 	  }
	// 	} catch (error) {
	// 	  console.error("Erreur lors de la récupération de l'étape :", error);
	// 	}
	// };
	  
	// fetchStepId(session);
	  

	return (
		<>
			<ContextMenu>
				<ContextMenuTrigger className="flex flex-col flex-1">
					{pauseMode && <ScreenPaused />}
					{/* <p className="absolute font-bold top-4 right-4">
						{
							// convert seconds to minutes and seconds
							`${Math.floor(timer / 60)}:${timer % 60 < 10 ? "0" : ""}${
								timer % 60
							}`
						}
					</p> */}
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
		</>
	);
};

export default InclumeOs;