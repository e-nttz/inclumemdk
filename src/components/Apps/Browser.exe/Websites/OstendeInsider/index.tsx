import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const OstendeInsider = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-gradient-to-r from-blue-600 to-blue-400 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">OstendeInsider</h1>
					<p className="mt-2 text-lg text-gray-200">
						Votre guide complet pour découvrir Ostende
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<img
					src="https://images.pexels.com/photos/16537608/pexels-photo-16537608/free-photo-of-homme-en-mer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Ostende"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800 px-4">
						OstendeInsider est votre ressource essentielle pour découvrir tous les trésors cachés de la belle ville d'Ostende en Belgique. 
						Que vous soyez un explorateur avide d'aventure, un amateur de culture ou simplement en quête de détente sur la côte, 
						nous vous aidons à créer des souvenirs inoubliables dans cette destination balnéaire emblématique.
					</p>
					<button className="mt-4 inline-block px-8 py-3 text-blue-600 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-200">
						Explorer les expériences
					</button>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-semibold text-blue-600">À Propos d'OstendeInsider</h2>
					<p className="mt-4 text-gray-700">
						Notre mission est de vous fournir des informations précieuses pour vous aider à explorer Ostende comme un local. 
						Nous partageons des recommandations sur les meilleurs restaurants, attractions, et activités en plein air pour tous les goûts.
					</p>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-semibold text-blue-600">Catégories</h2>
					<ul className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
						<li className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200">Découverte</li>
						<li className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200">Explorer</li>
						<li className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200">Expériences</li>
						<li className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200">Culture</li>
						<li className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200">Nature</li>
						<li className="bg-blue-500 text-white rounded-lg px-6 py-3 hover:bg-blue-600 transition duration-200">Cuisine</li>
					</ul>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto">
					<h2 className="text-4xl font-semibold text-center text-blue-600">Nos Meilleures Recommandations</h2>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-white rounded-lg shadow-lg p-6">
							<h3 className="text-xl font-bold">Visite du Port d'Ostende</h3>
							<p className="mt-2 text-gray-600">Découvrez la vie maritime et les délicieuses spécialités de fruits de mer dans les restaurants voisins.</p>
							<button className="mt-4 inline-block text-blue-600 font-semibold">En savoir plus</button>
						</div>
						<div className="bg-white rounded-lg shadow-lg p-6">
							<h3 className="text-xl font-bold">Plage d'Ostende</h3>
							<p className="mt-2 text-gray-600">Profitez d'une journée de détente au soleil, avec de nombreuses activités disponibles pour les familles.</p>
							<button className="mt-4 inline-block text-blue-600 font-semibold">En savoir plus</button>
						</div>
						<div className="bg-white rounded-lg shadow-lg p-6">
							<h3 className="text-xl font-bold">Musée d'Ostende</h3>
							<p className="mt-2 text-gray-600">Explorez l'histoire et la culture de la ville à travers ses expositions fascinantes.</p>
							<button className="mt-4 inline-block text-blue-600 font-semibold">En savoir plus</button>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-blue-600 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-200">
						<button className="underline hover:text-white">Contactez-nous</button>
					</p>
					<p className="text-gray-200">
						&copy; {new Date().getFullYear()} OstendeInsider. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default OstendeInsider;

// used in RenderAllWebsites to select the right website
OstendeInsider.componentName = "ostendeInsider";
// used in tab as site title
OstendeInsider.title = "OstendeInsider";
// used in searchEngine
OstendeInsider.excerpt = "Découvrez les trésors cachés d'Ostende.";

// Mots clés
OstendeInsider.motsCles = [
	"mot_cle_1",
	"mot_cle_2",
	"mot_cle_3"
];

OstendeInsider.favicon = <IconSearchEngine />;

OstendeInsider.pages = [
	{
		title: "OstendeInsider Accueil",
		url: "https://www.ostende-insider.com",
	},
];
