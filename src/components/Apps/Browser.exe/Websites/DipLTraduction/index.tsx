import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const DipLTraduction = () => {
	return (
		<body className="bg-white">
			<header className="bg-blue-700 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">DipL Traduction</h1>
					<p className="mt-2 text-lg text-gray-200">
						Traduction instantanée de textes et documents complets
					</p>
				</div>
			</header>

			<section className="py-16 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/2927599/pexels-photo-2927599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="DipL Traduction"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800">
						Accédez à des traductions précises en un clic avec DipL Traduction.
					</p>
					<button
						type="button"
						className="mt-4 inline-block px-8 py-3 text-blue-700 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-200"
					>
						Commencez votre traduction
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-700">Langues Disponibles</h2>
					<p className="mt-4 text-gray-700">
						Choisissez votre langue source et cible pour une traduction instantanée :
					</p>
					<div className="mt-6 flex justify-center gap-4 flex-wrap">
						<span className="bg-blue-100 px-4 py-2 rounded-md">Néerlandais</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Français</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Anglais</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Allemand</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Zoulou</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Espagnol</span>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-blue-700 text-white">
				<h2 className="text-3xl font-bold">Pourquoi Choisir DipL Traduction ?</h2>
				<p className="mt-4 text-lg">
					Nous garantissons des traductions rapides, fiables, et accessibles à tout moment.
				</p>
				<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
					<div className="p-6 bg-blue-600 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold">Précision</h3>
						<p className="mt-2">Des traductions claires et précises pour tous vos besoins professionnels.</p>
					</div>
					<div className="p-6 bg-blue-600 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold">Rapidité</h3>
						<p className="mt-2">Obtenez vos traductions en quelques secondes.</p>
					</div>
					<div className="p-6 bg-blue-600 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold">Accessibilité</h3>
						<p className="mt-2">Disponible en ligne, où que vous soyez.</p>
					</div>
				</div>
			</section>

			<section className="py-16 bg-white text-center">
				<h2 className="text-3xl font-semibold text-blue-700">Fonctionnalités Supplémentaires</h2>
				<p className="mt-4 text-gray-800">
					Explorez nos options de traduction avancées pour améliorer vos documents.
				</p>
				<ul className="mt-6 flex justify-center flex-wrap gap-6 text-lg text-gray-800">
					<li className="px-6 py-3 bg-gray-100 rounded-md shadow">Traduction de documents PDF</li>
					<li className="px-6 py-3 bg-gray-100 rounded-md shadow">Traduction avec synthèse vocale</li>
					<li className="px-6 py-3 bg-gray-100 rounded-md shadow">Ajustement linguistique avancé</li>
				</ul>
			</section>

			<footer className="bg-blue-700 py-6 text-white">
				<div className="container mx-auto text-center">
					<p>
						Pour nous contacter : contact@dipl-translator.com
					</p>
					<p className="mt-4">&copy; {new Date().getFullYear()} DipL Traduction. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default DipLTraduction;

// used in RenderAllWebsites to select the right website
DipLTraduction.componentName = "diplTraduction";
// used in tab as site title
DipLTraduction.title = "DipL Traduction | Traduction instantanée de textes et documents complets";
// used in searchEngine
DipLTraduction.excerpt = "Traduction instantanée de textes et documents complets avec DipL Traduction.";

// Mots clés
DipLTraduction.motsCles = [
    "traduction",
    "tradution", // Variante de mauvaise orthographe
    "texte",
    "textes",
    "texe", // Variante de mauvaise orthographe
    "document",
    "documents",
    "documant", // Variante de mauvaise orthographe
    "instantané",
    "instantanee", // Variante sans accent
    "immédiat",
    "immediat", // Variante sans accent
    "rapide",
    "vitesse",
    "dipl",
    "dipL",
    "traduire",
    "traducteur",
    "traducteurs",
    "convertir",
    "conversion",
    "interprétation",
    "interpretation", // Variante sans accent
    "automatique",
    "automatisation",
    "logiciel",
    "logiciels",
    "online", // Variante anglaise
    "enligne", // Variante
    "service",
    "services",
    "multilingue",
    "multilanguage", // Variante anglaise
    "langue",
    "langues",
    "idiome", // Synonyme
    "complet",
    "intégral",
    "integral", // Variante sans accent
    "fichier",
    "fichiers",
    "écrit",
    "écrits",
    "ercrits", // Variante de mauvaise orthographe
    "documentaire",
    "contenu",
    "contenus",
    "transfert",
    "communication"
];

DipLTraduction.favicon = <IconSearchEngine />;

DipLTraduction.pages = [
	{
		title: "DipL Traduction",
		url: "https://www.dipl-translator.com",
	},
];
