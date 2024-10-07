import { beacon } from "@/helpers/beacon";
import { useState } from "react";
import SearchEngine from ".";

const Homepage = () => {
	const [searchValue, setSearchValue] = useState("");

	const handleInputChange = (e) => {
		setSearchValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!searchValue) return;

		let copiedSearchValue = searchValue;

		// replace spaces with +
		copiedSearchValue = encodeURI(copiedSearchValue);

		beacon("openWebsite", {
			website: SearchEngine,
			url: `${SearchEngine.pages[0].url}/?search=${copiedSearchValue}`,
		});
	};

	return (
		<div className="absolute inset-0 flex items-center justify-center px-8 py-8 bg-white">
			<div className="max-w-7xl">
				<h1 className="mb-8 text-3xl">Bienvenue sur Goulougoulou !</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Rechercher sur Goulougoulou"
						className="w-full px-2 py-2 transition border rounded-md shadow-sm border-gray-50 focus-visible:outline-accent"
						defaultValue={searchValue || ""}
						onChange={(e) => handleInputChange(e)}
					/>
				</form>
			</div>
		</div>
	);
};

export default Homepage;
