import Window from "@/components/Os/Window";
import { ReactElement, useState } from "react";

import BrowserIcon from "@/assets/icons/app-browser.svg?react";
import SingleTab from "./Tab";
import Welcome from "./Websites/Welcome";
import NewTabButton from "./NewTabButton";

export type Tab = {
	id: number;
	title: string;
};

interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

const Browser: AppProps = () => {
	const [tabs, setTabs] = useState([
		{
			id: 1,
			title: "Nouvel onglet",
		},
	]);

	const [currentTab, setCurrentTab] = useState(1);

	return (
		<Window appName={Browser.title}>
			<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-white/90 backdrop-blur dark:bg-black/70">
				<header className="bg-[#e8e8e8] pt-2 px-4 space-x-2 flex overflow-hidden">
					{tabs.map((tab) => (
						<SingleTab
							key={`browser-tab-${tab.id}`}
							id={tab.id}
							tabs={tabs}
							setTabs={setTabs}
							currentTab={currentTab}
							setCurrentTab={setCurrentTab}
						>
							{tab.title}
						</SingleTab>
					))}
					<NewTabButton setTabs={setTabs} setCurrentTab={setCurrentTab} />
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
