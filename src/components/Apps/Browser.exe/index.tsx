import Window from "@/components/Os/Window";
import ContextualBar from "@/components/Os/Window/ContextualBar";
import { ReactElement } from "react";

import BrowserIcon from "@/assets/icons/app-browser.svg?react";

interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

const Browser: AppProps = () => {
	return (
		<Window
			appName={Browser.title}
			contextMenus={
				<>
					<ContextualBar.Menu name="Hello">
						<ContextualBar.Item
							onClick={() =>
								console.log("C'est toi qui est beau Thomas")
							}
						>
							World
						</ContextualBar.Item>
					</ContextualBar.Menu>
				</>
			}
		>
			<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-white/90 backdrop-blur dark:bg-black/70">
				<div>
					<p>Ici</p>
				</div>
			</section>
		</Window>
	);
};

export default Browser;

Browser.title = "Navigateur";
Browser.icon = <BrowserIcon />;
