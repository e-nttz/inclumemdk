import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const AntivirusDeals = () => {
	return (
		<body className="bg-gray-100">
			<section className="relative text-white bg-gray-900">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-60"
					style={{
						backgroundImage: "url('https://cdn.pixabay.com/photo/2014/02/13/07/28/security-265130_1280.jpg')",
					}}
				></div>
				<div className="container relative px-6 py-16 mx-auto text-center">
					<h1 className="text-4xl font-bold lg:text-6xl">
						Trouvez les Meilleures Offres d'Antivirus
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						AntivirusDeals vous aide à trouver des remises exclusives, des
						coupons et des promotions sur une gamme de logiciels antivirus.
					</p>
					<button
						type="button"
						className="inline-block px-6 py-3 mt-6 text-white bg-green-600 rounded-lg hover:bg-green-700"
					>
						Découvrez les Offres
					</button>
				</div>
			</section>

			<section id="offers" className="container px-6 py-16 mx-auto">
				<h2 className="text-3xl font-bold text-center text-gray-800">
					Nos Offres du Jour
				</h2>
				<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://cdn.pixabay.com/photo/2023/02/07/15/34/computer-protection-7774394_1280.jpg"
							alt="Offre du jour"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Offres du Jour</h3>
							<p className="mt-2 text-gray-600">
								Accédez aux offres les plus récentes et aux réductions en
								cours sur les antivirus.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
							>
								Explorer les Offres
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://cdn.pixabay.com/photo/2015/05/15/02/05/money-767778_1280.jpg"
							alt="Comparateur de prix"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Comparateur de Prix</h3>
							<p className="mt-2 text-gray-600">
								Comparez les prix des principaux antivirus pour obtenir le
								meilleur rapport qualité-prix.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
							>
								Comparer les Prix
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://cdn.pixabay.com/photo/2020/05/27/09/09/discount-5226409_1280.jpg"
							alt="Codes de réduction"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Codes de Réduction</h3>
							<p className="mt-2 text-gray-600">
								Utilisez des coupons et des codes promo pour économiser
								sur votre antivirus.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-green-600 rounded-lg hover:bg-green-700"
							>
								Voir les Codes
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto">
					<h2 className="text-3xl font-bold text-center text-gray-800">
						Pourquoi Choisir AntivirusDeals ?
					</h2>
					<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">💰</div>
							<h3 className="text-xl font-semibold">Économisez Plus</h3>
							<p className="mt-2 text-gray-600">
								Profitez des meilleures offres et réductions pour obtenir un
								antivirus de qualité.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">🛡️</div>
							<h3 className="text-xl font-semibold">Protection de Qualité</h3>
							<p className="mt-2 text-gray-600">
								Les logiciels antivirus les mieux notés, testés et évalués par
								nos experts.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">🔖</div>
							<h3 className="text-xl font-semibold">Codes Promo Exclusifs</h3>
							<p className="mt-2 text-gray-600">
								Des coupons et offres exclusifs pour encore plus
								d'économies.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-green-600">
				<h2 className="text-3xl font-bold">
					Prêt à Économiser sur Votre Antivirus ?
				</h2>
				<p className="mt-4 text-lg">
					Contactez-nous pour des conseils personnalisés ou explorez notre
					sélection d'offres.
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

export default AntivirusDeals;

// used in RenderAllWebsites to select the right website
AntivirusDeals.componentName = "antivirusDeals";
// used in tab as site title
AntivirusDeals.title = "Trouvez les meilleurs offres d’antivirus | AntivirusDeals";
// used in searchEngine
AntivirusDeals.excerpt = "AntivirusDeals vous aide à trouver les meilleures offres sur une gamme de logiciels antivirus.";

AntivirusDeals.favicon = <IconSearchEngine />;

AntivirusDeals.pages = [
	{
		title: "Antivirus Deals",
		url: "https://antivirus.deals.com",
	},
];
