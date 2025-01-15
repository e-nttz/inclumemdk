import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const WereldsmakenOostende = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-green-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Café-Restaurant « Wereldsmaken »</h1>
					<p className="mt-2 text-lg text-green-200">Een culinaire wereldreis in Oostende</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<IKImage
					path={WereldsmakenOostende.images[0]}
					alt="Wereldsmaken Restaurant"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Ons gevarieerde menu biedt een selectie van gerechten geïnspireerd door verschillende keukens van over de hele wereld, 
						van Azië tot Zuid-Amerika en Afrika. Elke hap is een culinair avontuur dat je uitnodigt om nieuwe smaken te verkennen 
						en unieke culinaire tradities te ontdekken.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-green-600">Ons Menu</h2>
					<p className="mt-4 text-gray-700">Hier zijn enkele van onze populaire gerechten :</p>
					<ul className="mt-8 space-y-4">
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-green-600">Pad Thaï</span> - Een klassiek Thais gerecht met roergebakken noedels, 
							garnalen en pinda's.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-green-600">Tacos al Pastor</span> - Heerlijke Mexicaanse taco's met gemarineerd varkensvlees 
							en verse salsa.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-green-600">Moussaka</span> - Een traditionele Griekse ovenschotel met aubergine en gehakt.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-green-600">Paneer Tikka Masala</span> - Gekruid paneer in een rijke tomatensaus, perfect geserveerd 
							met rijst.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-green-600">Bobotie</span> - Een Zuid-Afrikaanse ovenschotel met gekruid gehakt en een romige topping.
						</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-green-600">Praktische Informatie</h2>
				<p className="mt-4 text-gray-700">
					Adres: <span className="font-bold">wereldstraat 10, 8400 Oostende</span>
				</p>
				<p className="mt-2 text-gray-700">
					Openingsuren: <span className="font-bold">Dinsdag tot zaterdag 11h30-14h30 en 18h-23h</span>
				</p>
				<p className="mt-2 text-gray-700">
					Email: <button className="text-green-600 underline">wereldsmaken.oostende@outmail.com</button>
				</p>
				<p className="mt-2 text-gray-700">
					Telefoon: <button className="text-green-600">+32 343 12 34 09 6</button>
				</p>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-green-600">Klantengetuigenissen</h2>
					<p className="mt-4 text-gray-700">Wat onze klanten zeggen :</p>
					<div className="mt-8 space-y-4">
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Lena D.</span>: "Een fantastische ervaring! De smaken waren uniek en de bediening was uitstekend."
						</p>
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Ruben V.</span>: "De Pad Thaï is de beste die ik ooit heb geproefd! Absoluut een aanrader."
						</p>
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Marieke K.</span>: "Ik hou van de diversiteit van het menu. Het is altijd een plezier om hier te komen eten."
						</p>
					</div>
				</div>
			</section>

			<footer className="bg-green-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Café-Restaurant « Wereldsmaken ». Alle rechten voorbehouden.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default WereldsmakenOostende;

// used in RenderAllWebsites to select the right website
WereldsmakenOostende.componentName = "wereldsmakenOostende";
// used in tab as site title
WereldsmakenOostende.title = "Café-Restaurant « Wereldsmaken »";
// used in searchEngine
WereldsmakenOostende.excerpt = "Duik in een culinaire wereldreis bij ons café-restaurant.";

// Mots clés
WereldsmakenOostende.motsCles = [
	"café",
	"cafe", // Variante d'orthographe
	"restaurant",
	"restaurants",
	"cuisine",
	"cuisines",
	"culinaire",
	"culinaires",
	"gastronomie",
	"gastronomique",
	"voyage",
	"voyages",
	"monde",
	"saveur",
	"saveurs",
	"gout", // Variante d'orthographe
	"goût",
	"international",
	"internationaux",
	"exotique",
	"exotiques",
	"menu",
	"cartes",
	"plats",
	"plat",
	"spécialité",
	"specialite", // Variante d'orthographe
	"spécialités",
	"specialites", // Variante d'orthographe
	"culture",
	"cultures",
	"découverte",
	"decouverte", // Variante d'orthographe
	"aventure",
	"aventures",
	"recette",
	"recettes",
	"épices",
	"epices", // Variante d'orthographe
	"arômes",
	"aromes", // Variante d'orthographe
	"cocktail",
	"cocktails",
	"boisson",
	"boissons",
	"ambiance",
	"expérience",
	"experience", // Variante d'orthographe
	"dégustation",
	"degustation", // Variante d'orthographe
	"repas",
	"table",
	"tables",
	"convivialité",
	"convivialite", // Variante d'orthographe
	"accueil",
	"service",
	"serveur",
	"serveuse",
	"chef",
	"chefs",
	"terrasse",
	"reservation",
	"réservation", // Variante orthographique
	"Oostende",
	"Ostende", // Variante linguistique
	"mer"
];

// Site favicon icon
WereldsmakenOostende.favicon = <IconSearchEngine />;

WereldsmakenOostende.images = [
	"Wereld smaken Oostende.webp"
]

WereldsmakenOostende.pages = [
	{
		title: "Café-Restaurant « Wereldsmaken »",
		url: "https://www.wereldsmakenoostende.be",
	},
];
