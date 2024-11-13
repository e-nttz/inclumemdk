import Browser from "./Browser.exe";
import Explorer from "./Explorer.exe";
import FaceTime from "./FaceTime.exe";
import Message from "./Message.exe";
import Spreadsheets from "./Spreadsheets.exe";
import TextEditor from "./TextEditor.exe";

interface Apps {
	[key: string]: React.FC;
}

export const apps: Apps = {
	message: Message,
	browser: Browser,
	explorer: Explorer,
	stylesheets: Spreadsheets,
	textEditor: TextEditor,
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
			<Explorer />
		</>
	);
};

export default RenderAllApps;
