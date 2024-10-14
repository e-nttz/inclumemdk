import IconSearchEngine from "@/assets/icons/google-favicon-example.svg?react";

const CarDealer = () => {
	return (
		<body className="bg-gray-100">
			<section className="relative text-white bg-gray-900">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-60"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1530675706010-bc677ce30ab6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
					}}
				></div>
				<div className="container relative px-6 py-16 mx-auto text-center">
					<h1 className="text-4xl font-bold lg:text-6xl">
						Trouvez Votre Voiture Idéale
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Le plus grand choix de véhicules neufs et d'occasion à des
						prix imbattables.
					</p>
					<button
						type="button"
						className="inline-block px-6 py-3 mt-6 text-white bg-red-600 rounded-lg hover:bg-red-700"
					>
						Explorez Nos Offres
					</button>
				</div>
			</section>

			<section id="vehicles" className="container px-6 py-16 mx-auto">
				<h2 className="text-3xl font-bold text-center text-gray-800">
					Nos Véhicules en Vedette
				</h2>
				<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://images.unsplash.com/photo-1490902931801-d6f80ca94fe4?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Tesla Model S"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Tesla Model S</h3>
							<p className="text-lg text-red-600">€89,999</p>
							<p className="mt-2 text-gray-600">
								Voiture électrique premium avec une autonomie
								exceptionnelle.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
							>
								Voir le Détail
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="BMW X5"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">BMW X5</h3>
							<p className="text-lg text-red-600">€55,000</p>
							<p className="mt-2 text-gray-600">
								SUV luxueux offrant un confort optimal et des
								performances impressionnantes.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
							>
								Voir le Détail
							</button>
						</div>
					</div>

					<div className="overflow-hidden bg-white rounded-lg shadow-lg">
						<img
							className="object-cover w-full h-48"
							src="https://images.unsplash.com/photo-1486326658981-ed68abe5868e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							alt="Audi A3"
						/>
						<div className="p-6">
							<h3 className="text-xl font-semibold">Audi A3</h3>
							<p className="text-lg text-red-600">€25,000</p>
							<p className="mt-2 text-gray-600">
								Compacte élégante, idéale pour les trajets urbains.
							</p>
							<button
								type="button"
								className="inline-block px-4 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
							>
								Voir le Détail
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto">
					<h2 className="text-3xl font-bold text-center text-gray-800">
						Pourquoi Nous Choisir
					</h2>
					<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">🚗</div>
							<h3 className="text-xl font-semibold">Large Sélection</h3>
							<p className="mt-2 text-gray-600">
								Des centaines de véhicules disponibles immédiatement.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">⚙️</div>
							<h3 className="text-xl font-semibold">
								Entretien Garantie
							</h3>
							<p className="mt-2 text-gray-600">
								Assistance technique complète pour tous nos véhicules.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">💰</div>
							<h3 className="text-xl font-semibold">Prix Compétitifs</h3>
							<p className="mt-2 text-gray-600">
								Des offres exclusives et des tarifs avantageux.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-red-600">
				<h2 className="text-3xl font-bold">
					Prêt à Trouver Votre Voiture Parfaite ?
				</h2>
				<p className="mt-4 text-lg">
					Contactez-nous dès aujourd'hui pour un essai ou une estimation
					gratuite.
				</p>
				<button
					type="button"
					className="inline-block px-6 py-3 mt-6 text-white bg-gray-900 rounded-lg hover:bg-gray-800"
				>
					Réservez un Essai
				</button>
			</section>
		</body>
	);
};

export default CarDealer;

// used in RenderAllWebsites to select the right website
CarDealer.componentName = "carDealer";
// used in tab as site title
CarDealer.title = "Concesionnaire automobile";

CarDealer.favicon = <IconSearchEngine />;

CarDealer.pages = [
	{
		title: "Concessionnaire Automobile",
		url: "https://concession-exemple.com",
	},
];
