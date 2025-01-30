import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";
import RenderAllApps from "@/components/Apps";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";
import MascotteNeutre from "@/assets/mascotte/mascotte_neutre.svg";

const Desktop = () => {
	const {session} = useAuth();
	const skipStep = async () =>{
		const step = await getNextStep(session);
		await saveStep(session, {
			test_step_template_id: step.id,
			is_successful: false,
		})
	}

	return (
		<div id="desktop" className="relative grow">
			<GridIcons />

			<RenderAllApps />

			<StartMenu />

			<NotificationsSidebar />

			<div onClick={skipStep} className="cursor-pointer absolute z-10 right-2 bottom-2 flex items-center bg-[#EB5D1D] rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-300">
				<div className="bg-white px-6 py-2 mr-3 rounded-l-2xl">
					<img src={MascotteNeutre} className="w-6" alt="" />
				</div>
				<p className="text-[#D7EBFF] pr-6 py-2 font-semibold">Passer cette étape</p>
			</div>
		</div>
	);
};

export default Desktop;
