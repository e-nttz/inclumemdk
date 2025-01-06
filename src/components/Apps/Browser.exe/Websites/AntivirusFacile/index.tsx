import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const AntivirusFacile = () => {
	return (
		<body className="bg-gray-50">
			<section className="relative text-white bg-green-700">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-70"
					style={{
						backgroundImage: "url('https://images.pexels.com/photos/3949100/pexels-photo-3949100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}
				></div>
				<div className="container relative px-6 py-20 mx-auto text-center">
					<h1 className="text-5xl font-bold lg:text-6xl">
						AntivirusFacile
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Tutoriels Pas à Pas pour une Installation Réussie
					</p>
					<button
						type="button"
						className="inline-block px-8 py-3 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-600"
					>
						Commencez Ici
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">Nos Ressources</h2>
					<p className="mt-4 text-gray-600">
						Des guides détaillés et des conseils pratiques pour vous aider.
					</p>
				</div>
				<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Guide d'installation"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Accueil</h3>
							<p className="mt-2 text-gray-600">
								Démarrez avec notre page d'accueil pour trouver tous nos guides.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600"
							>
								Explorer
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://images.pexels.com/photos/2064586/pexels-photo-2064586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Guides d'installation"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Guides d’installation</h3>
							<p className="mt-2 text-gray-600">
								Trouvez des guides détaillés pour chaque étape d'installation.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600"
							>
								Accéder aux Guides
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://images.pexels.com/photos/1923286/pexels-photo-1923286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt="Conseils pratiques"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Conseils Pratiques</h3>
							<p className="mt-2 text-gray-600">
								Obtenez des conseils pour garantir une installation réussie.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-green-500 rounded-lg hover:bg-green-600"
							>
								En Savoir Plus
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-green-600">
				<h2 className="text-3xl font-bold text-white">
					Prêt à Installer Votre Antivirus ?
				</h2>
				<p className="mt-4 text-lg text-white">
					Suivez nos tutoriels et conseils pratiques pour une installation facile.
				</p>
				<button
					type="button"
					className="inline-block px-8 py-4 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-400"
				>
					Démarrez Maintenant
				</button>
			</section>
		</body>
	);
};

export default AntivirusFacile;

// used in RenderAllWebsites to select the right website
AntivirusFacile.componentName = "antivirusFacile";
// used in tab as site title
AntivirusFacile.title = "Tutoriels pas à pas pour une installation réussie de votre logiciel antivirus | AntivirusFacile";
// used in searchEngine
AntivirusFacile.excerpt = "Découvrez des guides détaillés pour une installation réussie de votre logiciel antivirus.";

// Mots clés
AntivirusFacile.motsCles = [
	"antivirus",
	"anti-virus", // Variante orthographique
	"installation",
	"installer",
	"guide",
	"guides",
	"tutoriel",
	"tutoriels",
	"instructions",
	"instruction",
	"manuel",
	"manuels",
	"étapes",
	"etapes", // Variante orthographique
	"procédure",
	"procedure", // Variante orthographique
	"configuration",
	"configurer",
	"mise",
	"jour",
	"protection",
	"sécurité",
	"securite", // Variante orthographique
	"logiciel",
	"logiciels",
	"ordinateur",
	"ordinateurs",
	"pc",
	"mac",
	"cybersécurité",
	"cybersecurite", // Variante orthographique
	"internet",
	"menaces",
	"virus",
	"cyberprotection",
	"protéger",
	"proteger", // Variante orthographique
	"systèmes",
	"systemes", // Variante orthographique
	"opérationnels",
	"operationnels", // Variante orthographique
	"rapide",
	"simple",
	"facile",
	"efficace",
	"sécuriser",
	"securiser", // Variante orthographique
	"support",
	"assistance",
	"problèmes",
	"problemes", // Variante orthographique
	"solutions",
	"erreurs",
	"résolution",
	"resolution", // Variante orthographique
	"téléchargement",
	"telechargement", // Variante orthographique
	"licence",
	"clé",
	"activation",
	"optimisation",
	"évaluation",
	"evaluation" // Variante orthographique
];

AntivirusFacile.favicon = <IconSearchEngine />;

AntivirusFacile.pages = [
	{
		title: "AntivirusFacile Accueil",
		url: "https://www.antivirus-facile.com",
	},
];
