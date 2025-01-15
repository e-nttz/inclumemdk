import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const RestaurantVueSurMer = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-teal-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Restaurant Vue sur Mer</h1>
					<p className="mt-2 text-lg text-teal-200">Gastronomie méditerranéenne à Ostende</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<IKImage
					path={RestaurantVueSurMer.images[0]}
					alt="Restaurant Vue sur Mer"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Notre menu met en valeur les saveurs ensoleillées de la Méditerranée, avec des plats délicieusement préparés à partir d'ingrédients frais et locaux. 
						Venez déguster nos spécialités de poissons grillés, nos salades fraîches et nos desserts succulents, tout en vous imprégnant de l'atmosphère apaisante de la mer.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-teal-600">Notre Menu</h2>
					<p className="mt-4 text-gray-700">Découvrez quelques-unes de nos spécialités :</p>
					<ul className="mt-8 space-y-4">
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-teal-600">Couscous Royal</span> - Un mélange délicieux de viandes et légumes avec une touche méditerranéenne.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-teal-600">Caponata</span> - Un plat traditionnel sicilien à base d'aubergines, tomates et olives.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-teal-600">Moussaka</span> - Un gratin de légumes et viandes avec des épices méditerranéennes.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-teal-600">Paella</span> - Un plat emblématique d'Espagne à base de riz et de fruits de mer.
						</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-teal-600">Informations Pratiques</h2>
				<p className="mt-4 text-gray-700">
					Adresse : <span className="font-bold">Zeezicht Kaai 21, 8400 Oostende</span>
				</p>
				<p className="mt-2 text-gray-700">
					Email : <button className="text-teal-600 underline">vuesurmer-oostende@outmail.be</button>
				</p>
				<p className="mt-2 text-gray-700">
					Téléphone : <button className="text-teal-600">+32 453 76 99 60 6</button>
				</p>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-teal-600">Témoignages</h2>
					<p className="mt-4 text-gray-700">Ce que nos clients disent de nous :</p>
					<div className="mt-8 space-y-4">
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Jean D.</span>: "Une expérience culinaire inoubliable ! Les plats étaient exquis et le service impeccable."
						</p>
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Marie L.</span>: "Le cadre est magnifique, surtout avec la vue sur la mer. Je recommande vivement la paella !"
						</p>
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Lucie T.</span>: "Les saveurs méditerranéennes sont parfaitement mises en valeur. Une adresse à ne pas manquer à Oostende !"
						</p>
					</div>
				</div>
			</section>

			<footer className="bg-teal-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Restaurant Vue sur Mer. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default RestaurantVueSurMer;

// used in RenderAllWebsites to select the right website
RestaurantVueSurMer.componentName = "restaurantVueSurMer";
// used in tab as site title
RestaurantVueSurMer.title = "Restaurant Vue sur Mer à Ostende";
// used in searchEngine
RestaurantVueSurMer.excerpt = "Profitez d'une expérience culinaire en bord de mer dans notre restaurant à Ostende.";

// Mots clés
RestaurantVueSurMer.motsCles = [
	"restaurant",
	"restaurent", // Variante d'orthographe
	"restaurants",
	"cuisine",
	"cuisines",
	"cuizine", // Variante d'orthographe
	"gastronomie",
	"gastronomique",
	"mer",
	"océan",
	"maritime",
	"bord",
	"plage",
	"plajes", // Variante d'orthographe
	"littoral",
	"côtier",
	"côtiers",
	"côtière",
	"vue",
	"panorama",
	"panoramas",
	"Ostende",
	"Ostend", // Variante d'orthographe
	"bordure",
	"saveur",
	"saveurs",
	"savoeur", // Variante d'orthographe
	"authentique",
	"authenticité",
	"authentiques",
	"expérience",
	"expériences",
	"ambiance",
	"ambiances",
	"repas",
	"repaz", // Variante d'orthographe
	"plats",
	"plat",
	"poisson",
	"poissons",
	"fruits",
	"fruit",
	"fruitdemer", // Variante d'écriture
	"crustacés",
	"coquillages",
	"tradition",
	"traditionnel",
	"traditionnelle",
	"traditionnels",
	"délice",
	"délices",
	"délicieux",
	"délicieuse",
	"exotique",
	"exotiques",
	"marin",
	"marine",
	"marins",
	"spécialités",
	"spécialité",
	"fête",
	"fêtes",
	"festif",
	"festifs"
];

// Site favicon icon
RestaurantVueSurMer.favicon = <IconSearchEngine />;

RestaurantVueSurMer.images = [
	"Restaurant Vue Sur Mer.jpeg"
]

RestaurantVueSurMer.pages = [
	{
		title: "Restaurant Vue sur Mer",
		url: "https://www.restaurant-mer.be",
	},
];
