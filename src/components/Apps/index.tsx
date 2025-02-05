import { useOS } from "@/providers/InclumeOS";
import Browser from "./Browser.exe";
import Explorer from "./Explorer.exe";
import FaceTime from "./FaceTime.exe";
import Message from "./Message.exe";
import Spreadsheets from "./Spreadsheets.exe";
import TextEditor from "./TextEditor.exe";
import Mail from "./Mail.exe";
import ChildVirus from "./ChildVirus.exe";

interface Apps {
	[key: string]: React.FC;
}

export const apps: Apps = {
	message: Message,
	browser: Browser,
	explorer: Explorer,
	spreadSheets: Spreadsheets,
	textEditor: TextEditor,
	mail: Mail,
	childVirus: ChildVirus,
};

const RenderAllApps = () => {
	const { openedApps } = useOS();

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

				const defaultContent = openedApp ? openedApp[1].defaultContent : "";

				return (
					<App
						key={`all-apps-${key}`}
						props={openedApp}
						defaultContent={defaultContent}
					/>
				);
			})}

			<FaceTime />
			<Explorer />
		</>
	);
};

export default RenderAllApps;
