import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const CyberSafeAcademy = () => {
	return (
		<body className="bg-gray-100">
			<section className="relative text-white bg-purple-700">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-60"
					style={{
						backgroundImage: "url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}
				></div>
				<div className="container relative px-6 py-16 mx-auto text-center">
					<h1 className="text-5xl font-bold lg:text-7xl">
						CyberSafe Academy
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Cours en ligne gratuits sur la sécurité informatique.
					</p>
					<button
						type="button"
						className="inline-block px-8 py-4 mt-6 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
					>
						Démarrez Maintenant
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-200">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">
						Nos Programmes de Formation
					</h2>
					<div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Module de Formation"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Module de Base</h3>
								<p className="mt-2 text-gray-600">
									Comprendre les fondamentaux de la cybersécurité.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-purple-700 rounded-lg hover:bg-purple-800"
								>
									Découvrir le Module
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/4709289/pexels-photo-4709289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Cours Intermédiaire"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Cours Intermédiaire</h3>
								<p className="mt-2 text-gray-600">
									Approfondissez vos connaissances en matière de protection.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-purple-700 rounded-lg hover:bg-purple-800"
								>
									Commencer le Cours
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Formation Avancée"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Formation Avancée</h3>
								<p className="mt-2 text-gray-600">
									Maîtrisez les techniques avancées de cybersécurité.
								</p>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-purple-700 rounded-lg hover:bg-purple-800"
								>
									Rejoindre la Formation
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto">
					<h2 className="text-3xl font-bold text-center text-gray-800">
						Pourquoi Choisir CyberSafe Academy ?
					</h2>
					<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">🎓</div>
							<h3 className="text-xl font-semibold">Certifications Officielles</h3>
							<p className="mt-2 text-gray-600">
								Obtenez des certifications reconnues dans le secteur.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">📹</div>
							<h3 className="text-xl font-semibold">Accès à des Vidéos</h3>
							<p className="mt-2 text-gray-600">
								Accédez à des tutoriels vidéo pour faciliter l'apprentissage.
							</p>
						</div>

						<div className="p-6 text-center bg-white rounded-lg shadow-lg">
							<div className="mb-4 text-4xl">💬</div>
							<h3 className="text-xl font-semibold">Communauté Active</h3>
							<p className="mt-2 text-gray-600">
								Participez à des discussions et échangez des idées.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-orange-500">
				<h2 className="text-3xl font-bold">
					Prêt à Améliorer Votre Sécurité en Ligne ?
				</h2>
				<p className="mt-4 text-lg">
					Inscrivez-vous maintenant pour commencer votre apprentissage !
				</p>
				<button
					type="button"
					className="inline-block px-8 py-4 mt-6 text-white bg-purple-700 rounded-lg hover:bg-purple-800"
				>
					Commencer
				</button>
			</section>
		</body>
	);
};

export default CyberSafeAcademy;

// used in RenderAllWebsites to select the right website
CyberSafeAcademy.componentName = "cyberSafeAcademy";
// used in tab as site title
CyberSafeAcademy.title = "CyberSafe Academy | Cours en ligne gratuits sur l’utilisation des antivirus";
// used in searchEngine
CyberSafeAcademy.excerpt = "CyberSafe Academy propose des cours en ligne gratuits pour vous apprendre à utiliser efficacement les logiciels antivirus.";

// Mots clés
CyberSafeAcademy.motsCles = [
	"mot_cle_1",
	"mot_cle_2",
	"mot_cle_3"
];

CyberSafeAcademy.favicon = <IconSearchEngine />;

CyberSafeAcademy.pages = [
	{
		title: "CyberSafe Academy",
		url: "https://www.cybersafe-academy.com/fr",
	},
];
