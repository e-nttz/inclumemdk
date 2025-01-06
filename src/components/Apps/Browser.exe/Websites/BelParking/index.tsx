import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const Belparking = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-green-700 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">Belparking</h1>
					<p className="mt-2 text-lg text-gray-200">
						Tous les parkings de Belgique
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<img
					src="https://images.pexels.com/photos/21014/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Carte des parkings"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800">
						Fini les problèmes de stationnement : voici la carte de l’intégralité des parkings de Belgique.
					</p>
					<button className="mt-4 inline-block px-8 py-3 text-green-700 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-200">
						Téléchargez l’application
					</button>
				</div>
			</section>

			<section className="bg-gray-100 py-16">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-green-700">À propos de Belparking</h2>
					<p className="mt-4 text-gray-700">
						Belparking est votre solution idéale pour trouver un parking facilement dans toute la Belgique. Consultez notre carte interactive et choisissez la place qui vous convient le mieux.
					</p>
				</div>
			</section>

			<footer className="bg-green-700 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-200">
						<button className="underline hover:text-white">Contactez-nous</button>
					</p>
					<p className="text-gray-200">
						&copy; {new Date().getFullYear()} Belparking. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default Belparking;

// used in RenderAllWebsites to select the right website
Belparking.componentName = "belparking";
// used in tab as site title
Belparking.title = "Tous les parkings de Belgique | Belparking";
// used in searchEngine
Belparking.excerpt = "Découvrez la carte des parkings de Belgique avec Belparking.";

// Mots clés
Belparking.motsCles = [
	"parking",
	"parkings",
	"voiture",
	"voitures",
	"stationnement",
	"stationner",
	"parc",
	"parcs",
	"carte",
	"cartes",
	"belgique",
	"bruxelles",
	"liege",
	"anvers",
	"gent",
	"charleroi",
	"public",
	"prix",
	"tarif",
	"gratuit",
	"payant",
	"espace",
	"zone",
	"zones",
	"centre",
	"ville",
	"couvert",
	"plein",
	"air",
	"proche",
	"près",
	"mobilité",
	"accessibilité",
	"bicyclette",
	"vélo",
	"place",
	"emplacement",
	"places",
	"emplacements",
	"recherche",
	"trouver",
	"plan",
	"plans",
	"bleu",
	"rouge",
	"privé",
	"public",
	"station",
	"stationnement",
	"trouver",
	"plan",
	"privé",
	"anvers",
	"liège",
	"charleroi"
];

Belparking.favicon = <IconSearchEngine />;

Belparking.pages = [
	{
		title: "Belparking Accueil",
		url: "https://belparking-app.be",
	},
];
