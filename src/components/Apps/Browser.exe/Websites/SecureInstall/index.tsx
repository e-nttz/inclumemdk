import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const SecureInstall = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<section className="relative text-white bg-blue-600">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-60"
					style={{
						backgroundImage: `url("https://ik.imagekit.io/0jngziwft/inclume/photos_sites/${SecureInstall.images[0]}")`,
					}}
				></div>
				<div className="container relative px-6 py-20 mx-auto text-center">
					<h1 className="text-4xl font-bold lg:text-5xl">
						Installation Sécurisée de Votre Antivirus
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Suivez nos conseils pratiques pour protéger votre ordinateur.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">Pourquoi Choisir SecureInstall ?</h2>
					<p className="mt-4 text-gray-600">
						Des tutoriels et des conseils pour une installation sans faille.
					</p>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container px-6 mx-auto">
					<ul className="space-y-8">
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Accueil</h3>
							<p className="mt-2 text-gray-700">
								Trouvez des ressources sur l'installation sécurisée de votre antivirus.
							</p>
						</li>
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Tutoriels Sécurisés</h3>
							<p className="mt-2 text-gray-700">
								Accédez à des tutoriels détaillés pour une installation réussie.
							</p>
						</li>
						<li className="p-6 bg-gray-200 rounded-lg shadow">
							<h3 className="text-xl font-semibold">FAQ sur la Sécurité</h3>
							<p className="mt-2 text-gray-700">
								Consultez notre section FAQ pour des réponses à vos questions.
							</p>
						</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-blue-700">
				<h2 className="text-3xl font-bold">Prêt à Installer en Toute Sécurité ?</h2>
				<p className="mt-4 text-lg">
					Consultez nos conseils pour éviter les pièges courants lors de l'installation.
				</p>
				<button
					className="inline-block px-8 py-4 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-400"
				>
				Découvrez les Tutoriels
				</button>
			</section>
		</body>
		</IKContext>
	);
};

export default SecureInstall;

// used in RenderAllWebsites to select the right website
SecureInstall.componentName = "secureInstall";
// used in tab as site title
SecureInstall.title = "Conseils pratiques pour une installation sécurisée de votre antivirus | SecureInstall";
// used in searchEngine
SecureInstall.excerpt = "Obtenez des conseils pratiques pour installer votre antivirus en toute sécurité.";

// Mots clés
SecureInstall.motsCles = [
	"antivirus",
	"antyvirus", // Variante d'orthographe
	"anti-virus",
	"protection",
	"protektion", // Variante d'orthographe
	"sécurité",
	"sécurite", // Variante d'orthographe
	"cybersécurité",
	"cybersecurite", // Variante d'orthographe
	"installation",
	"instalation", // Variante d'orthographe
	"installer",
	"instaler", // Variante d'orthographe
	"conseils",
	"conseille", // Variante d'orthographe
	"pratiques",
	"pratique",
	"configuration",
	"paramétrage",
	"paramettrage", // Variante d'orthographe
	"ordinateur",
	"ordinateurs",
	"ordinateurz", // Variante d'orthographe
	"PC",
	"pécé", // Variante phonétique
	"logiciel",
	"logiciels",
	"logitiel", // Variante d'orthographe
	"protection",
	"protéger",
	"protégé", // Variante d'orthographe
	"virus",
	"malware",
	"malwares",
	"spyware",
	"spywares",
	"trojan",
	"trojans",
	"piratage",
	"hacking",
	"hacker",
	"hakeur", // Variante phonétique
	"sécuriser",
	"sécurisée",
	"firewall",
	"parefeu",
	"pare-feu",
	"cyberattaque",
	"cyberattaques",
	"tutoriel",
	"tutorie", // Variante d'orthographe
	"guide",
	"guides",
	"aide",
	"support",
	"assistance",
	"mise",
	"à",
	"jour",
	"miseajour" // Variante d'écriture
];

SecureInstall.favicon = <IconSearchEngine />;

SecureInstall.images = [
	"Secure Install.webp"
]

SecureInstall.pages = [
	{
		title: "SecureInstall Accueil",
		url: "https://www.secure-install.com/fr",
	},
];
