import Window from "@/components/Os/Window";
import { ReactElement, useState } from "react";

import BrowserIcon from "@/assets/icons/app-browser.svg?react";
import Tab from "./Tab";

interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

const Browser: AppProps = () => {
	// @ts-expect-error - This state isn't yet used
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [tabs, setTabs] = useState([
		{
			id: 1,
			title: "Tab 1",
		},
		{
			id: 2,
			title: "L'onglet qui tue sa mère putain wallah",
		},
		{
			id: 3,
			title: "Tab 3",
		},
	]);

	const [currentTab, setCurrentTab] = useState(1);

	return (
		<Window appName={Browser.title}>
			<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-white/90 backdrop-blur dark:bg-black/70">
				<header className="bg-[#e8e8e8] pt-2 px-4 space-x-2 flex overflow-hidden">
					{tabs.map((tab) => (
						<Tab
							key={`browser-tab-${tab.id}`}
							id={tab.id}
							currentTab={currentTab}
							setCurrentTab={setCurrentTab}
						>
							{tab.title}
						</Tab>
					))}
				</header>
				<main className="flex-1 bg-[#F7F7F7]">
					<p>Ici</p>
				</main>
			</section>
		</Window>
	);
};

export default Browser;

Browser.title = "Navigateur";
Browser.icon = <BrowserIcon />;
