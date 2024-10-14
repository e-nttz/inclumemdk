import { ExplorerProvider } from "@/providers/explorer";
import Browser from "./Browser.exe";
import Explorer from "./Explorer.exe";
import FaceTime from "./FaceTime.exe";
import Message from "./Message.exe";
import Stylesheets from "./Stylesheets.exe";

interface Apps {
	[key: string]: React.FC;
}

export const apps: Apps = {
	message: Message,
	browser: Browser,
	explorer: Explorer,
	stylesheets: Stylesheets,
};

const RenderAllApps = () => {
	return (
		// loop through all apps and render them
		<>
			{Object.keys(apps).map((key) => {
				const App = apps[key];
				return <App key={`all-apps-${key}`} />;
			})}

			<FaceTime />
			<ExplorerProvider>
				<Explorer />
			</ExplorerProvider>
		</>
	);
};

export default RenderAllApps;
