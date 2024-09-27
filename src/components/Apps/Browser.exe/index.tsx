import Window from "@/components/Os/Window";
import { ReactElement, useState } from "react";

import BrowserIcon from "@/assets/icons/app-browser.svg?react";
import SingleTab from "./Tab";
import Welcome from "./Websites/Welcome";
import NewTabButton from "./NewTabButton";
import NavigationBar from "./NavigationBar";
import { websites } from "./Websites";

interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

export type Tab = {
	id: number;
	history: {
		id: number;
		website: Website;
		url: string;
	}[];
};

const Browser: AppProps = () => {
	const [tabs, setTabs] = useState([
		{
			id: 1,
			history: [
				{
					id: 1,
					website: websites.welcome as Website,
					url: "",
				},
			],
		},
	]);

	const [currentTab, setCurrentTab] = useState(1);

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
					<Welcome />
				</main>
			</section>
		</Window>
	);
};

export default Browser;

Browser.title = "Navigateur";
Browser.icon = <BrowserIcon />;
