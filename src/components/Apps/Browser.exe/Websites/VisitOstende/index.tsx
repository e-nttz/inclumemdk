import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const VisitOstende = () => {
	return (
		<body className="bg-gradient-to-b from-blue-50 to-white">
			<header className="bg-blue-700 py-8">
				<div className="container mx-auto text-center">
					<h1 className="text-6xl font-extrabold text-white">Visit Ostende</h1>
					<p className="mt-2 text-xl text-blue-200">Découvrez la beauté et la culture d'Ostende</p>
				</div>
			</header>

			<section className="py-12">
				<div className="container mx-auto flex flex-col items-center">
					<img
						src="https://images.pexels.com/photos/17012080/pexels-photo-17012080/free-photo-of-mer-restaurant-jetee-ponton.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Visit Ostende"
						className="w-full max-w-xl h-auto rounded-lg shadow-lg"
					/>
					<p className="mt-4 text-lg text-blue-800 text-center px-4">
						Les incontournables à visiter à Ostende incluent la maison de James Ensor, Mercator, 
						le Domaine provincial Atlantikwall Raversyde, le Fort Napoléon et bien plus encore. 
						Profitez d'une journée sur la plage, explorez les galeries d'art ou savourez la gastronomie locale.
					</p>
					<button
						className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
					>
						Planifiez votre visite
					</button>
				</div>
			</section>

			<section className="py-12 bg-white rounded-lg shadow-md">
				<div className="container mx-auto">
					<h2 className="text-4xl font-semibold text-blue-700 text-center">Infos Pratiques</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 p-4">
						<div className="bg-blue-100 p-4 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Adresse</h3>
							<p className="mt-2 text-blue-800">Monacoplein 2, 8400 Ostende</p>
						</div>
						<div className="bg-blue-100 p-4 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Téléphone</h3>
							<p className="mt-2 text-blue-800">+32 34 21 81 73 4</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12">
				<div className="container mx-auto text-center">
					<h2 className="text-4xl font-semibold text-blue-700">À Voir et À Faire</h2>
					<p className="mt-4 text-blue-800 px-4">
						Ostende regorge d'activités et d'attractions. Explorez les plages, 
						visitez les musées ou profitez d'une promenade le long de la digue. 
						Ne manquez pas le célèbre marché aux poissons et les restaurants de fruits de mer !
					</p>
					<button
						className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
					>
						Découvrez les activités
					</button>
				</div>
			</section>

			<footer className="bg-blue-700 py-6">
				<div className="container mx-auto text-center">
					<p className="text-blue-200">
						<button className="underline hover:text-white">
							Contactez-nous
						</button>
					</p>
					<p className="text-blue-200">
						&copy; {new Date().getFullYear()} Visit Ostende. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default VisitOstende;

// used in RenderAllWebsites to select the right website
VisitOstende.componentName = "visitOstende";
// used in tab as site title
VisitOstende.title = "Visit Ostende";
// used in searchEngine
VisitOstende.excerpt = "Les incontournables à visiter à Ostende : la maison de James Ensor, Mercator, le Domaine provincial Atlantikwall Raversyde, le Fort Napoléon, …";

// Mots clés
VisitOstende.motsCles = [
	"mot_cle_1",
	"mot_cle_2",
	"mot_cle_3"
];

VisitOstende.favicon = <IconSearchEngine />;

VisitOstende.pages = [
	{
		title: "Visit Ostende",
		url: "https://www.visit-oostende.be",
	},
];