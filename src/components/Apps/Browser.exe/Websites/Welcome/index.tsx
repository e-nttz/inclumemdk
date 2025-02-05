import IconBrowser from "@/assets/icons/app-browser.svg?react";
import SearchEngine from "../SearchEngine";
import BngBanque from "../BngBanque";
import ButtonWebsite from "./ButtonWebsite";
import { beacon } from "@/helpers/beacon";
const Welcome: Website = () => {
	return (
		<div className="absolute inset-0 px-8 py-8">
			<div className="relative z-10 flex items-center w-full h-full max-w-6xl mx-auto">
				<div className="w-full">
					<h1 className="mb-12 text-2xl font-bold text-black">Favoris</h1>
					<ul className="grid grid-cols-4 gap-x-5 gap-y-6">
						<ButtonWebsite website={SearchEngine} />
						<ButtonWebsite website={BngBanque} />
					</ul>
				</div>
			</div>
			<figure className="absolute inset-0">
				<img
					src="/images/welcome-tab-bg.jpeg"
					alt=""
					className="object-cover w-full h-full"
				/>
			</figure>
		</div>
	);
};

export default Welcome;

// used in RenderAllWebsites to select the right website
Welcome.componentName = "welcome";
// used in tab as site title
Welcome.title = "Nouvel onglet";

Welcome.favicon = <IconBrowser />;

Welcome.pages = [
	{
		title: "Homepage",
		url: "",
	},
];
