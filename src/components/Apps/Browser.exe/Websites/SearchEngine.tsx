import IconSearchEngine from "@/assets/icons/google-favicon-example.svg?react";

const SearchEngine = () => {
	return (
		<div className="absolute inset-0 px-8 py-8">
			<h1 className="mb-8 text-3xl text-white">
				Bienvenue sur Goulougoulou !
			</h1>
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
