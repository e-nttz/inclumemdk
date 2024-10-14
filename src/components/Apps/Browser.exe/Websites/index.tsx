import SearchEngine from "./SearchEngine";
import Welcome from "./Welcome";

interface WebsiteComponentProps {
	url: string;
}

interface WebsitesProps {
	[key: string]: React.FC<WebsiteComponentProps>;
}

interface RenderWebsiteProps {
	componentName: string;
	url: string;
}

export const websites: WebsitesProps = {
	welcome: Welcome,
	searchEngine: SearchEngine,
};

const RenderWebsite = ({ componentName, url }: RenderWebsiteProps) => {
	return (
		// loop through all apps and render them
		<>
			{Object.keys(websites).map((key) => {
				const Website = websites[key];
				// return website only if the componentName matches
				if (key === componentName) {
					return <Website key={`all-websites-${key}-${url}`} url={url} />;
				}
			})}
		</>
	);
};

export default RenderWebsite;
