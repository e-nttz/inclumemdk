import IconSearchEngine from "@/assets/icons/app-banque.svg?react";

const BngBanque = () => {
	return (
		<body className="bg-gray-50">
			<h1>BNG BANQUE - LA BANQUE QUI BOUGE EN WAPI !</h1>
		</body>
	);
};

export default BngBanque;

// used in RenderAllWebsites to select the right website
BngBanque.componentName = "bngBanque";
// used in tab as site title
BngBanque.title = "Bng | La banque proche de vous";
// used in searchEngine
BngBanque.excerpt = "Découvrez la banque préférée de Wap[e].";

// Mots clés
BngBanque.motsCles = [
    "banque",
	"bng"
];

// Site favicon icon
BngBanque.favicon = <IconSearchEngine />;

BngBanque.pages = [
	{
		title: "Bng Banque",
		url: "https://www.bngbanque.be/accueil",
	},
];