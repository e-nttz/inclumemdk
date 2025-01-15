import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const VirusGuardian = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-100">
			<section className="relative text-white bg-blue-500">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-60"
					style={{
						backgroundImage: `url("https://ik.imagekit.io/0jngziwft/inclume/photos_sites/${VirusGuardian.images[0]}")`,
					}}
				></div>
				<div className="container relative px-6 py-20 mx-auto text-center">
					<h1 className="text-5xl font-bold lg:text-6xl">
						Tutoriels Antivirus avec Virus Guardian
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Optimisez votre protection en ligne dès aujourd'hui.
					</p>
					<button
						type="button"
						className="inline-block px-8 py-4 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-600"
					>
					 Commencez Maintenant
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-200">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">Nos Tutoriels</h2>
					<div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-4">
						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<IKImage
								className="object-cover w-full h-48"
								path={VirusGuardian.images[1]}
								alt="Installer Antivirus"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Installer</h3>
								<p className="mt-2 text-gray-600">
									Guide d'installation pour votre antivirus.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
								>
									Voir le Tutoriel
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<IKImage
								className="object-cover w-full h-48"
								path={VirusGuardian.images[3]}
								alt="Configurer Antivirus"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Configurer</h3>
								<p className="mt-2 text-gray-600">
									Ajustez les paramètres pour une protection optimale.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
								>
									Configurer Maintenant
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<IKImage
								className="object-cover w-full h-48"
								path={VirusGuardian.images[2]}
								alt="Utiliser Antivirus"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Utiliser</h3>
								<p className="mt-2 text-gray-600">
									Tips et astuces pour tirer le meilleur parti de votre logiciel.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
								>
									Commencer
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<IKImage
								className="object-cover w-full h-48"
								path={VirusGuardian.images[4]}
								alt="Prévention des menaces"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Prévention</h3>
								<p className="mt-2 text-gray-600">
									Apprenez à prévenir les menaces informatiques.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
								>
									Apprendre Plus
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">À Propos de Nous</h2>
					<p className="mt-4 text-gray-600">
						Virus Guardian est dédié à fournir des ressources fiables pour
						aider les utilisateurs à protéger leurs appareils contre les
						menaces en ligne. Nos guides pratiques sont conçus pour être
						compréhensibles et accessibles à tous.
					</p>
					<button
						type="button"
						className="inline-block px-8 py-4 mt-6 text-white bg-green-500 rounded-lg hover:bg-green-600"
					>
						En Savoir Plus
					</button>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-green-600">
				<h2 className="text-3xl font-bold">
					Prêt à Protéger Votre Système ?
				</h2>
				<p className="mt-4 text-lg">
					Rejoignez-nous pour des tutoriels pratiques et des conseils de sécurité.
				</p>
				<button
					type="button"
					className="inline-block px-8 py-4 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
				>
					Démarrer
				</button>
			</section>
		</body>
		</IKContext>
	);
};

export default VirusGuardian;

// used in RenderAllWebsites to select the right website
VirusGuardian.componentName = "virusGuardian";
// used in tab as site title
VirusGuardian.title = "Tutoriels pour optimiser votre protection antivirus | Virus Guardian";
// used in searchEngine
VirusGuardian.excerpt = "Virus Guardian offre une collection de tutoriels complets pour vous guider dans l’installation, la configuration et l’utilisation efficace des logiciels antivirus.";

// Mots clés
VirusGuardian.motsCles = [
"virus",
	"antivirus",
	"anti-virus", // Variante orthographique
	"guardian",
	"protection",
	"sécurité",
	"securite", // Variante d'orthographe
	"cybersécurité",
	"cybersecurite", // Variante d'orthographe
	"logiciel",
	"logiciels",
	"tutoriel",
	"tutoriels",
	"guide",
	"guides",
	"installation",
	"installer",
	"configuration",
	"configurer",
	"paramètres",
	"parametres", // Variante d'orthographe
	"utilisation",
	"efficace",
	"efficacité",
	"efficacite", // Variante d'orthographe
	"outil",
	"outils",
	"ordinateur",
	"ordinateurs",
	"pc",
	"mac",
	"protéger",
	"facile",
	"rapide",
	"assistance",
	"aide",
	"support",
	"vidéo",
	"videos",
	"video", // Variante d'orthographe
	"étape",
	"etape", // Variante d'orthographe
	"activation",
	"activer",
	"mise à jour",
	"mise a jour", // Variante d'orthographe
	"problème",
	"problèmes",
	"probleme", // Variante d'orthographe
	"résolution",
	"resolutions", // Variante d'orthographe
	"internet",
	"risque",
	"menaces",
	"menace",
	"utilisateur",
	"utilisateurs",
	"sécuriser",
	"prévention",
	"securiser", // Variante d'orthographe
	"pare-feu",
	"firewall",
	"solution",
	"solutions"
];

VirusGuardian.favicon = <IconSearchEngine />;

VirusGuardian.images = [
	"Virus Guardian 1.webp",
	"Virus Guardian 2.webp",
	"Virus Guardian 3.jpeg",
	"Virus Guardian 4.webp",
]

VirusGuardian.pages = [
	{
		title: "Virus Guardian",
		url: "https://www.virusguardian.com/fr",
	},
];
