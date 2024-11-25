import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const SecureTech = () => {
	return (
		<body className="bg-gray-100">
			<section className="relative text-white bg-orange-600">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-70"
					style={{
						backgroundImage: "url('https://images.pexels.com/photos/5380669/pexels-photo-5380669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}
				></div>
				<div className="container relative px-6 py-20 mx-auto text-center">
					<h1 className="text-5xl font-bold lg:text-6xl">
						Guide Pratique pour Protéger Votre Ordinateur
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Découvrez les meilleures pratiques pour sécuriser votre
						système.
					</p>
					<button
						type="button"
						className="inline-block px-8 py-4 mt-6 text-white bg-blue-700 rounded-lg hover:bg-blue-800"
					>
						Démarrez Ici
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-200">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">Nos Tutoriels</h2>
					<div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Choisir un Antivirus"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Choisir son Antivirus</h3>
								<p className="mt-2 text-gray-600">
									Les critères pour sélectionner le meilleur antivirus.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
								>
									Voir le Guide
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/196650/pexels-photo-196650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Configurer Antivirus"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Configurer les Paramètres</h3>
								<p className="mt-2 text-gray-600">
									Astuces pour configurer efficacement votre antivirus.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
								>
									Configurer Maintenant
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/5935788/pexels-photo-5935788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Détection d'Infections"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Détecter des Infections</h3>
								<p className="mt-2 text-gray-600">
									Comment identifier les menaces potentielles sur votre PC.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
								>
									Commencer
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">À Propos de Secure Tech</h2>
					<p className="mt-4 text-gray-600">
						Secure Tech fournit des ressources et des tutoriels pour vous
						aider à protéger votre ordinateur contre les menaces en ligne.
						Apprenez à naviguer en toute sécurité sur Internet.
					</p>
					<button
						type="button"
						className="inline-block px-8 py-4 mt-6 text-white bg-blue-700 rounded-lg hover:bg-blue-800"
					>
						En Savoir Plus
					</button>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-blue-700">
				<h2 className="text-3xl font-bold">
					Prêt à Sécuriser Votre Système ?
				</h2>
				<p className="mt-4 text-lg">
					Rejoignez-nous pour des conseils pratiques et des ressources utiles.
				</p>
				<button
					type="button"
					className="inline-block px-8 py-4 mt-6 text-white bg-orange-600 rounded-lg hover:bg-orange-700"
				>
					Démarrer
				</button>
			</section>
		</body>
	);
};

export default SecureTech;

// used in RenderAllWebsites to select the right website
SecureTech.componentName = "secureTech";
// used in tab as site title
SecureTech.title = "Guides pratiques pour protéger votre ordinateur | Secure Tech";
// used in searchEngine
SecureTech.excerpt = "Secure Tech propose des tutoriels antivirus détaillés pour vous aider à sécuriser votre ordinateur contre les menaces en ligne.";

SecureTech.favicon = <IconSearchEngine />;

SecureTech.pages = [
	{
		title: "Secure Tech",
		url: "https://www.securetech.com",
	},
];
