import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const MuseeFelicienRops = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-purple-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Musée Félicien Rops de Namur</h1>
					<p className="mt-2 text-lg text-purple-200">Découvrez l'art et la vie de Félicien Rops</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Musée Félicien Rops"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Venez découvrir l’œuvre et la vie de Félicien Rops, dans un ancien hôtel de maître du Vieux Namur. Un peintre et graveur belge au cœur d’une période marquée par le progrès industriel et l’évolution des mœurs.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-purple-600">Informations Pratiques</h2>
					<p className="mt-4 text-gray-700">
						Adresse : <span className="font-bold">21, Rue Fubon, 5000 Namur</span>
					</p>
					<p className="mt-2 text-gray-700">
						Horaires : <span className="font-bold">du mardi au dimanche, de 10h à 18h</span>
					</p>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-purple-600">Contactez-Nous</h2>
				<p className="mt-4 text-gray-700">Pour plus d'informations :</p>
				<p className="mt-2 text-gray-800">Email : <button className="text-purple-600 underline">musée.félicien.rops@outmail.be</button></p>
				<p className="mt-2 text-gray-800">Téléphone : <button className="text-purple-600">069 53 12 91 2</button></p>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-purple-600">À Propos de Félicien Rops</h2>
					<p className="mt-4 text-gray-700 max-w-3xl mx-auto">
						Félicien Rops (1833-1898) était un artiste belge connu pour ses œuvres audacieuses et provocatrices. 
						Évoluant à la croisée de l'art symboliste et du réalisme, il a laissé une empreinte indélébile sur le monde de l'art. 
						Le musée présente une vaste collection de ses gravures, dessins, et peintures, ainsi que des objets personnels 
						révélant sa vie et son époque.
					</p>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-purple-600">Événements et Expositions</h2>
				<p className="mt-4 text-gray-700">
					Le musée organise régulièrement des expositions temporaires et des événements pour mettre en avant 
					l'œuvre de Félicien Rops et d'autres artistes contemporains. Restez à l'affût de notre agenda 
					pour ne rien manquer !
				</p>
				<button 
					type="button" 
					className="mt-4 bg-purple-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-purple-500"
				>
					Consulter l'Agenda
				</button>
			</section>

			<footer className="bg-purple-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Musée Félicien Rops de Namur. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default MuseeFelicienRops;

// used in RenderAllWebsites to select the right website
MuseeFelicienRops.componentName = "museeFelicienRops";
// used in tab as site title
MuseeFelicienRops.title = "Musée Félicien Rops de Namur";
// used in searchEngine
MuseeFelicienRops.excerpt = "Découvrez l'œuvre et la vie de Félicien Rops dans un cadre historique.";

// Mots clés
MuseeFelicienRops.motsCles = [
    "œuvre",
    "oeuvre", // Variante sans accent
    "art",
    "arts",
    "peinture",
    "peintures",
    "dessin",
    "dessins",
    "sculpture",
    "sculptures",
    "création",
    "creation", // Variante sans accent
    "créatif",
    "artiste",
    "artistes",
    "félicien",
    "rops",
    "vie",
    "biographie",
    "histoire",
    "historique",
    "cadre",
    "musée",
    "musee", // Variante sans accent
    "exposition",
    "expositions",
    "classique",
    "romantique",
    "symbolisme",
    "mouvement",
    "culture",
    "patrimoine",
    "monument",
    "monuments",
    "visite",
    "visiter",
    "tourisme",
    "site",
    "collection",
    "collections",
    "peintre",
    "peintres",
    "portrait",
    "portraits",
];

// Site favicon icon
MuseeFelicienRops.favicon = <IconSearchEngine />;

MuseeFelicienRops.pages = [
	{
		title: "Musée Félicien Rops de Namur",
		url: "https://www.musee-felicien-rops.be",
	},
];
