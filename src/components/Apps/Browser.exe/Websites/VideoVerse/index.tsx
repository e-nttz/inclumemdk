import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const VideoVerse = () => {
	return (
		<body className="bg-gray-50">
			<section className="relative text-white bg-purple-600">
				<div
					className="absolute inset-0 bg-center bg-cover opacity-70"
					style={{
						backgroundImage: "url('https://images.pexels.com/photos/6266639/pexels-photo-6266639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
					}}
				></div>
				<div className="container relative px-6 py-20 mx-auto text-center">
					<h1 className="text-4xl font-bold lg:text-5xl">
						[TUTO VIDEO] Installer un Antivirus
					</h1>
					<p className="mt-4 text-lg lg:text-xl">
						Suivez notre guide vidéo pour une installation réussie.
					</p>
					<button
						type="button"
						className="inline-block px-8 py-4 mt-6 text-white bg-indigo-700 rounded-lg hover:bg-indigo-800"
					>
						Regarder le Tuto
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">Pourquoi Choisir Notre Tuto</h2>
					<p className="mt-4 text-gray-600">
						Notre vidéo vous guide à travers chaque étape pour assurer une installation
						simple et efficace.
					</p>
					<button
						type="button"
						className="inline-block px-8 py-4 mt-6 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
					>
						Démarrer le Tuto
					</button>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container px-6 mx-auto">
					<h2 className="text-3xl font-bold text-center text-gray-800">Comment Installer un Antivirus</h2>
					<div className="mt-10">
						<iframe
							className="w-full h-64"
							src="https://www.youtube.com/embed/XuBm4i26EVw?si=4avyQFf5mBO0eloQ"
							title="Video Tutorial"
							frameBorder="0"
							allowFullScreen
						></iframe>
						<p className="mt-4 text-center text-gray-600">
							Apprenez à installer votre antivirus étape par étape avec notre
							tutoriel vidéo.
						</p>
					</div>
				</div>
			</section>

			<section className="py-16 bg-gray-200">
				<div className="container px-6 mx-auto text-center">
					<h2 className="text-3xl font-bold text-gray-800">Autres Tutoriels</h2>
					<div className="grid gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/5935787/pexels-photo-5935787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Configurer un Antivirus"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Configurer votre Antivirus</h3>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
								>
									Voir le Tuto
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/5380605/pexels-photo-5380605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Mises à Jour Antivirus"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Mises à Jour de l'Antivirus</h3>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
								>
									Regarder Maintenant
								</button>
							</div>
						</div>

						<div className="overflow-hidden bg-white rounded-lg shadow-lg">
							<img
								className="object-cover w-full h-48"
								src="https://images.pexels.com/photos/19285776/pexels-photo-19285776/free-photo-of-homme-sombre-ordinateur-portable-technologie.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
								alt="Dépanner un Antivirus"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold">Dépanner votre Antivirus</h3>
								<button
									type="button"
									className="inline-block px-4 py-2 mt-4 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
								>
									Trouver des Solutions
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center text-white bg-indigo-700">
				<h2 className="text-3xl font-bold">Prêt à Protéger Votre Ordinateur ?</h2>
				<p className="mt-4 text-lg">
					Regardez notre vidéo et suivez le guide pour une protection efficace.
				</p>
				<button
					type="button"
					className="inline-block px-8 py-4 mt-6 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
				>
					Démarrer Maintenant
				</button>
			</section>
		</body>
	);
};

export default VideoVerse;

// used in RenderAllWebsites to select the right website
VideoVerse.componentName = "videoVerse";
// used in tab as site title
VideoVerse.title = "[VIDEO] TUTO Comment installer un ANTIVIRUS | VideoVerse";
// used in searchEngine
VideoVerse.excerpt = "Suivez notre guide vidéo pour une installation réussie de votre antivirus.";

// Mots clés
VideoVerse.motsCles = [
	"guide",
	"guides",
	"tutoriel",
	"tutoriels",
	"vidéo",
	"videos",
	"video", // Variante d'orthographe
	"installation",
	"installer",
	"antivirus",
	"anti-virus", // Variante orthographique
	"protection",
	"sécurité",
	"securite", // Variante d'orthographe
	"logiciel",
	"logiciels",
	"outil",
	"outils",
	"cybersécurité",
	"cybersecurite", // Variante d'orthographe
	"ordinateur",
	"ordinateurs",
	"pc",
	"mac",
	"configurer",
	"configuration",
	"paramètres",
	"parametres", // Variante d'orthographe
	"télécharger",
	"telecharger", // Variante d'orthographe
	"activation",
	"activer",
	"internet",
	"problème",
	"problèmes",
	"problemes", // Variante d'orthographe
	"résolution",
	"resolutions", // Variante d'orthographe
	"facile",
	"rapide",
	"efficace",
	"assistance",
	"support",
	"aide",
	"protéger",
	"sécuriser",
	"paramétrage"
];

VideoVerse.favicon = <IconSearchEngine />;

VideoVerse.pages = [
	{
		title: "VideoVerse Tutoriel",
		url: "https://videoverse.com/tuto-installer-antivirus",
	},
];
