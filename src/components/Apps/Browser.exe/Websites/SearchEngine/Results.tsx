import { beacon } from "@/helpers/beacon";
import { useState } from "react";
import SearchEngine from ".";

export interface ResultsProps {
	url: string;
}

const Results = ({ url }: ResultsProps) => {
	const [searchedValue, setSearchedValue] = useState(
		decodeURI(url.split("?search=")[1])
	);

	const handleInputChange = (e) => {
		setSearchedValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!searchedValue) return;

		let copiedSearchValue = searchedValue;

		// replace spaces with +
		copiedSearchValue = encodeURI(copiedSearchValue);

		beacon("openWebsite", {
			website: SearchEngine,
			url: `${SearchEngine.pages[0].url}/?search=${copiedSearchValue}`,
		});
	};

	// useEffect(() => {
	// 	beacon("openWebsite", {
	// 		website: SearchEngine,
	// 		url: `${SearchEngine.pages[0].url}/?search=${searchedValue}`,
	// 	});
	// }, []);

	return (
		<div className="absolute inset-0 h-full px-8 py-8 overflow-y-auto bg-white">
			<div className="mx-auto max-w-7xl">
				<h1 className="mb-8 text-3xl">
					{`Résultats de recherches pour "${searchedValue}"`}
				</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="Rechercher sur Goulougoulou"
						className="w-full px-2 py-2 transition border rounded-md shadow-sm border-gray-50 focus-visible:outline-accent"
						defaultValue={searchedValue || ""}
						onChange={(e) => handleInputChange(e)}
					/>
				</form>
				{
					// do a loop to display 10 results
					[...Array(20)].map((_, index) => (
						<div key={index} className="mt-8">
							<h2 className="text *:xl font-medium">
								{`Result ${index + 1}`}
							</h2>
							<p className="mt-2 text-gray-500">
								{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id
							nibh ultricies vehicula ut id elit.`}
							</p>
						</div>
					))
				}
			</div>
		</div>
	);
};

export default Results;
