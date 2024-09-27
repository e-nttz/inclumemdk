import { classNames } from "@/helpers/sanitize";

import IconAdd from "@/assets/icons/add.svg?react";
import { Tab } from ".";
import { websites } from "./Websites";

interface NewTabButtonProps {
	setTabs: (tabs: Tab[] | ((prev: Tab[]) => Tab[])) => void;
	setCurrentTab: (tab: number) => void;
}

const NewTabButton = ({ setTabs, setCurrentTab }: NewTabButtonProps) => {
	const addTabHandle = () => {
		const newTab: Tab = {
			id: Math.floor(Math.random() * 1000),
			history: [
				{
					id: 1,
					website: websites.welcome as Website,
					url: "",
				},
			],
		};

		setTabs((prev: Tab[]) => [...prev, newTab]);
		setCurrentTab(newTab.id);
	};

	return (
		<div
			className={classNames(
				"relative text-left py-2 px-4 rounded-t-md transition flex items-center justify-between group"
			)}
		>
			<button
				onClick={addTabHandle}
				className={classNames(
					"outline-none before:absolute before:inset-0 dark:text-white"
				)}
			>
				<IconAdd className="w-3 h-auto" />
				<span className="sr-only">Ajouter un onglet</span>
			</button>
		</div>
	);
};

export default NewTabButton;
