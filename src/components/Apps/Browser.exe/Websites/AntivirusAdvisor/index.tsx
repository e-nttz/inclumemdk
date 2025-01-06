import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const AntivirusAdvisor = () => {
	return (
		<body className="bg-gray-100">
			<section className="relative text-white bg-gray-900">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-60"
					style={{
						backgroundImage:
							"url('https://cdn.pixabay.com/photo/2018/09/05/07/33/hacker-3655668_1280.jpg')",
					}}
				></div>
				<div className="container relative px-6 py-16 mx-auto text-center">
					<h1 className="text-4xl font-bold lg:text-6xl">
						Comparez et choisissez le meilleur antivirus
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						AntivirusAdvisor offre des comparaisons détaillées et des avis
						impartiaux sur une variété de logiciels antivirus.
					</p>
					<button
						type="button"
						className="inline-block px-6 py-3 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
					>
						Explorez Nos Guides
					</button>
				</div>
			</section>

			<section id="guides" className="container px-6 py-16 mx-auto">
				<h2 className="text-3xl font-bold text-center text-gray-800">
					Nos Guides et Comparaisons
				</h2>
				<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://cdn.pixabay.com/photo/2018/09/21/07/07/e-commerce-3692440_1280.jpg"
							alt="Guide d’achat"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Guide d’achat</h3>
							<p className="mt-2 text-gray-600">
								Découvrez les critères essentiels pour choisir un antivirus
								qui répond à vos besoins.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
							>
								Lire le Guide
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://cdn.pixabay.com/photo/2020/05/21/15/38/pros-5201376_1280.jpg"
							alt="Comparateur d’antivirus"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Comparateur d’antivirus</h3>
							<p className="mt-2 text-gray-600">
								Comparez les antivirus en fonction de leurs fonctionnalités,
								performances et tarifs.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
							>
								Comparer
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://cdn.pixabay.com/photo/2018/01/15/03/01/criticism-3083099_1280.jpg"
							alt="Évaluations et critiques"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Évaluations et critiques</h3>
							<p className="mt-2 text-gray-600">
								Lisez des avis impartiaux sur les antivirus les plus populaires.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
							>
								Voir les Critiques
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto">
					<h2 className="text-3xl font-bold text-center text-gray-800">
						Pourquoi Choisir AntivirusAdvisor ?
					</h2>
					<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">🔍</div>
							<h3 className="text-xl font-semibold">Comparaisons Détayées</h3>
							<p className="mt-2 text-gray-600">
								Des comparatifs complets basés sur la sécurité, les options et les prix.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">📈</div>
							<h3 className="text-xl font-semibold">Avis Impariaux</h3>
							<p className="mt-2 text-gray-600">
								Nos critiques sont faites par des experts indépendants.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">💻</div>
							<h3 className="text-xl font-semibold">Guide d'Installation</h3>
							<p className="mt-2 text-gray-600">
								Suivez nos étapes pour une installation facile et rapide.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-blue-600">
				<h2 className="text-3xl font-bold">
					Prêt à Choisir le Meilleur Antivirus ?
				</h2>
				<p className="mt-4 text-lg">
					Contactez-nous pour des conseils personnalisés ou consultez notre FAQ.
				</p>
				<button
					type="button"
					className="inline-block px-6 py-3 mt-6 text-white bg-gray-900 rounded-lg hover:bg-gray-800"
				>
					Contactez-nous
				</button>
			</section>
		</body>
	);
};

export default AntivirusAdvisor;

// used in RenderAllWebsites to select the right website
AntivirusAdvisor.componentName = "antivirusAdvisor";
// used in tab as site title
AntivirusAdvisor.title = "Comparez et choisissez le meilleur antivirus | Antivirus Advisor";
// used in searchEngine
AntivirusAdvisor.excerpt = "AntivirusAdvisor offre des comparaisons détaillées et des avis impartiaux sur une variété de logiciels antivirus.";

// Mots clés
AntivirusAdvisor.motsCles = [
	"mot_cle_1",
	"antivirus",
	"mot_cle_3"
];

AntivirusAdvisor.favicon = <IconSearchEngine />;

AntivirusAdvisor.pages = [
	{
		title: "Antivirus Advisor",
		url: "https://antivirus-advisor.com/fr",
	},
];
