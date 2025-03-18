import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";
import RenderAllApps from "@/components/Apps";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";
import { useNotification } from "@/providers/notifications";
import { useEffect } from "react";
import { beacon } from "@/helpers/beacon";

const Desktop = () => {
	const {session} = useAuth();
	const { addNotification } = useNotification();
	useEffect(() => {
		beacon("triggerStep", {
			value: "testLaunched",
		  });
		const start = async () => {
			try {
				const step = await getNextStep(session);
				if (step?.id === 1) {
					setTimeout(() => {
						addNotification({
							title: "Nouveau message !",
							message:
								"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
						});
					},5000)
					setTimeout(() => {
						beacon("call", {
							status: "incoming",
						});
					},10000)
					setTimeout(() => {
						beacon("message", {
							id: Math.random(),
							sender: 0,
							content: "Voici le nom du restaurant : La siesta. Il se trouve à Oostende !",
						});
					}, 13000)
				}
			} catch (error) {
				console.error("Erreur lors de la récupération de l'étape suivante :", error);
			}
		};
	
		start();
	}, [session]);

	window.addEventListener("beforeunload", (e) => {  
		e.preventDefault();
		e.returnValue = "Etes-vous sûr de vouloir quitter le test ?"; // Correctement assigné
	});
	

	return (
		<div id="desktop" className="relative grow">
			<GridIcons />

			<RenderAllApps />

			<StartMenu />

			<NotificationsSidebar />

		</div>
	);
};

export default Desktop;
