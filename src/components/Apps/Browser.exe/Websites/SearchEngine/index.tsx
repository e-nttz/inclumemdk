import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import Results from "./Results";
import Homepage from "./Homepage";
import { useEffect, useState } from "react";

interface SearchEngineProps {
	url: string;
}

const SearchEngine = ({ url }: SearchEngineProps) => {
	const [statedUrl, setStatedUrl] = useState(url);

	useEffect(() => {
		setStatedUrl(url);
	}, [url]);

	// return the right component based on the url
	if (url.includes("?search=")) {
		return <Results url={statedUrl} />;
	} else {
		return <Homepage />;
	}
};

export default SearchEngine;

// used in RenderAllWebsites to select the right website
SearchEngine.componentName = "searchEngine";
// used in tab as site title
SearchEngine.title = "Moteur de recherche";

SearchEngine.favicon = <IconSearchEngine />;

SearchEngine.pages = [
	{
		title: "Gougoule",
		url: "https://gougoule.com",
		component: Homepage,
	},
	{
		title: "Gougoule",
		url: "https://gougoule.com/?search=$1",
		component: Results,
	},
];
