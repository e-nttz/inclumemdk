import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const OuikiHow = () => {
	return (
		<body className="bg-gray-50">
			<section className="relative text-white bg-green-500">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-70"
					style={{
						backgroundImage: "url('https://images.pexels.com/photos/14066351/pexels-photo-14066351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}
				></div>
				<div className="container relative px-6 py-20 mx-auto text-center">
					<h1 className="text-4xl font-bold lg:text-5xl">
						Comment Installer un Antivirus ?
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Protégez votre ordinateur des maliciels avec nos étapes simples.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">Les Étapes d'Installation</h2>
					<p className="mt-4 text-gray-600">
						Chaque étape est conçue pour vous guider à travers le processus d'installation.
					</p>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container px-6 mx-auto">
					<ul className="space-y-8">
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Etape 1 : Pourquoi Installer un Antivirus ?</h3>
							<p className="mt-2 text-gray-700">
								Comprenez les menaces potentielles et pourquoi un antivirus est essentiel.
							</p>
						</li>
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Etape 2 : Acquérir un Antivirus</h3>
							<p className="mt-2 text-gray-700">
								Choisissez le bon logiciel antivirus selon vos besoins et votre budget.
							</p>
						</li>
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Etape 3 : Installer l’Antivirus</h3>
							<p className="mt-2 text-gray-700">
								Suivez les instructions pour installer le logiciel sur votre ordinateur.
							</p>
						</li>
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Etape 4 : Mettre l’Antivirus à Jour</h3>
							<p className="mt-2 text-gray-700">
								Assurez-vous que votre antivirus est à jour pour une protection optimale.
							</p>
						</li>
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Etape 5 : Analyser l’Ordinateur</h3>
							<p className="mt-2 text-gray-700">
								Réalisez une analyse complète pour détecter d'éventuelles menaces.
							</p>
						</li>
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Etape 6 : Planifier les Analyses Automatiques</h3>
							<p className="mt-2 text-gray-700">
								Configurez des analyses automatiques pour maintenir votre ordinateur sécurisé.
							</p>
						</li>
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Etape 7 : Télécharger Régulièrement des Mises à Jour</h3>
							<p className="mt-2 text-gray-700">
								Téléchargez les mises à jour régulièrement pour vous protéger contre les nouvelles menaces.
							</p>
						</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-green-600">
				<h2 className="text-3xl font-bold">Prêt à Protéger Votre Ordinateur ?</h2>
				<p className="mt-4 text-lg">
					Suivez nos étapes pour garantir la sécurité de votre machine.
				</p>
				<button
					className="inline-block px-8 py-4 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-400"
				>
					Commencer Maintenant
				</button>
			</section>
		</body>
	);
};

export default OuikiHow;

// used in RenderAllWebsites to select the right website
OuikiHow.componentName = "ouikiHow";
// used in tab as site title
OuikiHow.title = "Comment installer un antivirus ? | OuikiHow";
// used in searchEngine
OuikiHow.excerpt = "Découvrez comment installer un antivirus avec notre guide détaillé.";

// Mots clés
OuikiHow.motsCles = [
    "installer",
    "installation",
    "antivirus",
    "guide",
    "guides",
    "détaillé",
    "detaillé", // Variante sans accent
    "détaillés",
    "detaillés", // Variante sans accent
    "détail",
    "detail", // Variante sans accent
    "logiciel",
    "logiciels",
    "sécurité",
    "securite", // Variante sans accent
    "protection",
    "ordinateur",
    "ordinateurs",
    "pc",
    "mac",
    "tutoriel",
    "tutoriels",
    "assistance",
    "aide",
    "configuration",
    "configurer",
    "paramètres",
    "parametres", // Variante sans accent
    "réglages",
    "reglages", // Variante sans accent
    "virus",
    "malware",
    "cybersecurité",
    "cybersecurite", // Variante sans accent
    "cybersécurité",
    "protéger",
    "proteger", // Variante sans accent
    "en ligne",
    "sansvirus",
    "nettoyage",
    "miseajour",
    "utilitaire",
    "sécurisation",
    "explication",
    "procédure",
    "procedure", // Variante sans accent
    "support",
    "erreur",
    "probleme",
    "problème",
    "windows",
    "macos",
    "ios",
    "android"
];

OuikiHow.favicon = <IconSearchEngine />;

OuikiHow.pages = [
	{
		title: "OuikiHow Tutoriel",
		url: "https://www.ouikihow.be/installer-un-antivirus",
	},
];
