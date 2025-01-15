import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const MuseeArtsAnciens = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-purple-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Musée des Arts Anciens du Namurois</h1>
					<p className="mt-2 text-lg text-purple-200">Explorez le riche patrimoine culturel de Namur</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<IKImage
					path={MuseeArtsAnciens.images[0]}
					alt="Musée des Arts Anciens à Namur"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Plongez dans le passé fascinant de Namur au Musée des Arts Anciens. Découvrez une collection exceptionnelle d'œuvres d'art, d'artefacts historiques et de trésors culturels qui retracent l'évolution de la ville à travers les âges.
					</p>
					<button
						type="button"
						className="mt-4 bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-500"
					>
						Découvrir les Expositions
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-purple-600">Infos Pratiques</h2>
					<p className="mt-4 text-gray-700">Adresse : Rue de plomb 42, 5000 Namur</p>
					<p className="mt-2 text-gray-700">Horaires : du mardi au dimanche de 10h à 18h</p>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-purple-600">Contactez-Nous</h2>
				<p className="mt-4 text-gray-700">Pour toute question, n'hésitez pas à nous contacter :</p>
				<p className="mt-2 text-gray-800">Email : <button className="text-purple-600 underline">musee.arts.anciens.namur@outmail.be</button></p>
				<p className="mt-2 text-gray-800">Téléphone : <button className="text-purple-600">069 70 45 32 6</button></p>
			</section>

			<footer className="bg-purple-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Musée des Arts Anciens du Namurois. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default MuseeArtsAnciens;

// used in RenderAllWebsites to select the right website
MuseeArtsAnciens.componentName = "museeArtsAnciens";
// used in tab as site title
MuseeArtsAnciens.title = "Musée des Arts Anciens du Namurois";
// used in searchEngine
MuseeArtsAnciens.excerpt = "Découvrez le riche patrimoine culturel de Namur au Musée des Arts Anciens.";

// Mots clés
MuseeArtsAnciens.motsCles = [
    "musée",
    "musee", // Variante sans accent
    "art",
    "arts",
    "ancien",
    "anciens",
    "culture",
    "patrimoine",
    "histoire",
    "historique",
    "richesse",
    "namur",
    "ville",
    "visite",
    "visiter",
    "exposition",
    "expositions",
    "peinture",
    "sculpture",
    "moyenage",
    "moyenageux",
    "medieval",
    "architecture",
    "monuments",
    "objet",
    "objets",
    "collections",
    "œuvre", // Variante avec l'accent
    "oeuvre", // Variante sans accent
    "événements", // Variante avec accent
    "evenements", // Variante sans accent
    "événement", // Variante avec accent
    "evenement", // Variante sans accent
    "tourisme",
    "artdeco",
    "peintures",
    "sculptures"
];

// Site favicon icon
MuseeArtsAnciens.favicon = <IconSearchEngine />;

MuseeArtsAnciens.images = [
	"Musée Arts Anciens.jpeg"
]

MuseeArtsAnciens.pages = [
	{
		title: "Musée des Arts Anciens du Namurois",
		url: "https://www.musee-des-arts-anciens-du-namurois.be",
	},
];
