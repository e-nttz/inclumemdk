import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const TeenTrends = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 py-8">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-extrabold text-white uppercase">Teen Trends</h1>
					<p className="mt-2 text-xl text-gray-100 italic">
						Découvrez les activités les plus cool et branchées pour les ados !
					</p>
				</div>
			</header>

			<section className="py-12 px-4 text-center bg-blue-50">
				<img
					src="https://images.pexels.com/photos/40815/youth-active-jump-happy-40815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Teen Trends Activities"
					className="object-cover w-full h-72 md:h-96 rounded-lg shadow-md mb-6"
				/>
				<div className="max-w-3xl mx-auto">
					<p className="text-lg text-gray-700 leading-relaxed">
						TeenTrends est votre guide ultime pour découvrir les activités les plus en vogue, des
						défis TikTok excitants aux jeux vidéo en ligne captivants. Rejoignez notre communauté pour
						découvrir tout ce qui est branché !
					</p>
					<button
						type="button"
						className="mt-6 inline-block bg-purple-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-purple-400"
					>
						Explorez les tendances
					</button>
				</div>
			</section>

			<section className="py-16 px-4">
				<div className="container mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
					<div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-purple-500">
						<h3 className="text-xl font-bold text-purple-600">Défis sur les réseaux sociaux</h3>
						<p className="mt-2 text-gray-600">
							Retrouvez les tendances et défis les plus populaires sur TikTok, Instagram, et plus !
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
						<h3 className="text-xl font-bold text-blue-600">Jeux vidéo en vogue</h3>
						<p className="mt-2 text-gray-600">
							Explorez notre sélection de jeux vidéo qui passionnent les ados, des classiques aux
							nouveautés.
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-pink-500">
						<h3 className="text-xl font-bold text-pink-600">Conseils et sécurité en ligne</h3>
						<p className="mt-2 text-gray-600">
							Découvrez nos conseils pour une expérience en ligne fun et sécurisée !
						</p>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-gradient-to-br from-purple-600 to-pink-500 text-white">
				<h2 className="text-3xl font-bold">Rejoignez notre communauté</h2>
				<p className="mt-4 max-w-xl mx-auto text-lg">
					Inscrivez-vous pour recevoir des mises à jour et être toujours au courant des dernières
					tendances !
				</p>
				<button
					type="button"
					className="mt-6 inline-block bg-white text-purple-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100"
				>
					Rejoindre maintenant
				</button>
			</section>

			<section className="py-16 bg-blue-50">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-purple-600">Activités pour les adolescents</h2>
					<p className="mt-4 text-gray-700">
						Découvrez les meilleures idées de loisirs pour les jeunes. Parcourez des articles sur des
						thèmes divers et captivants !
					</p>
					<ul className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
						<li className="bg-white p-6 rounded-lg shadow-md border-l-4 border-pink-500">
							<h3 className="text-xl font-semibold text-pink-600">Idée de Loisir 1</h3>
							<p className="mt-2 text-gray-600">Les dernières activités à essayer avec vos amis.</p>
						</li>
						<li className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
							<h3 className="text-xl font-semibold text-purple-600">Idée de Loisir 2</h3>
							<p className="mt-2 text-gray-600">Idées de loisirs et de détente pour se relaxer.</p>
						</li>
						<li className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
							<h3 className="text-xl font-semibold text-blue-600">Idée de Loisir 3</h3>
							<p className="mt-2 text-gray-600">Activités créatives et originales pour se divertir.</p>
						</li>
					</ul>
				</div>
			</section>

			<footer className="bg-purple-900 py-8 text-white">
				<div className="container mx-auto text-center">
					<p>
						Contact : <button className="underline hover:text-gray-300 ml-2">contact@teentrends.com</button>
					</p>
					<p className="mt-4">
						&copy; {new Date().getFullYear()} Teen Trends. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default TeenTrends;

// used in RenderAllWebsites to select the right website
TeenTrends.componentName = "teenTrends";
// used in tab as site title
TeenTrends.title = "Teen Trends | Activités et tendances pour les ados";
// used in searchEngine
TeenTrends.excerpt = "Découvrez les activités et défis les plus populaires pour les adolescents sur Teen Trends.";

TeenTrends.favicon = <IconSearchEngine />;

TeenTrends.pages = [
	{
		title: "Les activités pour les adolescents | Teen Trends",
		url: "https://teentrends-activités.be/fr",
	},
];
