import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const ExploreOstende = () => {
	return (
		<body className="bg-gradient-to-r from-green-50 to-white">
			<header className="bg-green-600 py-8">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-extrabold text-white">Explore Ostende</h1>
					<p className="mt-2 text-lg text-green-200">Votre guide complet pour une visite inoubliable</p>
				</div>
			</header>

			<section className="py-12">
				<div className="container mx-auto flex flex-col items-center">
					<img
						src="https://images.pexels.com/photos/37403/bora-bora-french-polynesia-sunset-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Explore Ostende"
						className="w-full max-w-xl h-auto rounded-lg shadow-lg"
					/>
					<p className="mt-4 text-lg text-green-800 text-center px-4">
						ExploreOstende est votre guide complet pour découvrir la magnifique ville balnéaire d'Ostende. 
						Plongez dans son histoire fascinante, sa culture vibrante et ses merveilles naturelles. 
						Que vous soyez passionné d'art, amateur de gastronomie ou à la recherche d'activités de plein air, 
						Ostende a quelque chose à offrir à chacun.
					</p>
					<button
						className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200"
					>
						Planifiez votre aventure
					</button>
				</div>
			</section>

			<section className="py-12 bg-white rounded-lg shadow-md">
				<div className="container mx-auto">
					<h2 className="text-4xl font-semibold text-green-600 text-center">À Découvrir</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-4">
						<div className="bg-green-100 p-4 rounded-lg shadow">
							<h3 className="text-2xl font-semibold">Attractions</h3>
							<p className="mt-2 text-green-800">Visitez les sites emblématiques comme la Maison James Ensor, le Fort Napoléon et les plages ensoleillées.</p>
						</div>
						<div className="bg-green-100 p-4 rounded-lg shadow">
							<h3 className="text-2xl font-semibold">Activités</h3>
							<p className="mt-2 text-green-800">Profitez d'activités variées, telles que la randonnée, les sports nautiques et des festivals culturels.</p>
						</div>
						<div className="bg-green-100 p-4 rounded-lg shadow">
							<h3 className="text-2xl font-semibold">Gastronomie</h3>
							<p className="mt-2 text-green-800">Dégustez des spécialités locales dans les restaurants et cafés d'Ostende.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-semibold text-green-600">Hébergement</h2>
					<p className="mt-4 text-green-800 px-4">
						Ostende offre une variété d'options d'hébergement, des hôtels de luxe aux auberges conviviales. 
						Quel que soit votre budget, vous trouverez l'endroit parfait pour séjourner et profiter de la ville.
					</p>
					<button
						className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200"
					>
						Découvrez nos recommandations
					</button>
				</div>
			</section>

			<footer className="bg-green-600 py-6">
				<div className="container mx-auto text-center">
					<p className="text-green-200">
						<button className="underline hover:text-white">
							Contactez-nous
						</button>
					</p>
					<p className="text-green-200">
						&copy; {new Date().getFullYear()} Explore Ostende. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default ExploreOstende;

// used in RenderAllWebsites to select the right website
ExploreOstende.componentName = "exploreOstende";
// used in tab as site title
ExploreOstende.title = "Explore Ostende";
// used in searchEngine
ExploreOstende.excerpt = "ExploreOstende est votre guide complet pour une visite inoubliable de la magnifique ville balnéaire d'Ostende en Belgique.";

// Mots clés
ExploreOstende.motsCles = [
    "explore",
    "explorer",
    "explor",
    "ostende",
    "ostend", // Variante anglaise
    "oostende", // Variante néerlandaise
    "guide",
    "guides",
    "gide", // Variante de mauvaise orthographe
    "visite",
    "visites",
    "visiter",
    "vsite", // Variante de mauvaise orthographe
    "inoubliable",
    "inoubliabl", // Variante de mauvaise orthographe
    "balnéaire",
    "balneaire", // Variante sans accent
    "ville",
    "cité",
    "magnifique",
    "splendide", // Synonyme
    "belle",
    "plage",
    "plages",
    "mer",
    "littoral",
    "côte",
    "cote", // Variante sans accent
    "belgique",
    "belgie", // Variante néerlandaise
    "belgium", // Variante anglaise
    "tourisme",
    "tourist",
    "touristique",
    "découverte",
    "decouverte", // Variante sans accent
    "loisir",
    "loisirs",
    "vacances",
    "séjour",
    "sejour", // Variante sans accent
    "excursion",
    "excursions",
    "culture",
    "patrimoine",
    "monuments",
    "activité",
    "activités",
    "activite", // Variante sans accent
    "événement",
    "evenement", // Variante sans accent
    "événements",
    "evenements", // Variante sans accent
    "restaurants",
    "gastronomie",
    "sorties",
    "balade",
    "balades"
];

ExploreOstende.favicon = <IconSearchEngine />;

ExploreOstende.pages = [
	{
		title: "Explore Ostende",
		url: "https://www.explore-ostende.fr.be",
	},
];
