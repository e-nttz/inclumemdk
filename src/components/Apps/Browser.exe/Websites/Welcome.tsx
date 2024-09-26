import IconEmptyTab from "@/assets/icons/empty-tab.svg?react";

const Welcome: Website = () => {
	return (
		<div className="absolute inset-0 px-8 py-8">
			<div className="relative z-10">
				<h1 className="text-3xl text-white">Vos sites favoris</h1>
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

Welcome.title = "Nouvel onglet";
Welcome.favicon = <IconEmptyTab />;

Welcome.pages = [
	{
		title: "Nouvel onglet",
		url: "",
	},
];
