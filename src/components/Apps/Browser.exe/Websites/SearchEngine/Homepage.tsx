import { beacon } from "@/helpers/beacon";
import { useState } from "react";
import SearchEngine from ".";
import SearchGougouleIcon from "@/assets/icons/icon_search_gougoule.svg"
import SearchIcon from "@/assets/icons/search.svg"

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
		<div className="absolute inset-0 flex items-center justify-center bgGoulougoulou">
			<div className="w-1/2 flex flex-col items-center">
				<h1 className="mb-8 text-5xl text-[#5A9DFF] font-semibold">Gougoule</h1>
				<form className="w-full relative flex items-center" onSubmit={handleSubmit}>
					<img src={SearchGougouleIcon} alt="Icône gougoule" className="goulougoulouIcon left-[10px] absolute w-[30px]"/>
					<input
						type="text"
						placeholder="Rechercher sur Gougoule"
						className="bg-[#f2f2f2] rounded-[85px] h-[50px] w-full px-2 py-2 transition border shadow-sm border-gray-50 focus-visible:outline-accent pr-[50px] pl-[50px]"
						defaultValue={searchValue || ""}
						onChange={(e) => handleInputChange(e)}
					/>
					<img src={SearchIcon} alt="Icône de recherche" className="search absolute w-[40px] right-[10px]"/>
				</form>
			</div>
		</div>
	);
};

export default Homepage;
