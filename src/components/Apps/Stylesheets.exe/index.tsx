import IconStylesheets from "@/assets/icons/app-stylesheets.svg?react";
import Window from "@/components/Os/Window";
import ContextualBar from "@/components/Os/Window/ContextualBar";
import { t } from "i18next";

const Stylesheets = () => {
	return (
		<Window
			appName={Stylesheets.title}
			contextMenus={
				<>
					<ContextualBar.Menu name="Fichiers">
						<ContextualBar.Item onClick={() => console.log("clicked !")}>
							{t("Joindre un fichier")}
						</ContextualBar.Item>
					</ContextualBar.Menu>
				</>
			}
		>
			<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-white backdrop-blur dark:bg-black/70">
				<div className="grid grid-cols-[repeat(27,96px)]">
					<button className="w-24 h-8 text-sm text-center border-b border-l bg-gray-50 bg-opacity-30 dark:bg-gray-800 border-b-gray-50 border-l-gray-50 first:border-l-0"></button>

					{
						// add 32 buttons
						Array.from({ length: 26 }).map((_, index) => (
							<button
								key={`buttons-stylesheets-${index}`}
								className="w-24 h-8 text-sm text-center border-b border-l bg-gray-50 bg-opacity-30 dark:bg-gray-800 border-b-gray-50 border-l-gray-50 first:border-l-0"
							>
								{String.fromCharCode(65 + index)}
							</button>
						))
					}
				</div>
			</section>
		</Window>
	);
};

export default Stylesheets;

Stylesheets.title = "Tableur";
Stylesheets.icon = <IconStylesheets />;
