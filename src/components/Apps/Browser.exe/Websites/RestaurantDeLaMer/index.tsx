import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const RestaurantDeLaMer = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-blue-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Restaurant de la Mer</h1>
					<p className="mt-2 text-lg text-blue-200">Cuisine Fruits de Mer Frais à Ostende</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/3640451/pexels-photo-3640451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Restaurant de la Mer"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Notre menu varié propose une sélection exquise de poissons, crustacés et fruits de mer, préparés avec créativité et passion par notre équipe de chefs talentueux. 
						Que vous soyez un amateur de fruits de mer ou simplement à la recherche d'une expérience culinaire exceptionnelle, 
						notre restaurant est l'endroit idéal pour satisfaire vos papilles.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-600">Notre Menu</h2>
					<p className="mt-4 text-gray-700">Savourez nos spécialités de la mer :</p>
					<ul className="mt-8 space-y-4">
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-blue-600">Poissons</span> - Des poissons frais, préparés avec soin pour préserver leur saveur naturelle.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-blue-600">Fruits de mer</span> - Une variété de fruits de mer, allant des moules aux huîtres, toutes de première qualité.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-blue-600">Crustacés</span> - Dégustez nos succulents crustacés, cuisinés selon des recettes traditionnelles et modernes.
						</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-blue-600">Informations Pratiques</h2>
				<p className="mt-4 text-gray-700">
					Adresse : <span className="font-bold">Zeestraat 123, 8400 Oostende</span>
				</p>
				<p className="mt-2 text-gray-700">
					Ouverture : <span className="font-bold">Du mercredi au dimanche 11h-15h et 18h-22h</span>
				</p>
				<p className="mt-2 text-gray-700">
					Email : <button className="text-blue-600 underline">restaurant.delamer@outmail.com</button>
				</p>
				<p className="mt-2 text-gray-700">
					Téléphone : <button className="text-blue-600">+32 69 13 43 67 5</button>
				</p>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-600">Témoignages de Clients</h2>
					<p className="mt-4 text-gray-700">Voici ce que nos clients disent de nous :</p>
					<div className="mt-8 space-y-4">
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Sophie L.</span>: "Un des meilleurs restaurants de fruits de mer que j'ai jamais visités. 
							Leurs plats sont incroyablement frais et délicieux !"
						</p>
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Marc P.</span>: "L'atmosphère est très agréable et le service est impeccable. 
							Je recommande vivement les crustacés !"
						</p>
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Élodie R.</span>: "Une vue magnifique sur l'océan, combinée à une cuisine exceptionnelle. 
							Un endroit parfait pour un dîner romantique."
						</p>
					</div>
				</div>
			</section>

			<footer className="bg-blue-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Restaurant de la Mer. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default RestaurantDeLaMer;

// used in RenderAllWebsites to select the right website
RestaurantDeLaMer.componentName = "restaurantDeLaMer";
// used in tab as site title
RestaurantDeLaMer.title = "Restaurant de la Mer à Ostende";
// used in searchEngine
RestaurantDeLaMer.excerpt = "Découvrez notre restaurant de fruits de mer à Ostende.";

// Mots clés
RestaurantDeLaMer.motsCles = [
	"mot_cle_1",
	"mot_cle_2",
	"mot_cle_3"
];

// Site favicon icon
RestaurantDeLaMer.favicon = <IconSearchEngine />;

RestaurantDeLaMer.pages = [
	{
		title: "Restaurant de la Mer",
		url: "https://www.restaurant-delamer.be",
	},
];