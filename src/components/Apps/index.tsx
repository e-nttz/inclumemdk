import { useOS } from "@/providers/InclumeOS";
import Browser from "./Browser.exe";
import Explorer from "./Explorer.exe";
import FaceTime from "./FaceTime.exe";
import Message from "./Message.exe";
import Spreadsheets from "./Spreadsheets.exe";
import TextEditor from "./TextEditor.exe";
import Mail from "./Mail.exe";

interface Apps {
	[key: string]: React.FC;
}

export const apps: Apps = {
	message: Message,
	browser: Browser,
	explorer: Explorer,
	stylesheets: Spreadsheets,
	textEditor: TextEditor,
	mail: Mail,
};

const RenderAllApps = () => {
	const { openedApps } = useOS();

	console.log(openedApps);

	return (
		// loop through all apps and render them
		<>
			{Object.keys(apps).map((key) => {
				const App: any = apps[key];

				const openedApp = Object.entries(openedApps).find(
					(x) => x[1].title === App.title
				);

				// If app isn't open and unmount is true, don't render
				if (!openedApp && App.unmount) return null;

				return <App key={`all-apps-${key}`} />;
			})}

			<FaceTime />
			<Explorer />
		</>
	);
};

export default RenderAllApps;
