import IconArrowLeft from "@/assets/icons/arrow-left.svg?react";
import IconArrowRight from "@/assets/icons/arrow-right.svg?react";
import IconRefresh from "@/assets/icons/refresh.svg?react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Tab } from ".";
import { beacon } from "@/helpers/beacon";
import { websites } from "./Websites";

interface NavigationBarProps {
	tab: Tab;
	currentHistoryIndex: number;
}

interface WebsiteProps extends React.FC {
	pages: {
		title: string;
		url: string;
	}[];
}

const NavigationBar = ({ tab, currentHistoryIndex }: NavigationBarProps) => {
	const [inputValue, setInputValue] = useState(
		tab.history[currentHistoryIndex].url
	);

	const handleInputChange = (e: FormEvent) => {
		setInputValue((e.target as HTMLInputElement).value);
	};

	const handlePreviousButtonClick = () => {
		beacon("openPreviousWebsite", {
			tabId: tab.id,
		});
	};

	const handleNextButtonClick = () => {
		beacon("openNextWebsite", {
			tabId: tab.id,
		});
	};

	const handleRefreshButton = () => {
		beacon("handleRefresh", {
			tabId: tab.id,
		});
	};

	const handleUrlSubmit = (e: FormEvent) => {
		e.preventDefault();
		Object.keys(websites).map((key) => {
			const website = websites[key] as WebsiteProps;
			website.pages.map((page) => {
				if (page.url === inputValue) {
					beacon("openWebsite", {
						website,
						url: inputValue,
					});
					beacon("triggerStep", {
						value: "openGougoule",
					});
				}
			});
		});
		inputRef.current?.blur();
	};

	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setInputValue(tab.history[currentHistoryIndex].url);
	}, [tab, currentHistoryIndex]);

	return (
		<div className="p-4 bg-[#F7F7F7] shadow flex items-center justify-between gap-6 dark:text-white dark:bg-[#292929]">
			<div className="flex items-center gap-6">
				<button
					type="button"
					className="px-2 disabled:pointer-events-none first:pl-0 disabled:opacity-20"
					onClick={handlePreviousButtonClick}
					disabled={tab.history.length === 1 || currentHistoryIndex === 0}
				>
					<IconArrowLeft className="w-6 h-auto" />
					<span className="sr-only">Afficher la page précédente</span>
				</button>
				<button
					type="button"
					className="px-2 disabled:pointer-events-none first:pl-0 disabled:opacity-20"
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
					placeholder="Entrez une URL..."
					className="w-full px-2 py-2 transition border rounded-md shadow-sm border-gray-50 focus-visible:outline-accent"
					value={inputValue || tab.history[currentHistoryIndex].url}
					onChange={handleInputChange}
					ref={inputRef}
				/>
				<button
					type="submit"
					className="absolute p-1 -translate-y-1/2 right-2 top-1/2 focus-visible:outline-accent"
				>
					<IconArrowRight className="w-6 h-auto" />
					<span className="sr-only">Aller à l'URL</span>
				</button>
			</form>
		</div>
	);
};

export default NavigationBar;
