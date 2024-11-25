import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const ActivitesNamur = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-green-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">5 Activités Incontournables à Namur</h1>
					<p className="mt-2 text-lg text-green-200">Découvrez la richesse culturelle et artistique de Namur</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/18042326/pexels-photo-18042326/free-photo-of-ville-riviere-fleuve-urbain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Activités à Namur"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Découvrez les meilleures activités à faire à Namur, où culture, art et divertissement se rencontrent. Ne manquez pas ces expériences uniques qui vous attendent !
					</p>
					<button
						type="button"
						className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-500"
					>
						Explorer les activités
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-green-600">Top 5 Activités à Ne Pas Manquer</h2>
					<p className="mt-4 text-gray-700">
						Voici notre sélection des activités incontournables à Namur :
					</p>
					<ul className="mt-8 space-y-4">
						<li className="bg-white p-4 rounded-lg shadow">
							<button 
								type="button" 
								className="font-bold text-green-600 hover:underline"
							>
								Musée Félicien Rops
							</button>
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<button 
								type="button" 
								className="font-bold text-green-600 hover:underline"
							>
								Parcours Street Art dans Namur
							</button>
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<button 
								type="button" 
								className="font-bold text-green-600 hover:underline"
							>
								Musée des Arts Anciens du Namurois
							</button>
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<button 
								type="button" 
								className="font-bold text-green-600 hover:underline"
							>
								Téléphérique de la Citadelle
							</button>
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<button 
								type="button" 
								className="font-bold text-green-600 hover:underline"
							>
								Visites Guidées Insolites à Tuk-Tuk
							</button>
						</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-green-600">Pourquoi Choisir Namur ?</h2>
				<p className="mt-4 text-gray-700">
					Namur est une ville dynamique, riche en histoire et en culture. Que vous soyez amateur d'art, passionné d'histoire ou simplement à la recherche de nouvelles expériences, Namur a quelque chose à offrir pour tout le monde.
				</p>
			</section>

			<section className="py-16 bg-green-50 text-center">
				<h2 className="text-3xl font-semibold text-green-600">Avis des Visiteurs</h2>
				<p className="mt-4 text-gray-700">Voici ce que nos visiteurs disent :</p>
				<div className="mt-6 max-w-3xl mx-auto space-y-4">
					<blockquote className="bg-white p-4 rounded-lg shadow">
						<p className="text-gray-600">“Chaque activité était unique et mémorable, je recommande vivement Namur !”</p>
						<footer className="mt-2 text-gray-500">- Laura B.</footer>
					</blockquote>
					<blockquote className="bg-white p-4 rounded-lg shadow">
						<p className="text-gray-600">“J'ai adoré le parcours street art, c'était fascinant de découvrir l'art sous toutes ses formes.”</p>
						<footer className="mt-2 text-gray-500">- Julien P.</footer>
					</blockquote>
				</div>
			</section>

			<footer className="bg-green-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} 5 Activités à Namur. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default ActivitesNamur;

// used in RenderAllWebsites to select the right website
ActivitesNamur.componentName = "activitesNamur";
// used in tab as site title
ActivitesNamur.title = "5 Activités Incontournables à Namur";
// used in searchEngine
ActivitesNamur.excerpt = "Découvrez les meilleures activités à Namur, à ne manquer sous aucun prétexte.";

// Site favicon icon
ActivitesNamur.favicon = <IconSearchEngine />;

ActivitesNamur.pages = [
	{
		title: "5 Activités à Namur",
		url: "https://5-trucsafaire-namur.be/fr",
	},
];
