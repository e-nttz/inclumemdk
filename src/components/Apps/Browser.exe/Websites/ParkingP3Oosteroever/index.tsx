import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const ParkingP3Oosteroever = () => {
	return (
		<body className="bg-gray-100">
			<header className="bg-teal-600 py-6">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">Parking périphérique P3 Oosteroever</h1>
					<p className="mt-2 text-lg text-gray-200">Le parking idéal à Ostende</p>
				</div>
			</header>

			<section className="py-10">
				<div className="container mx-auto flex flex-col items-center">
					<img
						src="https://images.pexels.com/photos/2655864/pexels-photo-2655864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="Parking P3 Oosteroever"
						className="w-full max-w-md h-auto rounded-lg shadow-lg"
					/>
					<p className="mt-4 text-lg text-gray-800 text-center">
						Parking gratuit à Ostende, ouvert 24h/24 et 7j/7. Profitez d'un accès facile aux attractions locales tout en garantissant la sécurité de votre véhicule.
					</p>
					<button
						className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition duration-200"
					>
						En savoir plus
					</button>
				</div>
			</section>

			<section className="py-10 bg-white rounded-lg shadow-md">
				<div className="container mx-auto">
					<h2 className="text-3xl font-semibold text-teal-600 text-center">Informations Pratiques</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 p-4">
						<div className="bg-teal-50 p-4 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Ouvert</h3>
							<p className="mt-2 text-gray-700">7/7, 24/24</p>
						</div>
						<div className="bg-teal-50 p-4 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Adresse</h3>
							<p className="mt-2 text-gray-700">Ankerstraat</p>
						</div>
						<div className="bg-teal-50 p-4 rounded-lg shadow">
							<h3 className="text-xl font-semibold">Gratuit</h3>
							<p className="mt-2 text-gray-700">{true ? "✔️ Oui" : "❌ Non"}</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-10">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-teal-600">Pourquoi Choisir P3 Oosteroever ?</h2>
					<p className="mt-4 text-gray-800 px-4">
						Profitez d'un stationnement sécurisé avec un accès facile aux plages et aux attractions d'Ostende. 
						Évitez le stress de la recherche d'une place et laissez-nous nous occuper de votre véhicule.
					</p>
					<button
						className="mt-6 inline-block px-6 py-3 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition duration-200"
					>
						Découvrir Ostende
					</button>
				</div>
			</section>

			<footer className="bg-teal-600 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-200">
						<button
							className="underline hover:text-white"
						>
							Contactez-nous
						</button>
					</p>
					<p className="text-gray-200">
						&copy; {new Date().getFullYear()} Parking P3 Oosteroever. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default ParkingP3Oosteroever;

// used in RenderAllWebsites to select the right website
ParkingP3Oosteroever.componentName = "parkingP3Oosteroever";
// used in tab as site title
ParkingP3Oosteroever.title = "Parking P3 Oosteroever";
// used in searchEngine
ParkingP3Oosteroever.excerpt = "Parking gratuit à Ostende, ouvert 24h/24 et 7j/7.";

// Mots clés
ParkingP3Oosteroever.motsCles = [
    "parking",
    "stationnement",
    "gratuit",
    "libre",
    "ostende",
    "ostend", // Variante sans e final
    "ouvert",
    "ouverture",
    "24h",
    "h24",
    "7j",
    "jours",
    "véhicule",
    "vehicule", // Variante sans accent
    "voiture",
    "voitures",
    "auto",
    "emplacement",
    "emplacements",
    "place",
    "places",
    "confort",
    "accessibilité",
    "accessibilite", // Variante sans accent
    "pratique",
    "proche",
    "service",
    "services",
    "localisation",
    "localiser",
    "zone",
    "zones",
    "espace",
    "espaces",
    "surveillance",
    "sécurité",
    "securite", // Variante sans accent
    "public",
    "rapide",
    "facile",
    "solution",
    "solutions",
    "tarif",
    "tarifs",
    "extérieur",
    "exterieur", // Variante sans accent
    "disponible",
    "disponibilité",
    "disponibilite", // Variante sans accent
    "sécurisé",
    "securise", // Variante sans accent
    "centre",
    "ville",
    "trajet",
    "trajets",
    "gratuité",
    "gratuite" // Variante féminine
];

ParkingP3Oosteroever.favicon = <IconSearchEngine />;

ParkingP3Oosteroever.pages = [
	{
		title: "Parking P3 Oosteroever",
		url: "https://www.visit-oostende.be/fr/parking-p3-oosteroever",
	},
];
