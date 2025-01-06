import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const ParcoursStreetArt = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-blue-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Parcours Street Art dans Namur</h1>
					<p className="mt-2 text-lg text-blue-200">Découvrez la créativité urbaine de Namur</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/162379/lost-places-pforphoto-leave-factory-162379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Parcours Street Art à Namur"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Explorez Namur à travers notre parcours street art unique. Découvrez des œuvres d'art urbain colorées et captivantes réalisées par des artistes locaux et internationaux. Notre application mobile vous guide avec des informations détaillées sur chaque œuvre. Téléchargez dès maintenant pour une expérience immersive !
					</p>
					<button
						type="button"
						className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-500"
					>
						Télécharger l'Application
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-600">Parcours Disponibles</h2>
					<p className="mt-4 text-gray-700">
						Choisissez votre manière de découvrir le street art à Namur :
					</p>
					<ul className="mt-8 space-y-4">
						<li className="bg-white p-4 rounded-lg shadow">
							<button 
								type="button" 
								className="font-bold text-blue-600 hover:underline"
							>
								Parcours avec Visite Guidée
							</button>
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<button 
								type="button" 
								className="font-bold text-blue-600 hover:underline"
							>
								Parcours sans Guide
							</button>
						</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-blue-600">Contactez-Nous</h2>
				<p className="mt-4 text-gray-700">Pour plus d'informations :</p>
				<p className="mt-2 text-gray-800">Email : <button className="text-blue-600 underline">namur.streetart@outmail.com</button></p>
				<p className="mt-2 text-gray-800">Téléphone : <button className="text-blue-600">+32 453 86 24 56 3</button></p>
			</section>

			<footer className="bg-blue-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Parcours Street Art Namur. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default ParcoursStreetArt;

// used in RenderAllWebsites to select the right website
ParcoursStreetArt.componentName = "parcoursStreetArt";
// used in tab as site title
ParcoursStreetArt.title = "Parcours Street Art dans Namur";
// used in searchEngine
ParcoursStreetArt.excerpt = "Explorez l'art urbain dans la capitale wallonne.";

// Mots clés
ParcoursStreetArt.motsCles = [
    "explorer",
    "exploration",
    "art",
    "urbain",
    "urbains",
    "ville",
    "capitale",
    "wallonie",
    "wallonne",
    "culture",
    "culturelle",
    "graffiti",
    "graffitis",
    "streetart",
    "peinture",
    "peintures",
    "mural",
    "murale",
    "murales",
    "artiste",
    "artistes",
    "création",
    "creation", // Variante sans accent
    "dessin",
    "dessins",
    "mouvement",
    "contemporain",
    "contemporains",
    "exposition",
    "expositions",
    "galerie",
    "galeries",
    "histoire",
    "historique",
    "rue",
    "rues",
    "quartier",
    "quartiers",
    "visite",
    "visiter",
    "parcours",
    "circuit",
    "circuits",
    "tourisme",
    "touriste",
    "créatif",
    "creative", // Variante en anglais
    "scène",
    "scene", // Variante sans accent
    "performance",
    "performances",
    "mur",
    "murs",
    "pochoir",
    "pochoirs",
    "tags",
    "expression",
    "expressions",
    "métropole",
    "metropole", // Variante sans accent
    "urbanisme",
    "région",
    "region" // Variante sans accent
];

// Site favicon icon
ParcoursStreetArt.favicon = <IconSearchEngine />;

ParcoursStreetArt.pages = [
	{
		title: "Parcours Street Art dans Namur",
		url: "https://www.parcours-street-arts-namur.be",
	},
];
