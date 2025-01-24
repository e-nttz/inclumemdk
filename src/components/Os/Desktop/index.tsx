import GridIcons from "./GridIcons";
import NotificationsSidebar from "./NotificationsSidebar";
import StartMenu from "./StartMenu";
import RenderAllApps from "@/components/Apps";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";

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

			<button onClick={skipStep} className="cursor-pointer absolute z-10 right-0">Skip</button>
		</div>
	);
};

export default Desktop;
