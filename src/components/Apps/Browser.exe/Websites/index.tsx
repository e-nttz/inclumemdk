import SearchEngine from "./SearchEngine";
import Welcome from "./Welcome";

interface WebsitesProps {
	[key: string]: React.FC;
}

interface RenderWebsiteProps {
	componentName: string;
}

export const websites: WebsitesProps = {
	welcome: Welcome,
	searchEngine: SearchEngine,
};

const RenderWebsite = ({ componentName }: RenderWebsiteProps) => {
	console.log("ICIIIII : ", componentName);
	return (
		// loop through all apps and render them
		<>
			{Object.keys(websites).map((key) => {
				const Website = websites[key];
				// return website only if the componentName matches
				if (key === componentName) {
					return <Website key={`all-websites-${key}`} />;
				}
			})}
		</>
	);
};

export default RenderWebsite;
