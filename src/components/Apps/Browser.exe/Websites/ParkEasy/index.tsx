import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const ParkEasy = () => {
	return (
		<body className="bg-white">
			<section className="relative text-gray-800 bg-blue-500">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-50"
					style={{
						backgroundImage: `url("https://ik.imagekit.io/0jngziwft/inclume/photos_sites/${ParkEasy.images[0]}")`,
					}}
				></div>
				<div className="container relative px-6 py-20 mx-auto text-center">
					<h1 className="text-4xl font-bold lg:text-5xl text-white">
						ParkEasy
					</h1>
					<p className="mt-4 text-lg lg:text-xl text-white">
						Trouvez le stationnement idéal où que vous alliez
					</p>
					<button
						type="button"
						className="inline-block px-8 py-3 mt-6 text-blue-600 bg-white rounded-lg hover:bg-gray-100"
					>
						Démarrer la recherche
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">Nos Services</h2>
					<p className="mt-4 text-gray-600">
						Une solution simple et rapide pour trouver un stationnement.
					</p>
				</div>
				<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4">
					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<IKImage
							className="object-cover w-full h-48"
							path={ParkEasy.images[1]}
							alt="Recherche"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Recherche</h3>
							<p className="mt-2 text-gray-600">
								Trouver rapidement une place de parking près de chez vous.
							</p>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<IKImage
							className="object-cover w-full h-48"
							path={ParkEasy.images[2]}
							alt="Réservation"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Réservation</h3>
							<p className="mt-2 text-gray-600">
								Réservez votre stationnement à l'avance pour plus de tranquillité.
							</p>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<IKImage
							className="object-cover w-full h-48"
							path={ParkEasy.images[3]}
							alt="Temps réel"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Temps réel</h3>
							<p className="mt-2 text-gray-600">
								Vérifiez la disponibilité des places en temps réel.
							</p>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<IKImage
							className="object-cover w-full h-48"
							path={ParkEasy.images[4]}
							alt="Tarifs"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Tarifs</h3>
							<p className="mt-2 text-gray-600">
								Consultez les tarifs pour chaque emplacement en toute transparence.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-blue-600">
				<h2 className="text-3xl font-bold text-white">
					Contactez-Nous
				</h2>
				<p className="mt-4 text-lg text-white">
					Avez-vous des questions ? N'hésitez pas à nous contacter !
				</p>
				<p className="mt-2 text-white">
					Email: <span className="underline">parkeasy@outmail.be</span>
				</p>
				<p className="text-white">
					Téléphone: <span className="underline">+32 49 15 39 45 6</span>
				</p>
			</section>
		</body>
	);
};

export default ParkEasy;

// used in RenderAllWebsites to select the right website
ParkEasy.componentName = "parkEasy";
// used in tab as site title
ParkEasy.title = "Trouvez le stationnement idéal où que vous alliez | ParkEasy";
// used in searchEngine
ParkEasy.excerpt = "Utilisez ParkEasy pour réserver votre stationnement facilement.";

// Mots clés
ParkEasy.motsCles = [
    "parking",
    "stationnement",
    "réserver",
    "reserver", // Variante sans accent
    "réservation",
    "reservation", // Variante sans accent
    "facile",
    "facilité",
    "faciliter",
    "pratique",
    "stationner",
    "voiture",
    "véhicule",
    "vehicule", // Variante sans accent
    "auto",
    "emplacement",
    "place",
    "garer",
    "garage",
    "parc",
    "parcs",
    "park",
    "zone",
    "zones",
    "espace",
    "espaces",
    "mobilité",
    "mobilite", // Variante sans accent
    "confort",
    "sécurité",
    "securite", // Variante sans accent
    "navigation",
    "trajet",
    "trajets",
    "destinations",
    "destination",
    "application",
    "appli",
    "applis",
    "service",
    "services",
    "localisation",
    "localiser",
    "position",
    "positions",
    "recherche",
    "trouver",
    "trouve",
    "économie",
    "economie", // Variante sans accent
    "temps",
    "efficacité",
    "efficacite", // Variante sans accent
    "simple",
    "rapide",
    "solution",
    "solutions",
    "tarif",
    "tarifs",
    "abonnement",
    "abonnements",
    "public",
    "privé",
    "prive", // Variante sans accent
    "voitures",
    "bénéfice",
    "benefice" // Variante sans accent
];

ParkEasy.favicon = <IconSearchEngine />;

ParkEasy.images = [
	"Park Easy 1.webp",
	"Park Easy 2.jpeg",
	"Park Easy 3.jpeg",
	"Park Easy 4.jpeg",
	"Park Easy 5.jpeg",
]

ParkEasy.pages = [
	{
		title: "ParkEasy Accueil",
		url: "https://www.parkeasy.be/fr",
	},
];
