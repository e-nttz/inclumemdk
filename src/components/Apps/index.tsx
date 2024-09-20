import Message from "./Message.exe";

interface Apps {
	[key: string]: React.FC;
}

export const apps: Apps = {
	message: Message,
};

const AllApps = () => {
	return (
		// loop through all apps and render them
		<>
			{Object.keys(apps).map((key) => {
				const App = apps[key];
				return <App key={`all-apps-${key}`} />;
			})}
		</>
	);
};

export default AllApps;
