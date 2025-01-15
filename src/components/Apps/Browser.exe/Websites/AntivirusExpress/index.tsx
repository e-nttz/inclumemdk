import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const AntivirusExpress = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-100">
			<section className="relative text-white bg-purple-800">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-60"
					style={{
						backgroundImage: `url("https://ik.imagekit.io/0jngziwft/inclume/photos_sites/${AntivirusExpress.images[0]}")`,
					}}
				></div>
				<div className="container relative px-6 py-16 mx-auto text-center">
					<h1 className="text-4xl font-bold lg:text-6xl">
						Les Meilleures Offres Antivirus
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Antivirus Express vous aide à économiser avec des remises exclusives
						sur les logiciels antivirus de premier choix.
					</p>
					<button
						type="button"
						className="inline-block px-6 py-3 mt-6 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
					>
						Explorer les Offres
					</button>
				</div>
			</section>

			<section id="special-offers" className="container px-6 py-16 mx-auto">
				<h2 className="text-3xl font-bold text-center text-gray-800">
					Nos Offres Spéciales
				</h2>
				<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<IKImage
							className="object-cover w-full h-48"
							path={AntivirusExpress.images[1]}
							alt="Comparateur d’antivirus"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Comparateur d’Antivirus</h3>
							<p className="mt-2 text-gray-600">
								Comparez les meilleurs antivirus en fonction de la sécurité,
								des fonctionnalités et des prix.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
							>
								Comparer Maintenant
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<IKImage
							className="object-cover w-full h-48"
							path={AntivirusExpress.images[2]}
							alt="Offres spéciales"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Offres Spéciales</h3>
							<p className="mt-2 text-gray-600">
								Découvrez des réductions exclusives pour économiser sur les
								logiciels antivirus.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
							>
								Explorer les Offres
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<IKImage
							className="object-cover w-full h-48"
							path={AntivirusExpress.images[3]}
							alt="Critiques et évaluations"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Critiques et Évaluations</h3>
							<p className="mt-2 text-gray-600">
								Consultez les avis impartiaux et évaluations des experts pour
								choisir l’antivirus parfait.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
							>
								Lire les Avis
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto">
					<h2 className="text-3xl font-bold text-center text-gray-800">
						Pourquoi Choisir Antivirus Express ?
					</h2>
					<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">💼</div>
							<h3 className="text-xl font-semibold">Offres et Remises</h3>
							<p className="mt-2 text-gray-600">
								Des économies sur les meilleurs antivirus pour tous les
								besoins.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">📝</div>
							<h3 className="text-xl font-semibold">Critiques de Confiance</h3>
							<p className="mt-2 text-gray-600">
								Avis impartiaux et évaluations de produits pour une
								protection fiable.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">🔒</div>
							<h3 className="text-xl font-semibold">Protection Sécurisée</h3>
							<p className="mt-2 text-gray-600">
								Antivirus de qualité supérieure pour assurer la sécurité de
								votre appareil.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-orange-500">
				<h2 className="text-3xl font-bold">
					Prêt à Économiser sur Votre Antivirus ?
				</h2>
				<p className="mt-4 text-lg">
					Contactez-nous dès aujourd'hui pour obtenir des offres exclusives et
					commencer à protéger vos appareils.
				</p>
				<button
					type="button"
					className="inline-block px-6 py-3 mt-6 text-white bg-purple-800 rounded-lg hover:bg-purple-700"
				>
					Contactez-nous
				</button>
			</section>
		</body>
		</IKContext>
	);
};

export default AntivirusExpress;

// used in RenderAllWebsites to select the right website
AntivirusExpress.componentName = "antivirusExpress";
// used in tab as site title
AntivirusExpress.title = "Les meilleurs offres sur les logiciels antivirus | Antivirus Express";
// used in searchEngine
AntivirusExpress.excerpt = "Antivirus Express vous aide à trouver les meilleurs offres sur une gamme de logiciels antivirus.";

// Mots clés
AntivirusExpress.motsCles = [
	"antivirus",
	"anti-virus", // Variante orthographique
	"express",
	"offres",
	"promo",
	"promos",
	"promotion",
	"promotions",
	"réduction",
	"reduction", // Variante orthographique
	"plan",
	"plans",
	"économie",
	"economie", // Variante orthographique
	"discount",
	"rabais",
	"logiciel",
	"logiciels",
	"économique",
	"meilleure",
	"meilleures",
	"solution",
	"solutions",
	"protection",
	"sécurité",
	"securite", // Variante orthographique
	"cybersécurité",
	"cybersecurite", // Variante orthographique
	"ordinateur",
	"ordinateurs",
	"pc",
	"mac",
	"windows",
	"linux",
	"ligne",
	"meilleur",
	"comparatif",
	"évaluation",
	"achat",
	"acheter",
	"licence",
	"clé",
	"mise",
	"jour",
	"abonnement",
	"annuel",
	"mensuel",
	"sécuriser",
	"securiser", // Variante orthographique
	"menaces",
	"internet",
	"cyberprotection",
	"prix",
	"réduit",
	"reduit", // Variante orthographique
	"économies",
	"codes",
	"promotionnel",
	"offre",
	"offres",
	"essai",
	"gratuit",
	"solution",
	"solutions",
	"rapide",
	"installation",
	"protection",
	"immédiate"
];

AntivirusExpress.favicon = <IconSearchEngine />;

AntivirusExpress.images = [
	"Antivirus Express 1.webp",
	"Antivirus Express 2.jpg",
	"Antivirus Express 3.jpeg",
	"Antivirus Express 4.webp"
]

AntivirusExpress.pages = [
	{
		title: "Antivirus Express",
		url: "https://antivirus-express.be/fr",
	},
];
