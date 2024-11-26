import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const SocialScape = () => {
	return (
		<body className="bg-gray-100">
			<header className="bg-blue-600 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">SocialScape</h1>
					<p className="mt-2 text-lg text-blue-100">
						Élargissez votre cercle d'amis grâce à des activités sociales enrichissantes
					</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Activités SocialScape"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg mx-auto"
				/>
				<div className="container mx-auto mt-8 max-w-2xl">
					<p className="text-lg text-gray-700">
						Explorez des activités sociales variées, rejoignez des groupes locaux et connectez-vous avec
						des gens partageant les mêmes passions. Que vous soyez ici pour des soirées jeux, des
						aventures en plein air ou simplement pour rencontrer de nouvelles personnes, SocialScape
						vous guide dans la construction de liens authentiques.
					</p>
					<button
						type="button"
						className="mt-6 bg-blue-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-400"
					>
						Rejoignez des activités
					</button>
				</div>
			</section>

			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
					<div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-yellow-500">
						<h3 className="text-xl font-bold text-yellow-600">Événements Locaux</h3>
						<p className="mt-2 text-gray-600">
							Participez à des soirées, ateliers et autres événements organisés dans votre ville.
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
						<h3 className="text-xl font-bold text-blue-600">Groupes d'Intérêt</h3>
						<p className="mt-2 text-gray-600">
							Rejoignez des groupes partageant vos passions et échangez autour de vos intérêts communs.
						</p>
					</div>
					<div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-green-500">
						<h3 className="text-xl font-bold text-green-600">Activités Amusantes</h3>
						<p className="mt-2 text-gray-600">
							Trouvez des idées d’activités de loisirs pour sortir de la routine et vous amuser en
							bonne compagnie.
						</p>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-blue-600 text-white">
				<h2 className="text-3xl font-bold">Rejoignez Notre Communauté</h2>
				<p className="mt-4 max-w-lg mx-auto text-lg">
					Inscrivez-vous pour recevoir des invitations aux événements et activités près de chez vous.
				</p>
				<button
					type="button"
					className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100"
				>
					S'inscrire Maintenant
				</button>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-blue-600">Activités Recommandées</h2>
					<p className="mt-4 text-gray-700">
						Explorez des activités locales recommandées pour découvrir de nouvelles passions et de
						nouveaux amis.
					</p>
					<div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-left">
						<div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
							<h3 className="text-xl font-semibold text-blue-600">Soirée Jeux de Société</h3>
							<p className="mt-2 text-gray-600">Rejoignez-nous pour une soirée ludique et conviviale !</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
							<h3 className="text-xl font-semibold text-yellow-600">Randonnée en Groupe</h3>
							<p className="mt-2 text-gray-600">Découvrez des sentiers et rencontrez des amoureux de la nature.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
							<h3 className="text-xl font-semibold text-green-600">Atelier Cuisine</h3>
							<p className="mt-2 text-gray-600">Participez à un atelier pour apprendre et déguster ensemble !</p>
						</div>
					</div>
				</div>
			</section>

			<footer className="bg-blue-900 py-8 text-white">
				<div className="container mx-auto text-center">
					<p>
						Contact : <button className="underline hover:text-gray-300 ml-2">contact@socialscape.com</button>
					</p>
					<p className="mt-4">&copy; {new Date().getFullYear()} SocialScape. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default SocialScape;

// used in RenderAllWebsites to select the right website
SocialScape.componentName = "socialScape";
// used in tab as site title
SocialScape.title = "SocialScape | Activités et rencontres sociales";
// used in searchEngine
SocialScape.excerpt = "Découvrez des activités sociales avec SocialScape pour élargir votre cercle d'amis.";

SocialScape.favicon = <IconSearchEngine />;

SocialScape.pages = [
	{
		title: "SocialScape - Activités sociales pour élargir votre cercle d'amis",
		url: "https://socialscape-activités.com/fr",
	},
];
