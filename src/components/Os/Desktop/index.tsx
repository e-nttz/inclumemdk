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
	

	return (
		<div id="desktop" className="relative grow">
			<GridIcons />

			<RenderAllApps />

			<StartMenu />

			<NotificationsSidebar />

			{/* <div onClick={skipStep} className="cursor-pointer absolute z-10 right-2 bottom-2 flex items-center bg-[#EB5D1D] rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-300">
				<div className="bg-white px-6 py-2 mr-3 rounded-l-2xl">
					<img src={MascotteNeutre} className="w-6" alt="" />
				</div>
				<p className="text-[#D7EBFF] pr-6 py-2 font-semibold">Passer cette étape</p>
			</div> */}
		</div>
	);
};

export default Desktop;
