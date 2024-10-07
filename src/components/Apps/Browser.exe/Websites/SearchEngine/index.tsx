import IconSearchEngine from "@/assets/icons/google-favicon-example.svg?react";
import Results from "./Results";
import Homepage from "./Homepage";

interface SearchEngineProps {
	url: string;
}

const SearchEngine = ({ url }: SearchEngineProps) => {
	// return the right component based on the url
	if (url.includes("?search=")) {
		return <Results url={url} />;
	} else {
		return <Homepage />;
	}
};

export default SearchEngine;

// used in RenderAllWebsites to select the right website
SearchEngine.componentName = "searchEngine";
// used in tab as site title
SearchEngine.title = "Goulougoulou";

SearchEngine.favicon = <IconSearchEngine />;

SearchEngine.pages = [
	{
		title: "Goulougoulou",
		url: "https://goulougoulou.com",
		component: Homepage,
	},
	{
		title: "Goulougoulou",
		url: "https://goulougoulou.com/?search=$1",
		component: Results,
	},
];
