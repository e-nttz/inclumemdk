import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const MacrosoftTranslator = () => {
	return (
		<body className="bg-white">
			<header className="bg-purple-600 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">Macrosoft Translator</h1>
					<p className="mt-2 text-lg text-gray-200">
						Briser les frontières linguistiques
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<img
					src="https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Macrosoft Translator"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800">
						Utilisez Macrosoft Translator pour traduire vos textes en un instant, où que vous soyez.
					</p>
					<button
						type="button"
						className="mt-4 inline-block px-8 py-3 text-purple-600 bg-white rounded-lg shadow hover:bg-gray-100"
					>
						Démarrer la traduction
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-purple-600">Comment ça fonctionne</h2>
					<p className="mt-4 text-gray-600">
						Notre outil est simple à utiliser. Voici comment procéder :
					</p>
					<div className="grid gap-6 mt-10 md:grid-cols-3">
						<div className="p-6 bg-white rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold">Étape 1</h3>
							<p className="mt-2 text-gray-600">Entrez votre texte d'origine.</p>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold">Étape 2</h3>
							<p className="mt-2 text-gray-600">Choisissez la langue cible.</p>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold">Étape 3</h3>
							<p className="mt-2 text-gray-600">Obtenez votre texte traduit instantanément.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center">
				<h2 className="text-3xl font-bold text-purple-600">Langues Disponibles</h2>
				<p className="mt-4 text-lg text-gray-800">
					Choisissez parmi les langues suivantes pour vos traductions :
				</p>
				<ul className="mt-6 flex justify-center flex-wrap gap-4">
					<li className="bg-purple-100 px-4 py-2 rounded-md">Néerlandais</li>
					<li className="bg-purple-100 px-4 py-2 rounded-md">Français</li>
					<li className="bg-purple-100 px-4 py-2 rounded-md">Anglais</li>
					<li className="bg-purple-100 px-4 py-2 rounded-md">Allemand</li>
					<li className="bg-purple-100 px-4 py-2 rounded-md">Zoulou</li>
					<li className="bg-purple-100 px-4 py-2 rounded-md">Espagnol</li>
				</ul>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-purple-600">Témoignages</h2>
					<p className="mt-4 text-gray-700">
						Voir ce que nos utilisateurs disent de nous :
					</p>
					<div className="mt-6 space-y-4">
						<blockquote className="bg-white p-4 rounded-lg shadow">
							<p className="text-gray-600">“Macrosoft Translator a facilité mes voyages à l'étranger !”</p>
							<footer className="mt-2 text-gray-500">- Pierre D.</footer>
						</blockquote>
						<blockquote className="bg-white p-4 rounded-lg shadow">
							<p className="text-gray-600">“La précision des traductions est incroyable !”</p>
							<footer className="mt-2 text-gray-500">- Marie L.</footer>
						</blockquote>
					</div>
				</div>
			</section>

			<footer className="bg-purple-600 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-200">
						Contact : contact@macrosoft-translator.com
					</p>
					<p className="text-gray-200">
						&copy; {new Date().getFullYear()} Macrosoft Translator. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default MacrosoftTranslator;

// used in RenderAllWebsites to select the right website
MacrosoftTranslator.componentName = "macrosoftTranslator";
// used in tab as site title
MacrosoftTranslator.title = "Macrosoft Translator | Brisez les barrières linguistiques";
// used in searchEngine
MacrosoftTranslator.excerpt = "Briser les frontières linguistiques depuis chez vous.";

// Mots clés
MacrosoftTranslator.motsCles = [
    "traduction",
    "tradution", // Variante de mauvaise orthographe
    "traduire",
    "traducteur",
    "traducteurs",
    "langue",
    "langues",
    "idiome", // Synonyme
    "frontière",
    "frontieres", // Variante sans accent
    "linguistique",
    "linguistiques",
    "communication",
    "barrière",
    "barrieres", // Variante sans accent
    "maison",
    "domicile",
    "distance",
    "enligne", // Variante
    "en ligne", // Variante avec espace
    "service",
    "services",
    "outil",
    "outils",
    "internet",
    "connexion",
    "efficacité",
    "efficace",
    "rapide",
    "simple",
    "facile",
    "multilingue",
    "multilanguage", // Variante anglaise
    "automatique",
    "automatisation",
    "liberté",
    "liberte", // Variante sans accent
    "compréhension",
    "comprehension", // Variante sans accent
];

MacrosoftTranslator.favicon = <IconSearchEngine />;

MacrosoftTranslator.pages = [
	{
		title: "Macrosoft Translator",
		url: "https://www.macrosoft-translator.com",
	},
];
