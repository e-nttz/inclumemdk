import { IKContext, IKImage } from "imagekitio-react";
import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const ParkingChurchill = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-red-600 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">Parking Churchill</h1>
					<p className="mt-2 text-lg text-gray-200">
						Stationnement à Ostende, ouvert 24h/24 et 7j/7
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<IKImage
					path={ParkingChurchill.images[0]}
					alt="Parking Churchill"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800">
						Profitez du parking Churchill, idéalement situé à Ostende, avec 400 places disponibles. Que vous soyez en vacances, en affaires, ou simplement de passage, notre parking vous offre une solution de stationnement pratique et sécurisée.
					</p>
					<button
						type="button"
						className="mt-4 inline-block px-8 py-3 text-red-600 bg-white rounded-lg shadow hover:bg-gray-100"
					>
						Plus d'informations
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-red-600">Détails du Parking</h2>
					<p className="mt-4 text-gray-700">Voici les informations importantes concernant le parking :</p>
					<ul className="mt-6 space-y-2 text-left">
						<li className="text-gray-800"><strong>Ouvert :</strong> 7/7, 24/24</li>
						<li className="text-gray-800"><strong>Adresse :</strong> Natiënkaai 7, 8400 Oostende</li>
						<li className="text-gray-800"><strong>Gratuit :</strong> Non</li>
						<li className="text-gray-800"><strong>Nombre de places :</strong> 400</li>
						<li className="text-gray-800"><strong>Tarif :</strong> €1,50/heure</li>
						<li className="text-gray-800"><strong>Modes de paiement :</strong> Espèces, cartes de crédit et mobile</li>
					</ul>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-red-600">Avantages du Parking Churchill</h2>
					<p className="mt-4 text-gray-700">Pourquoi choisir Parking Churchill ?</p>
					<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="overflow-hidden bg-gray-200 rounded-lg shadow-lg p-4">
							<h3 className="text-xl font-semibold">Accessibilité</h3>
							<p className="mt-2 text-gray-600">Proche des transports en commun, facilitant vos déplacements.</p>
						</div>
						<div className="overflow-hidden bg-gray-200 rounded-lg shadow-lg p-4">
							<h3 className="text-xl font-semibold">Sécurité</h3>
							<p className="mt-2 text-gray-600">Surveillance vidéo 24h/24 pour votre tranquillité d'esprit.</p>
						</div>
						<div className="overflow-hidden bg-gray-200 rounded-lg shadow-lg p-4">
							<h3 className="text-xl font-semibold">Proximité</h3>
							<p className="mt-2 text-gray-600">À distance de marche des principales attractions d'Ostende.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-red-600">
				<h2 className="text-3xl font-bold text-white">Contactez-Nous</h2>
				<p className="mt-4 text-lg text-white">
					Avez-vous des questions ? N'hésitez pas à nous contacter !
				</p>
				<p className="mt-2 text-white">
					Email: <span className="underline">contact@visit-oostende.com</span>
				</p>
				<p className="text-white">
					Téléphone: <span className="underline">+32 49 15 39 45 6</span>
				</p>
			</section>

			<footer className="bg-red-600 py-6">
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
		</IKContext>
	);
};

export default ParkingChurchill;

// used in RenderAllWebsites to select the right website
ParkingChurchill.componentName = "parkingChurchill";
// used in tab as site title
ParkingChurchill.title = "Parking Churchill | Visit Oostende";
// used in searchEngine
ParkingChurchill.excerpt = "Parking à Ostende, ouvert 24h/24 et 7j/7 avec 400 places.";

// Mots clés
ParkingChurchill.motsCles = [
    "parking",
    "stationnement",
    "ostende",
    "ostend", // Variante sans e final
    "place",
    "places",
    "emplacement",
    "emplacements",
    "voiture",
    "voitures",
    "véhicule",
    "vehicule", // Variante sans accent
    "auto",
    "ouvert",
    "ouverture",
    "24h",
    "7j",
    "h24",
    "jours",
    "joursouvert",
    "sécurité",
    "securite", // Variante sans accent
    "surveillance",
    "public",
    "privé",
    "prive", // Variante sans accent
    "centre",
    "ville",
    "proche",
    "confort",
    "accessibilité",
    "accessibilite", // Variante sans accent
    "rapide",
    "facile",
    "solution",
    "solutions",
    "service",
    "services",
    "localisation",
    "localiser",
    "recherche",
    "trouver",
    "tarif",
    "tarifs",
    "abonnement",
    "abonnements",
    "espace",
    "espaces",
    "zone",
    "zones",
    "garage",
    "sur",
    "soussol",
    "extérieur",
    "exterieur", // Variante sans accent
    "confortable",
    "disponible",
    "disponibilité",
    "disponibilite", // Variante sans accent
    "sécurisé",
    "securise", // Variante sans accent
];

ParkingChurchill.favicon = <IconSearchEngine />;

ParkingChurchill.images = [
	"Parking Churchill.jpeg"
]

ParkingChurchill.pages = [
	{
		title: "Parking Churchill",
		url: "https://www.visit-oostende.be/parking-churchill",
	},
];
