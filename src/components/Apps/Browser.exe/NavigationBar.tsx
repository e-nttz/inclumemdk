import IconArrowLeft from "@/assets/icons/arrow-left.svg?react";
import IconArrowRight from "@/assets/icons/arrow-right.svg?react";
import IconSearch from "@/assets/icons/search.svg?react";
import IconRefresh from "@/assets/icons/refresh.svg?react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Tab } from ".";
import { beacon } from "@/helpers/beacon";
import { websites } from "./Websites";

interface NavigationBarProps {
	tab: Tab;
	currentHistoryIndex: number;
	openPreviousWebsite: () => void;
	openNextWebsite: () => void;
}

interface WebsiteProps extends React.FC {
	pages: {
		title: string;
		url: string;
	}[];
}

const NavigationBar = ({
	tab,
	currentHistoryIndex,
	openNextWebsite,
	openPreviousWebsite,
}: NavigationBarProps) => {
	const [inputValue, setInputValue] = useState(
		tab.history[currentHistoryIndex].url
	);

	const handleInputChange = (e: FormEvent) => {
		setInputValue((e.target as HTMLInputElement).value);
	};

	const handlePreviousButtonClick = () => {
		openPreviousWebsite();
	};

	const handleNextButtonClick = () => {
		openNextWebsite();
	};

	const handleRefreshButton = () => {
		beacon("handleRefresh", {
			tabId: tab.id,
		});
	};

	const handleUrlSubmit = (e: FormEvent) => {
		e.preventDefault();
	  
		let isUrlFound = false;
	  
		// Parcours des sites et pages
		Object.keys(websites).map((key) => {
		  const website = websites[key] as WebsiteProps;
		  website.pages.map((page) => {
			// Si l'URL entrée correspond à une URL d'un site
			if (page.url === inputValue) {
			  isUrlFound = true;
	  
			  // Ouvre le site correspondant
			  beacon("openWebsite", {
				website,
				url: inputValue,
			  });
			  beacon("triggerStep", {
				value: "openWebsite",
			  });
			}
		  });
		});
	  
		// Si aucune correspondance n'a été trouvée, on effectue une recherche sur Gougoule
		if (!isUrlFound) {
			beacon("openWebsite", {
				website: websites.searchEngine, // On utilise "SearchEngine" ici
				url: `https://gougoule.com/?search=${inputValue}`,
			});
			beacon("triggerStep", {
				value: "openGougoule",
			});
		}
	  
		// Retirer le focus du champ de saisie
		inputRef.current?.blur();
	  };
	  

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setInputValue(tab.history[currentHistoryIndex].url);
	}, [tab, currentHistoryIndex]);

	return (
		<div className="bg-white rounded-lg px-4 py-1 flex items-center justify-between gap-4 dark:text-white dark:bg-[#292929]">
			<div className="flex items-center gap-2">
				<button
					type="button"
					className="px-2 disabled:pointer-events-none first:pl-0 disabled:text-black disabled:text-opacity-30"
					onClick={handlePreviousButtonClick}
					disabled={tab.history.length === 1 || currentHistoryIndex === 0}
				>
					<IconArrowLeft className="w-6 h-auto" />
					<span className="sr-only">Afficher la page précédente</span>
				</button>
				<button
					type="button"
					className="px-2 disabled:pointer-events-none first:pl-0 disabled:text-black disabled:text-opacity-30"
					onClick={handleNextButtonClick}
					disabled={
						tab.history.length === 1 ||
						currentHistoryIndex === tab.history.length - 1
					}
				>
					<IconArrowRight className="w-6 h-auto" />
					<span className="sr-only">Afficher la page suivante</span>
				</button>
				<button
					type="button"
					className="px-2 first:pl-0"
					onClick={handleRefreshButton}
				>
					<IconRefresh className="w-6 h-auto" />
					<span className="sr-only">Rafraichir la page</span>
				</button>
			</div>
			<form
				onSubmit={(e: FormEvent) => {
					handleUrlSubmit(e);
				}}
				className="relative flex-1"
			>
				<input
					type="text"
					placeholder="Effectuez une recherche"
					className="w-full p-2 pl-12 transition rounded-full h-9 focus-visible:outline-accent bg-[#1265AF12] bg-opacity-[0.07] placeholder:text-sm placeholder:text-black placeholder:text-opacity-60"
					value={inputValue}
					onChange={handleInputChange}
					ref={inputRef}
					onCopy={(e) => {
						navigator.clipboard.writeText(inputValue).then(() => {
							console.log("Texte copié dans le presse-papiers !");
							}).catch(err => console.error("Erreur de copie :", err));
					}}						
				/>
				<button
					type="submit"
					className="absolute -translate-y-1/2 left-2 top-1/2 focus-visible:outline-accent opacity-60"
				>
					<IconSearch className="w-8 h-auto" />
					<span className="sr-only">Aller à l'URL</span>
				</button>
			</form>
			<figure>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					fill="none"
				>
					<circle cx="16" cy="16" r="16" fill="#9DBDD6"></circle>
					<mask
						id="a"
						width="32"
						height="32"
						x="0"
						y="0"
						maskUnits="userSpaceOnUse"
						style={{ maskType: "alpha" }}
					>
						<circle cx="16" cy="16" r="16" fill="#84ADC9"></circle>
					</mask>
					<g mask="url(#a)">
						<path
							fill="#D7EBFF"
							d="M11.676 24.254h8.264a1.28 1.28 0 011.281 1.278v6.807a3.119 3.119 0 01-3.12 3.114h-4.583a3.119 3.119 0 01-3.12-3.114v-6.807c0-.706.573-1.278 1.28-1.278h-.002z"
						></path>
						<path
							fill="#15365E"
							d="M21.221 28.503H10.395v.566H21.22v-.566z"
						></path>
						<path
							fill="#D7EBFF"
							d="M13.269 30.275a1.488 1.488 0 100-2.973c-.823 0-1.49.666-1.49 1.487 0 .82.667 1.486 1.49 1.486z"
						></path>
						<path
							fill="#15365E"
							d="M13.269 30.558c-.98 0-1.774-.794-1.774-1.77a1.775 1.775 0 013.548 0c0 .976-.797 1.77-1.774 1.77zm0-2.973c-.665 0-1.206.54-1.206 1.204a1.207 1.207 0 002.412 0c0-.664-.541-1.204-1.206-1.204zm11.354-.175a1.843 1.843 0 001.845-1.84 1.843 1.843 0 00-1.845-1.842c-1.02 0-1.846.825-1.846 1.841 0 1.017.826 1.842 1.846 1.842z"
						></path>
						<path
							fill="#D7EBFF"
							d="M27.407 25.727l.917 6.52a1.181 1.181 0 01-1.007 1.334l-3.085.432a1.183 1.183 0 01-1.336-1.005l-.918-6.52a.543.543 0 01.464-.614l4.347-.608a.544.544 0 01.615.462h.003z"
						></path>
						<path
							fill="#15365E"
							d="M6.727 27.77c.981 0 1.776-.793 1.776-1.772s-.795-1.772-1.776-1.772c-.982 0-1.777.793-1.777 1.772 0 .98.795 1.773 1.777 1.773z"
						></path>
						<path
							fill="#D7EBFF"
							d="M9.314 26.742l-.534 6.319a1.138 1.138 0 01-1.23 1.036l-2.99-.252a1.137 1.137 0 01-1.037-1.226l.534-6.319a.524.524 0 01.566-.477l4.215.354a.524.524 0 01.479.566h-.003z"
						></path>
						<path
							fill="#FF5B00"
							d="M28.162 17.687l-2.459.92V9.535l2.459.92c.41.154.682.543.682.98v5.27c0 .437-.272.829-.682.98v.003zm-24.708 0l2.459.92V9.535l-2.459.92c-.41.154-.682.543-.682.98v5.27c0 .437.272.829.682.98v.003z"
						></path>
						<path
							fill="#D7EBFF"
							d="M26.99 10.26v7.619c0 .632-.123 1.243-.37 1.824a4.704 4.704 0 01-2.496 2.49 4.65 4.65 0 01-1.825.369H9.32a4.64 4.64 0 01-1.825-.369 4.656 4.656 0 01-1.49-1.004 4.691 4.691 0 01-1.006-1.486 4.623 4.623 0 01-.37-1.824v-7.62c0-.631.123-1.243.37-1.82a4.598 4.598 0 011.006-1.487 4.7 4.7 0 011.49-1.004A4.649 4.649 0 019.32 5.58H22.3c.633 0 1.246.123 1.825.368a4.61 4.61 0 011.49 1.004 4.7 4.7 0 011.006 1.487c.247.577.37 1.192.37 1.82z"
						></path>
						<path
							fill="#15365E"
							d="M9.32 7.707H22.3a2.557 2.557 0 012.559 2.553v7.619a2.557 2.557 0 01-2.56 2.553H9.32a2.557 2.557 0 01-2.559-2.553v-7.62a2.557 2.557 0 012.56-2.552z"
						></path>
						<path
							fill="#fff"
							d="M14.533 9.865c-.258-.414-1.525-.486-1.731.049-.206.534-.347 4.154 0 4.628.347.475 1.439.498 1.636.063.207-.454.433-4.194.095-4.74zm2.891 0c.27-.414 1.6-.486 1.817.049.218.537.364 4.154 0 4.628-.355.466-1.507.498-1.72.063-.211-.434-.455-4.194-.1-4.74h.003zM16.3 17.356c-3.38.085-3.736-.967-4.77-.958-.533.003-.201 2.587 4.808 2.459 4.883-.126 5.296-2.39 4.654-2.476-.522-.069-1.138.886-4.691.975z"
						></path>
					</g>
				</svg>
			</figure>
		</div>
	);
};

export default NavigationBar;
