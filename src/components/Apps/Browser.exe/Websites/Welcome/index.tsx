import IconEmptyTab from "@/assets/icons/empty-tab.svg?react";
import SearchEngine from "../SearchEngine";
import ButtonWebsite from "./ButtonWebsite";

const Welcome: Website = () => {
	return (
		<div className="absolute inset-0 px-8 py-8">
			<div className="relative z-10">
				<h1 className="mb-8 text-3xl text-white">Vos sites favoris</h1>
				<ul className="grid grid-cols-12 gap-x-4 gap-y-8">
					<ButtonWebsite website={SearchEngine} />
				</ul>
			</div>
			<figure className="absolute inset-0 before:absolute before:inset-0 before:bg-black before:bg-opacity-60">
				<img
					src="/images/welcome-tab-bg.webp"
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

Welcome.favicon = <IconEmptyTab />;

Welcome.pages = [
	{
		title: "Homepage",
		url: "",
	},
];
