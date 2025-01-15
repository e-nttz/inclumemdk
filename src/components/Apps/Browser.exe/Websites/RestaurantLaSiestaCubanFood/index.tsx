import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const RestaurantLaSiestaCubanFood = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-orange-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">La Siesta Cuban Food</h1>
					<p className="mt-2 text-lg text-orange-200">Une expérience culinaire cubaine au cœur de Bruxelles</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<IKImage
					path={RestaurantLaSiestaCubanFood.images[0]}
					alt="La Siesta Cuban Food"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Bienvenue chez "La Siesta", votre refuge pour une expérience culinaire cubaine authentique au cœur de Bruxelles. 
						Imprégnez-vous de l'atmosphère chaleureuse et décontractée où le temps semble suspendu, invitant à la détente et à la dégustation. 
						Des saveurs envoûtantes de Cuba vous attendent à chaque bouchée, des plats de porc mariné aux cocktails tropicaux rafraîchissants.
					</p>
					<p className="mt-4 text-lg text-gray-800">
						Notre ambiance conviviale et notre décor inspiré de l'île vous transportent directement dans les rues animées de La Havane. 
						Que vous veniez pour un déjeuner décontracté ou une soirée animée, "La Siesta" promet une escapade culinaire exotique sans quitter Bruxelles.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-orange-600">Notre Menu</h2>
					<p className="mt-4 text-gray-700">Savourez nos plats emblématiques :</p>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-orange-600">Langouste à la Cubaine</h3>
							<p className="text-gray-700">Une langouste juteuse préparée dans un mélange d'épices cubaines, servie avec des accompagnements frais.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-orange-600">Ananas Farci à la Cubaine</h3>
							<p className="text-gray-700">Un ananas juteux rempli de viandes savoureuses, idéal pour une explosion de saveurs exotiques.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-orange-600">Picadillo</h3>
							<p className="text-gray-700">Un plat traditionnel cubain à base de viande hachée, assaisonné avec des olives et des raisins secs.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-orange-600">Moros y Cristianos</h3>
							<p className="text-gray-700">Un mélange savoureux de riz et de haricots noirs, symbole de la cuisine cubaine.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-orange-600">Informations Pratiques</h2>
				<p className="mt-4 text-gray-700">
					Adresse : <span className="font-bold">Avenue du roi 309, 1000 Bruxelles</span>
				</p>
				<p className="mt-2 text-gray-700">
					Ouverture : <span className="font-bold">Du lundi au mercredi de 17h à 23h, et du jeudi au dimanche de 11h30 à 1h</span>
				</p>
				<p className="mt-2 text-gray-700">
					Téléphone : <button className="text-orange-600">+32 123 45 56 78 9</button>
				</p>
				<p className="mt-2 text-gray-700">
					Email : <button className="text-orange-600 underline">lasiestacubanfood@outmail.be</button>
				</p>
			</section>

			<footer className="bg-orange-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} La Siesta Cuban Food. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default RestaurantLaSiestaCubanFood;

// used in RenderAllWebsites to select the right website
RestaurantLaSiestaCubanFood.componentName = "restaurantLaSiestaCubanFood";
// used in tab as site title
RestaurantLaSiestaCubanFood.title = "La Siesta Cuban Food à Bruxelles";
// used in searchEngine
RestaurantLaSiestaCubanFood.excerpt = "Venez découvrir l'authenticité de la cuisine cubaine à Bruxelles.";

// Mots clés
RestaurantLaSiestaCubanFood.motsCles = [
	"cuisine",
	"cuisines",
	"cuizine", // Variante d'orthographe
	"cubaine",
	"cubain",
	"cubaines",
	"cubaïn", // Variante d'orthographe
	"cuba",
	"gastronomie",
	"gastronomique",
	"restaurent", // Variante d'orthographe
	"restaurant",
	"restaurants",
	"restauration",
	"Bruxelles",
	"Bruxelle", // Variante d'orthographe
	"Bruxellois",
	"Bruxelloise",
	"Bruxelloises",
	"plats",
	"plat",
	"repas",
	"repaz", // Variante d'orthographe
	"recettes",
	"recette",
	"authentique",
	"authenticité",
	"authentiques",
	"saveurs",
	"saveur",
	"traditionnel",
	"traditionnelle",
	"traditionnels",
	"tradition",
	"ambiances",
	"ambiance",
	"gouts",
	"goût",
	"goûts",
	"spécialités",
	"spécialité",
	"exotique",
	"exotiques",
	"exotism",
	"exotisme",
	"tropical",
	"tropicals", // Variante au pluriel
	"tropique",
	"tropiques",
	"festif",
	"festifs",
	"fête",
	"fêtes",
	"délices",
	"délice",
	"délicieux",
	"délicieuse",
	"culture",
	"cultures",
	"siesta",
	"la siesta"
];

// Site favicon icon
RestaurantLaSiestaCubanFood.favicon = <IconSearchEngine />;

RestaurantLaSiestaCubanFood.images = [
	"La Siesta Cuban Food.jpeg"
]

RestaurantLaSiestaCubanFood.pages = [
	{
		title: "La Siesta Cuban Food à Bruxelles",
		url: "https://www.cuban-foodsiesta.be",
	},
];
