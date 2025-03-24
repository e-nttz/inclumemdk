import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const RestaurantLaSiesta = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-red-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Restaurant La Siesta</h1>
					<p className="mt-2 text-lg text-red-200">Un festin de saveurs espagnoles et latino-américaines</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<IKImage
					path={RestaurantLaSiesta.images[0]}
					alt="Restaurant La Siesta"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Découvrez "La Siesta" à Anvers, un festin de saveurs espagnoles et latino-américaines. 
						Profitez de nos tapas authentiques et plongez dans une atmosphère enchanteresse qui capture l'esprit vibrant de ces cultures riches en saveurs.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-red-600">Notre Menu</h2>
					<p className="mt-4 text-gray-700">Savourez nos plats emblématiques :</p>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-red-600">Paella</h3>
							<p className="text-gray-700">Un plat traditionnel espagnol riche en saveurs, préparé avec des ingrédients frais.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-red-600">Patatas Bravas</h3>
							<p className="text-gray-700">Pommes de terre croustillantes servies avec une sauce piquante.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-red-600">Chili con Carne/Sin Carne</h3>
							<p className="text-gray-700">Un plat réconfortant à base de haricots et de viande ou en version végétarienne.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-red-600">Tacos</h3>
							<p className="text-gray-700">Tacos garnis de vos ingrédients préférés pour une explosion de saveurs.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-red-600">Ceviche</h3>
							<p className="text-gray-700">Poisson mariné dans du jus de citron, une spécialité rafraîchissante de la mer.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-red-600">Informations Pratiques</h2>
				<p className="mt-4 text-gray-700">
					Adresse : <span className="font-bold">Korenmarktstraat 10, 2000 Antwerp</span>
				</p>
				<p className="mt-2 text-gray-700">
					Téléphone : <button className="text-red-600">+32 404 23 19 13 5</button>
				</p>
				<p className="mt-2 text-gray-700">
					Email : <button className="text-red-600 underline">lasiesta.antwerp@outmail.com</button>
				</p>
			</section>

			<footer className="bg-red-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Restaurant La Siesta. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default RestaurantLaSiesta;

// used in RenderAllWebsites to select the right website
RestaurantLaSiesta.componentName = "restaurantLaSiesta";
// used in tab as site title
RestaurantLaSiesta.title = "Restaurant La Siesta à Anvers";
// used in searchEngine
RestaurantLaSiesta.excerpt = "Découvrez les saveurs espagnoles et latino-américaines à Anvers.";

// Mots clés
RestaurantLaSiesta.motsCles = [
	"restaurant",
	"oostende",
	"la",
    "restorant",
    "mexicain",
    "mexican",
    "resto",
    "cuisine",
    "cuisin",
    "gastronomie",
    "gastonomie",
    "saveurs",
    "savors",
    "authentique",
    "authentik",
    "traditionnel",
    "traditionel",
    "tacos",
    "taco",
    "burrito",
    "burito",
    "fajitas",
    "fajita",
    "guacamole",
    "guacamol",
    "nachos",
    "nacho",
    "Ostende",
    "Oostende",
    "côte",
    "cote",
    "mer",
    "plage",
    "dîner",
    "diner",
    "déjeuner",
    "dejener",
    "souper",
    "supper",
    "repas",
    "repa",
	"siesta",
];

// Site favicon icon
RestaurantLaSiesta.favicon = <IconSearchEngine />;

RestaurantLaSiesta.images = [
	"Restaurant La Siesta.webp"
]

RestaurantLaSiesta.pages = [
	{
		title: "Restaurant La Siesta à Anvers",
		url: "https://www.antwerp-la-siesta.be",
	},
];
