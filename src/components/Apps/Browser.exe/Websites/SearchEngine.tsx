import IconSearchEngine from "@/assets/icons/google-favicon-example.svg?react";

const SearchEngine = () => {
	return (
		<div>
			<h1>Bienvenue sur Goulougoulou</h1>
		</div>
	);
};

export default SearchEngine;

SearchEngine.title = "Goulougoulou";
SearchEngine.favicon = <IconSearchEngine />;

SearchEngine.pages = [
	{
		title: "Goulougoulou",
		url: "https://goulougoulou.com",
	},
];
