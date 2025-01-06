import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const SkyParkingOostende = () => {
	return (
		<body className="bg-white">
			<header className="bg-blue-600 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">Sky Parking Oostende</h1>
					<p className="mt-2 text-lg text-gray-200">
						Stationnement à Ostende, ouvert 24h/24 et 7j/7
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<img
					src="https://images.pexels.com/photos/63294/autos-technology-vw-multi-storey-car-park-63294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Sky Parking Oostende"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800">
						Bienvenue à Sky Parking, votre solution de stationnement idéale à Ostende. Avec un accès facile et sécurisé, nous vous proposons une solution de stationnement fiable pour toutes vos visites.
					</p>
					<button
						type="button"
						className="mt-4 inline-block px-8 py-3 text-blue-600 bg-white rounded-lg shadow hover:bg-gray-100"
					>
						Plus d'informations
					</button>
				</div>
			</section>

			<section className="py-16">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-600">Détails du Parking</h2>
					<p className="mt-4 text-gray-700">Voici les informations essentielles concernant le parking :</p>
					<ul className="mt-6 space-y-2 text-left">
						<li className="text-gray-800"><strong>Ouvert :</strong> 7/7, 24/24</li>
						<li className="text-gray-800"><strong>Adresse :</strong> Leopold III-laan 6, 8400 Oostende</li>
						<li className="text-gray-800"><strong>Gratuit :</strong> Non</li>
						<li className="text-gray-800"><strong>Tarif :</strong> €1,50/heure</li>
						<li className="text-gray-800"><strong>Modes de paiement :</strong> Espèces, cartes de crédit et mobile</li>
					</ul>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-600">Avantages de Sky Parking</h2>
					<p className="mt-4 text-gray-700">Pourquoi choisir Sky Parking ?</p>
					<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="overflow-hidden bg-blue-50 rounded-lg shadow-lg p-4">
							<h3 className="text-xl font-semibold">Accessibilité</h3>
							<p className="mt-2 text-gray-600">Proche des transports en commun et à distance de marche des attractions principales.</p>
						</div>
						<div className="overflow-hidden bg-blue-50 rounded-lg shadow-lg p-4">
							<h3 className="text-xl font-semibold">Sécurité</h3>
							<p className="mt-2 text-gray-600">Surveillance 24h/24 pour assurer votre tranquillité d'esprit.</p>
						</div>
						<div className="overflow-hidden bg-blue-50 rounded-lg shadow-lg p-4">
							<h3 className="text-xl font-semibold">Commodité</h3>
							<p className="mt-2 text-gray-600">Système de réservation facile et rapide disponible en ligne.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-bold text-blue-600">Contactez-Nous</h2>
				<p className="mt-4 text-lg text-gray-800">
					Avez-vous des questions ? N'hésitez pas à nous contacter !
				</p>
				<p className="mt-2 text-gray-800">
					Email: <span className="underline">contact@visit-oostende.com</span>
				</p>
				<p className="text-gray-800">
					Téléphone: <span className="underline">+32 49 15 39 45 6</span>
				</p>
			</section>

			<footer className="bg-blue-600 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-200">
						<button className="underline hover:text-white">Contactez-nous</button>
					</p>
					<p className="text-gray-200">
						&copy; {new Date().getFullYear()} Visit Oostende. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default SkyParkingOostende;

// used in RenderAllWebsites to select the right website
SkyParkingOostende.componentName = "skyParkingOostende";
// used in tab as site title
SkyParkingOostende.title = "Sky Parking Oostende | Visit Oostende";
// used in searchEngine
SkyParkingOostende.excerpt = "Parking à Ostende, ouvert 24h/24 et 7j/7.";

// Mots clés
SkyParkingOostende.motsCles = [
	"parking",
	"parkings",
	"parquing", // Variante d'orthographe
	"stationnement",
	"stationer", // Variante d'orthographe
	"voiture",
	"voitures",
	"véhicule",
	"véhicules",
	"vehicule", // Variante d'orthographe
	"garage",
	"garages",
	"place",
	"places",
	"stationner",
	"stasionner", // Variante d'orthographe
	"Ostende",
	"Ostend", // Variante d'orthographe
	"24h",
	"24h/24",
	"7j/7",
	"ouvert",
	"ouverte",
	"ouverture",
	"non-stop",
	"continu",
	"service",
	"services",
	"proximité",
	"centre",
	"mer",
	"plage",
	"littoral",
	"accès",
	"access",
	"acces", // Variante d'orthographe
	"sécurisé",
	"sécurisée",
	"sécurite", // Variante d'orthographe
	"surveillance",
	"surveillé",
	"surveillée",
	"horaire",
	"horaires",
	"jour",
	"nuit",
	"tarif",
	"tarifs",
	"payant",
	"gratuit",
	"réservation",
	"réservations",
	"resérvation", // Variante d'orthographe
	"facilité",
	"facilités",
	"confort",
	"confortable"
];

SkyParkingOostende.favicon = <IconSearchEngine />;

SkyParkingOostende.pages = [
	{
		title: "Sky Parking Oostende",
		url: "https://www.visit-oostende.be/fr/sky-parking-oostende",
	},
];
