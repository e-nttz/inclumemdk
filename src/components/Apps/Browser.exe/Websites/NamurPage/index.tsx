import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const NamurPage = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-white">
			<header className="bg-green-800 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Namur</h1>
					<p className="mt-2 text-lg text-gray-200">
						Découvrez l'histoire et la culture de la capitale wallonne
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<IKImage
					path={NamurPage.images[0]}
					alt="Namur, Belgique"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6 px-4">
					<p className="text-lg text-gray-800 leading-relaxed">
						Namur, capitale de la province éponyme, est un centre économique, politique, et culturel en Belgique. Située au cœur de la Wallonie et bordée par la Meuse, elle attire les visiteurs pour sa citadelle imposante, son architecture médiévale, et ses festivals culturels renommés.
					</p>
					<button
						type="button"
						className="mt-6 px-8 py-3 text-green-800 bg-white rounded-lg shadow hover:bg-gray-200"
					>
						Explorer Namur
					</button>
				</div>
			</section>

			<section className="py-16 bg-green-100">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-green-800 text-center">Faits intéressants sur Namur</h2>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-green-800">Histoire Riche</h3>
							<p className="mt-2 text-gray-600">
								Namur a des racines romaines et est un point de convergence majeur depuis des siècles, renforcé par son emplacement stratégique.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-green-800">Citadelle de Namur</h3>
							<p className="mt-2 text-gray-600">
								La citadelle historique offre des vues impressionnantes et est un symbole emblématique de la ville, témoignant de son importance militaire.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-green-800">Événements Culturels</h3>
							<p className="mt-2 text-gray-600">
								Namur accueille divers festivals et événements artistiques qui attirent des visiteurs du monde entier.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center">
				<h2 className="text-3xl font-bold text-green-800">Points d'Intérêt à Namur</h2>
				<p className="mt-4 text-lg text-gray-800">
					Explorez les lieux et monuments incontournables de la ville :
				</p>
				<ul className="mt-6 flex justify-center flex-wrap gap-6">
					<li className="bg-green-200 px-4 py-2 rounded-md">Citadelle</li>
					<li className="bg-green-200 px-4 py-2 rounded-md">Université de Namur</li>
					<li className="bg-green-200 px-4 py-2 rounded-md">La Meuse</li>
					<li className="bg-green-200 px-4 py-2 rounded-md">Bâtiments médiévaux</li>
					<li className="bg-green-200 px-4 py-2 rounded-md">Festivals culturels</li>
				</ul>
			</section>

			<section className="py-16 bg-green-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-green-800">Avis des Visiteurs</h2>
					<p className="mt-4 text-gray-700">Ce que nos visiteurs pensent de Namur :</p>
					<div className="mt-6 space-y-6">
						<blockquote className="bg-white p-4 rounded-lg shadow-md">
							<p className="text-gray-600">“Un mélange parfait d'histoire et de modernité.”</p>
							<footer className="mt-2 text-gray-500">- Julien R.</footer>
						</blockquote>
						<blockquote className="bg-white p-4 rounded-lg shadow-md">
							<p className="text-gray-600">“La citadelle est un must à voir, vue splendide sur la ville.”</p>
							<footer className="mt-2 text-gray-500">- Sophie M.</footer>
						</blockquote>
					</div>
				</div>
			</section>

			<footer className="bg-green-800 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-200">
						Contactez-nous pour plus d'informations : 
						<button className="underline hover:text-white ml-2">info@ouikipedia-namur.fr.com</button>
					</p>
					<p className="text-gray-200">
						&copy; {new Date().getFullYear()} Ouikipedia Namur. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default NamurPage;

// used in RenderAllWebsites to select the right website
NamurPage.componentName = "namurPage";
// used in tab as site title
NamurPage.title = "Namur | Découvrez la Capitale Wallonne";
// used in searchEngine
NamurPage.excerpt = "Namur, capitale historique et culturelle de la Wallonie.";

// Mots clés
NamurPage.motsCles = [
    "Namur",
    "capitale",
    "ville",
    "histoire",
    "historique",
    "culture",
    "culturelle",
    "wallonie",
    "tourisme",
    "touriste",
    "monument",
    "monuments",
    "patrimoine",
    "visite",
    "visiter",
    "escapade",
    "vacances",
    "art",
    "arts",
    "architecture",
    "moyenage",
    "moyenageux",
    "medieval",
    "ruelle",
    "ruelles",
    "musée",
    "musee", // Variante sans accent
    "exposition",
    "expositions",
    "place",
    "places",
    "quartier",
    "quartiers",
    "rue",
    "rues",
    "tour",
    "tours",
    "site",
    "beffroi",
    "château",
    "chateaux", // Variante sans accent
    "nature",
    "riviere",
    "rivières", // Variante avec accent
    "flore",
    "faune",
    "paysage",
    "paysages"
];

NamurPage.favicon = <IconSearchEngine />;

NamurPage.images = [
	"Namur Page.jpeg"
]

NamurPage.pages = [
	{
		title: "Namur",
		url: "https://ouikipedia-namur.com/fr",
	},
];
