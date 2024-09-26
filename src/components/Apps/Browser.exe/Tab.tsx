import { classNames } from "@/helpers/sanitize";

import IconDismiss from "@/assets/icons/dismiss.svg?react";
import { Tab } from ".";

interface TabProps {
	tab: Tab;
	tabs: Tab[];
	setTabs: (tabs: Tab[]) => void;
	currentTab: number;
	setCurrentTab: (tab: number) => void;
}

const SingleTab = ({
	tab,
	tabs,
	setTabs,
	currentTab,
	setCurrentTab,
}: TabProps) => {
	// find tab index in tabs array
	const tabIndex = tabs.findIndex((item: Tab) => item.id === tab.id);

	const handleTabChange = () => {
		setCurrentTab(tab.id);
	};

	const handleTabClose = () => {
		if (currentTab === tab.id) {
			if (tabIndex === 0) {
				// if the tab to close is the first one, we select the next tab
				setCurrentTab(tabs[1].id);
			} else {
				// if not, we select the previous tab
				setCurrentTab(tabs[tabIndex - 1].id);
			}
		}

		setTabs(tabs.filter((tab: Tab) => tab.id !== tab.id));
	};

	return (
		<div
			className={classNames(
				"relative w-64 text-left py-2 px-4 rounded-t-md transition flex items-center justify-between group shadow",
				currentTab === tab.id
					? "bg-[#F7F7F7] dark:bg-[#292929]"
					: "bg-[#E8E8E8] hover:bg-[#F7F7F7] hover:bg-opacity-70 dark:bg-[#141414] dark:hover:bg-[#292929] dark:hover:bg-opacity-70"
			)}
		>
			<span
				className={classNames(
					"line-clamp-1 text-clip dark:text-white",
					currentTab === tab.id
						? "cursor-default before:w-full before:h-full before:transition before:duration-1000 before:rounded-t-md before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_75%,rgb(247, 247, 247)_82%,rgba(247,247,247,1)_100%)] dark:before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_75%,rgb(41, 41, 41)_82%,rgba(41,41,41,1)_100%)]"
						: "before:w-full before:h-full before:transition before:bg-transparent before:rounded-t-md before:absolute before:inset-0 group-hover:before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_75%,rgba(240,240,240,1)_82%,rgba(240,240,240,1)_100%)] dark:group-hover:before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_75%,rgba(41,41,41,1)_82%,rgba(41,41,41,1)_100%)]"
				)}
			>
				{/* {tab.history[tab.history.length - 1].app.title} */}
				Test
			</span>
			<button
				onClick={handleTabChange}
				className={classNames(
					"absolute inset-0 outline-none",
					currentTab === tab.id ? "pointer-events-none" : ""
				)}
			>
				<span className="sr-only">Activer cet onglet</span>
			</button>
			{tabs.length > 1 && (
				<button
					onClick={handleTabClose}
					className={classNames(
						"transition absolute top-0 bottom-0 my-auto right-4 outline-none dark:text-white",
						currentTab === tab.id
							? "opacity-100"
							: "opacity-0 group-hover:opacity-100"
					)}
				>
					<IconDismiss className="w-4 h-auto" />
					<span className="sr-only">Fermer cet onglet</span>
				</button>
			)}
		</div>
	);
};

export default SingleTab;
