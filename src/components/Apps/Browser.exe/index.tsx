import Window from "@/components/Os/Window";
import { ReactElement, useEffect, useState } from "react";

import BrowserIcon from "@/assets/icons/app-browser.svg?react";
import SingleTab from "./Tab";
import NewTabButton from "./NewTabButton";
import NavigationBar from "./NavigationBar";
import RenderWebsite, { websites } from "./Websites";
import { useBeaconListener } from "@/helpers/beacon";
import LoadingState from "./Websites/LoadingState";
import { beacon } from "@/helpers/beacon";

interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

export type Tab = {
	id: number;
	history: {
		website: Website;
		url: string;
	}[];
};

const Browser: AppProps = () => {
	const [prevNav, setPrevNav] = useState(false);
	const [loading, setLoading] = useState(false);
	const [tabs, setTabs] = useState([
		{
			id: 1,
			history: [
				{
					website: websites.welcome as Website,
					url: "",
				},
			],
		},
	]);

	const [currentTab, setCurrentTab] = useState(1);
	const [currentHistoryIndex, setCurrentHistoryIndex] = useState(0);

	const [currentHistoryTab, setCurrentHistoryTab] = useState([
		{
			tabId: 1,
			historyIndex: 0,
		},
	]);

	const handleOpenWebsite = (e, prevNav) => {
		setLoading(true);
		const tab = tabs.find((tab) => tab.id === currentTab);
		if (!prevNav) {
			tab?.history.push({
				website: e.detail.website,
				url: e.detail.url,
			});
			setTabs((prev: Tab[]) => {
				const index = prev.findIndex((tab) => tab.id === currentTab);
				const newTabs = [...prev];
				newTabs[index] = tab;
				return newTabs;
			});

			setCurrentHistoryIndex(tab?.history.length - 1);

			setCurrentHistoryTab((prev) => [
				// find if the tab is already in the history
				...prev.filter((tab) => tab.tabId !== currentTab),
				{
					tabId: currentTab,
					historyIndex: tab?.history.length - 1,
				},
			]);
		} else {
			setTabs((prev: Tab[]) => {
				const index = prev.findIndex((tab) => tab.id === currentTab);
				const newTabs = [...prev];
				newTabs[index] = tab;
				return newTabs;
			});

			setCurrentHistoryIndex(tab?.history.length - 1);

			setCurrentHistoryTab((prev) => [
				// find if the tab is already in the history
				...prev.filter((tab) => tab.tabId !== currentTab),
				{
					tabId: currentTab,
					historyIndex: tab?.history.length - 2,
				},
			]);
		}

		// add tab in tabs
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	const handlePreviousButton = () => {
		const tab = tabs.find((tab) => tab.id === currentTab);
		if (tab?.history.length > 1) {
			const previousWebsite = {
				detail: {
					website:
						tab && tab.history.length > 1
							? tab.history[tab.history.length - 2].website
							: undefined,
					url:
						tab && tab.history.length > 1
							? tab.history[tab.history.length - 2].url
							: undefined,
				},
			};
			handleOpenWebsite(previousWebsite, true);

			setCurrentHistoryIndex((prev) => prev - 1);

			setCurrentHistoryTab((prev) => [
				// find if the tab is already in the history
				...prev.filter((tab) => tab.tabId !== currentTab),
				{
					tabId: currentTab,
					historyIndex: currentHistoryIndex - 1,
				},
			]);
		}
	};

	const handleNextButton = () => {
		const tab = tabs.find((tab) => tab.id === currentTab);
		if (tab?.history.length > 1) {
			setCurrentHistoryIndex((prev) => prev + 1);

			setCurrentHistoryTab((prev) => [
				// find if the tab is already in the history
				...prev.filter((tab) => tab.tabId !== currentTab),
				{
					tabId: currentTab,
					historyIndex: currentHistoryIndex + 1,
				},
			]);
		}
	};

	const handleRefreshButton = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 300);
	};

	useBeaconListener("openWebsite", (e) => handleOpenWebsite(e, prevNav));
	// useBeaconListener("openPreviousWebsite", handlePreviousButton);
	// useBeaconListener("openNextWebsite", handleNextButton);
	useBeaconListener("handleRefresh", handleRefreshButton);

	useEffect(() => {
		const tab = currentHistoryTab.find((tab) => tab.tabId === currentTab);

		if (tab) {
			setCurrentHistoryIndex(tab.historyIndex);
		}
	}, [currentTab, currentHistoryTab]);

	return (
		<Window appName={Browser.title}>
			<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-[#E0EBF6] dark:bg-black/70 dark:backdrop-blur">
				<header className="bg-[#E0EBF6] dark:bg-[#141414]">
					<nav className="flex px-1 py-1 space-x-2">
						{tabs.map((tab) => (
							<SingleTab
								key={`browser-tab-${tab.id}`}
								tab={tab}
								tabs={tabs}
								setTabs={setTabs}
								currentTab={currentTab}
								setCurrentTab={setCurrentTab}
								currentHistoryIndex={currentHistoryIndex}
							/>
						))}
						{/* <NewTabButton
							setTabs={setTabs}
							setCurrentTab={setCurrentTab}
							setCurrentHistoryTab={setCurrentHistoryTab}
							setCurrentHistoryIndex={setCurrentHistoryIndex}
						/> */}
					</nav>
					<div className="px-1 pb-1">
						<NavigationBar
							tab={tabs.find((tab) => tab.id === currentTab)}
							currentHistoryIndex={currentHistoryIndex}
							openPreviousWebsite={handlePreviousButton}
							openNextWebsite={handleNextButton}
						/>
					</div>
				</header>
				<main className="flex flex-1 px-1 pb-1">
					<div className="relative flex-1 overflow-hidden bg-white rounded-lg">
						{loading ? (
							<LoadingState />
						) : (
							<RenderWebsite
								componentName={
									tabs.find((tab) => tab.id === currentTab)?.history[
										currentHistoryTab.find(
											(tab) => tab.tabId === currentTab
										)?.historyIndex
									]?.website.componentName
								}
								url={
									tabs.find((tab) => tab.id === currentTab)?.history[
										currentHistoryTab.find(
											(tab) => tab.tabId === currentTab
										)?.historyIndex
									]?.url
								}
							/>
						)}
					</div>
				</main>
			</section>
		</Window>
	);
};

export default Browser;

Browser.title = "Navigateur";
Browser.icon = <BrowserIcon />;
