import Window from "@/components/Os/Window";
import { ReactElement, useState } from "react";

import BrowserIcon from "@/assets/icons/app-browser.svg?react";
import SingleTab from "./Tab";
import Welcome from "./Websites/Welcome";
import NewTabButton from "./NewTabButton";
import NavigationBar from "./NavigationBar";
import { websites } from "./Websites";
import { useBeaconListener } from "@/helpers/beacon";
import LoadingState from "./Websites/LoadingState";

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

	const handleEvent = (e) => {
		setLoading(true);
		const tab = tabs.find((tab) => tab.id === currentTab);
		tab?.history.push({
			website: e.detail.website,
			url: e.detail.url,
		});

		// add tab in tabs
		setTabs((prev: Tab[]) => {
			const index = prev.findIndex((tab) => tab.id === currentTab);
			const newTabs = [...prev];
			newTabs[index] = tab;
			return newTabs;
		});
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	useBeaconListener("openWebsite", (e) => handleEvent(e));

	return (
		<Window appName={Browser.title}>
			<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-white/90 backdrop-blur dark:bg-black/70 dark:backdrop-blur">
				<header className="bg-[#e8e8e8] dark:bg-[#141414]">
					<nav className="flex px-4 pt-2 space-x-2 overflow-hidden">
						{tabs.map((tab) => (
							<SingleTab
								key={`browser-tab-${tab.id}`}
								tab={tab}
								tabs={tabs}
								setTabs={setTabs}
								currentTab={currentTab}
								setCurrentTab={setCurrentTab}
							/>
						))}
						<NewTabButton
							setTabs={setTabs}
							setCurrentTab={setCurrentTab}
						/>
					</nav>
					<NavigationBar />
				</header>
				<main className="relative flex-1 bg-[#F7F7F7]">
					{loading ? <LoadingState /> : <Welcome />}
				</main>
			</section>
		</Window>
	);
};

export default Browser;

Browser.title = "Navigateur";
Browser.icon = <BrowserIcon />;
