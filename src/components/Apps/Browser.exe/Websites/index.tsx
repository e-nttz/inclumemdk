import SearchEngine from "./SearchEngine";
import Welcome from "./Welcome";

interface WebsitesProps {
	[key: string]: React.FC;
}

export const websites: WebsitesProps = {
	welcome: Welcome,
	searchEngine: SearchEngine,
};
