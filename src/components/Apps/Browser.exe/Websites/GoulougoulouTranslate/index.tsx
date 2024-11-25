import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const GoulougoulouTranslate = () => {
	return (
		<body className="bg-white">
			<header className="bg-blue-700 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-yellow-300">Goulougoulou Traduction</h1>
					<p className="mt-2 text-xl text-white">
						Le service gratuit de traduction instantanée
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<img
					src="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Goulougoulou Traduction"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 px-4">
					<p className="text-lg text-gray-800 leading-relaxed">
						Utilisez Goulougoulou pour traduire des mots, des phrases ou des pages web en un instant, gratuitement et sans inscription.
					</p>
					<button
						type="button"
						className="mt-6 px-8 py-3 text-yellow-300 bg-blue-700 rounded-lg shadow hover:bg-blue-800 hover:text-yellow-200"
					>
						Commencez votre traduction
					</button>
				</div>
			</section>

			<section className="py-16 bg-yellow-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-blue-700">Comment ça marche ?</h2>
					<div className="grid gap-8 mt-10 md:grid-cols-3">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-700">Étape 1</h3>
							<p className="mt-2 text-gray-600">Entrez votre texte dans la langue d'origine.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-700">Étape 2</h3>
							<p className="mt-2 text-gray-600">Choisissez la langue de traduction.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-700">Étape 3</h3>
							<p className="mt-2 text-gray-600">Recevez votre traduction immédiatement.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center">
				<h2 className="text-3xl font-bold text-blue-700">Langues disponibles</h2>
				<p className="mt-4 text-lg text-gray-800">
					Traductions disponibles dans les langues suivantes :
				</p>
				<ul className="mt-6 flex justify-center flex-wrap gap-4">
					<li className="bg-blue-100 px-4 py-2 rounded-md">Néerlandais</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Français</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Anglais</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Allemand</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Zoulou</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Espagnol</li>
				</ul>
			</section>

			<section className="py-16 bg-yellow-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-700">Avis de nos utilisateurs</h2>
					<p className="mt-4 text-gray-700">Découvrez ce que nos utilisateurs disent :</p>
					<div className="mt-6 space-y-6">
						<blockquote className="bg-white p-4 rounded-lg shadow-md">
							<p className="text-gray-600">“Une expérience de traduction fluide et rapide !”</p>
							<footer className="mt-2 text-gray-500">- Léa P.</footer>
						</blockquote>
						<blockquote className="bg-white p-4 rounded-lg shadow-md">
							<p className="text-gray-600">“Idéal pour traduire en quelques secondes !”</p>
							<footer className="mt-2 text-gray-500">- Thomas D.</footer>
						</blockquote>
					</div>
				</div>
			</section>

			<footer className="bg-blue-700 py-6">
				<div className="container mx-auto text-center">
					<p className="text-yellow-300">
						Contactez-nous pour plus d'informations : 
						<button className="underline hover:text-white ml-2">info@goulougoulou-translate.be</button>
					</p>
					<p className="text-yellow-300">
						&copy; {new Date().getFullYear()} Goulougoulou Traduction. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default GoulougoulouTranslate;

// used in RenderAllWebsites to select the right website
GoulougoulouTranslate.componentName = "goulougoulouTranslate";
// used in tab as site title
GoulougoulouTranslate.title = "Goulougoulou Traduction | Traduction gratuite instantanée";
// used in searchEngine
GoulougoulouTranslate.excerpt = "Traduisez des mots, phrases et pages Web gratuitement avec Goulougoulou.";

GoulougoulouTranslate.favicon = <IconSearchEngine />;

GoulougoulouTranslate.pages = [
	{
		title: "Goulougoulou Traduction",
		url: "https://goulougoulou-translate.be/fr",
	},
];
