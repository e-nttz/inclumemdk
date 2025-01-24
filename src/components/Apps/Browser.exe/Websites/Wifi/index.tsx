import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const ActiverWifi = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
				<header className="bg-blue-600 py-8 shadow-lg">
					<div className="container mx-auto text-center">
						<h1 className="text-5xl font-bold text-white">Comment Activer son Wi-Fi</h1>
						<p className="mt-2 text-lg text-blue-200">Suivez ce guide simple pour vous connecter en toute simplicité</p>
					</div>
				</header>

				<section className="py-12 text-center bg-white">
					<IKImage 
						path={ActiverWifi.images[0]} 
						className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md" 
					/>
					<div className="container mx-auto mt-6 max-w-2xl">
						<p className="text-lg text-gray-800">
							Que vous soyez sur un ordinateur, un smartphone ou une tablette, l'activation du Wi-Fi est simple. Ce tutoriel vous guidera pas à pas pour activer votre connexion sans fil.
						</p>
						<button
							type="button"
							className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-500"
						>
							Démarrer le tutoriel
						</button>
					</div>
				</section>

				<section className="py-16 bg-gray-100">
					<div className="container mx-auto text-center">
						<h2 className="text-3xl font-semibold text-blue-600">Étapes pour Activer le Wi-Fi</h2>
						<p className="mt-4 text-gray-700">
							Suivez ces étapes pour activer le Wi-Fi sur votre appareil :
						</p>
						<ul className="mt-8 space-y-4">
							<li className="bg-white p-4 rounded-lg shadow">
								<span className="font-bold text-blue-600">1. Ouvrir les paramètres de votre appareil</span>
								<p className="text-gray-700 mt-2">Sur votre téléphone ou ordinateur, accédez au menu des paramètres.</p>
							</li>
							<li className="bg-white p-4 rounded-lg shadow">
								<span className="font-bold text-blue-600">2. Trouver l'option "Wi-Fi"</span>
								<p className="text-gray-700 mt-2">Cherchez l'onglet réseau ou Wi-Fi dans les paramètres.</p>
							</li>
							<li className="bg-white p-4 rounded-lg shadow">
								<span className="font-bold text-blue-600">3. Activer le Wi-Fi</span>
								<p className="text-gray-700 mt-2">Basculez l'interrupteur Wi-Fi sur "Activé".</p>
							</li>
							<li className="bg-white p-4 rounded-lg shadow">
								<span className="font-bold text-blue-600">4. Sélectionner un réseau</span>
								<p className="text-gray-700 mt-2">Choisissez un réseau dans la liste et saisissez le mot de passe si nécessaire.</p>
							</li>
							<li className="bg-white p-4 rounded-lg shadow">
								<span className="font-bold text-blue-600">5. Vous êtes connecté !</span>
								<p className="text-gray-700 mt-2">Votre appareil devrait maintenant être connecté à Internet.</p>
							</li>
						</ul>
					</div>
				</section>

				<section className="py-16 text-center bg-white">
					<h2 className="text-3xl font-semibold text-blue-600">Pourquoi Activer le Wi-Fi ?</h2>
					<p className="mt-4 text-gray-700">
						Le Wi-Fi vous permet de rester connecté sans utiliser vos données mobiles, tout en offrant une vitesse de connexion optimale pour naviguer, streamer et travailler.
					</p>
				</section>

				<section className="py-16 bg-blue-50 text-center">
					<h2 className="text-3xl font-semibold text-blue-600">Témoignages</h2>
					<p className="mt-4 text-gray-700">Voici ce que disent nos utilisateurs :</p>
					<div className="mt-6 max-w-3xl mx-auto space-y-4">
						<blockquote className="bg-white p-4 rounded-lg shadow">
							<p className="text-gray-600">“Grâce à ce tutoriel, j'ai enfin pu activer le Wi-Fi sur mon nouveau téléphone sans problème !”</p>
							<footer className="mt-2 text-gray-500">- Sarah D.</footer>
						</blockquote>
						<blockquote className="bg-white p-4 rounded-lg shadow">
							<p className="text-gray-600">“Simple et clair, parfait pour les débutants comme moi !”</p>
							<footer className="mt-2 text-gray-500">- Marc L.</footer>
						</blockquote>
					</div>
				</section>

				<footer className="bg-blue-600 py-6">
					<div className="container mx-auto text-center text-gray-200">
						<p>&copy; {new Date().getFullYear()} Tutoriel Wi-Fi. Tous droits réservés.</p>
					</div>
				</footer>
			</body>
		</IKContext>
	);
};

export default ActiverWifi;

// used in RenderAllWebsites to select the right website
ActiverWifi.componentName = "activerWifi";
// used in tab as site title
ActiverWifi.title = "Comment Activer son Wi-Fi";
// used in searchEngine
ActiverWifi.excerpt = "Un tutoriel simple et rapide pour activer votre Wi-Fi.";

// Mots clés
ActiverWifi.motsCles = [
	"Wi-Fi",
	"Connexion",
	"Internet",
	"Réseau",
	"WiFi",
	"Configuration",
	"Tutoriel",
	"Activer",
	"Guide",
	"Mobile",
	"Ordinateur",
    "comment",
    "commen",    // faute
    "activer",
    "activé",    // variante
    "activation",
    "activer",   // répétition
    "le",
    "l'",        // variante
    "wifi",
    "wfi",       // faute
    "wi-fi",
    "wiffy",     // faute
    "connection", // faute
    "connecter",
    "connecté",   // variante
    "internet",
    "internette", // faute
    "réseau",
    "reseau",    // sans accent
    "réseaux",   // pluriel
    "pc",
    "ordinateur",
    "portable",
    "smartphone",
    "tablette",
    "android",
    "androïde",  // variante
    "iphone",
    "ios",
    "windows",
    "mac",
    "macbook",
    "maison",
    "publique",
    "box",
    "livebox",
    "freebox",
    "bbox",
    "routeur",
    "routteur",  // faute
    "bloqué",
    "non",
    "détecté",
    "pas",
    "activé",
    "coupé",
    "connecter",
    "comment",
    "se",
    "perdue",
    "configurer",
    "installer",
    "activer",
    "rapidement",
    "pour",
    "activer",
    "aide",
    "tutoriel",
    "simple",
    "wii-fi",    // faute
    "wi-fii",    // faute
    "wi fi",
    "guide", 
    "wifi",
];

// Site favicon icon
ActiverWifi.favicon = <IconSearchEngine />;

ActiverWifi.images = [
	"ActiverWiFi.jpg"
];

ActiverWifi.pages = [
	{
		title: "Tutoriel Wi-Fi",
		url: "https://tutoriel-wifi.com",
	},
];