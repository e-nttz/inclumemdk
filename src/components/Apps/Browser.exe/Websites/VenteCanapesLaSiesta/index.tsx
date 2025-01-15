import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const VenteCanapesLaSiesta = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-green-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Vente en ligne de Canapés « La Siesta »</h1>
					<p className="mt-2 text-lg text-green-200">Le confort et le style à portée de clic</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<IKImage
					path={VenteCanapesLaSiesta.images[0]}
					alt="Canapés La Siesta"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Explorez notre boutique en ligne pour découvrir notre gamme complète de canapés de haute qualité, 
						disponibles dans une variété de styles, de couleurs et de tailles. Que vous recherchiez un canapé spacieux 
						pour toute la famille ou un modèle compact pour un espace restreint, "La Siesta" vous offre des options 
						pour créer un coin de détente parfait dans votre maison.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100 text-center">
				<h2 className="text-3xl font-semibold text-green-600">Nos Produits</h2>
				<p className="mt-4 text-gray-700">
					Découvrez notre sélection variée :
				</p>
				<ul className="mt-8 space-y-4">
					<li className="bg-white p-4 rounded-lg shadow">
						<span className="font-bold text-green-600">Canapés</span> - Confort et élégance pour votre salon.
					</li>
					<li className="bg-white p-4 rounded-lg shadow">
						<span className="font-bold text-green-600">Fauteuils</span> - Pour une touche de style et de confort.
					</li>
					<li className="bg-white p-4 rounded-lg shadow">
						<span className="font-bold text-green-600">Tables de salon</span> - Complétez votre espace avec nos tables chic.
					</li>
				</ul>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-green-600">Contactez-Nous</h2>
				<p className="mt-4 text-gray-700">Pour plus d'informations :</p>
				<p className="mt-2 text-gray-800">
					Email : <button className="text-green-600 underline">salon.lasiesta@outmail.be</button>
				</p>
				<p className="mt-2 text-gray-800">
					Téléphone : <button className="text-green-600">+32 69 56 23 85 1</button>
				</p>
			</section>

			<section className="py-16 bg-gray-100 text-center">
				<h2 className="text-3xl font-semibold text-green-600">Découvrez le Confort Ultime</h2>
				<p className="mt-4 text-gray-700">
					Parcourez notre sélection de canapés « La Siesta » en ligne pour trouver le meuble idéal pour votre espace de vie. 
					Découvrez le confort ultime avec nos designs élégants et bien conçus, parfaits pour se détendre et se relaxer chez soi.
				</p>
				<button 
					type="button" 
					className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-500"
				>
					Visitez notre Boutique
				</button>
			</section>

			<footer className="bg-green-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Canapés « La Siesta ». Tous droits réservés.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default VenteCanapesLaSiesta;

// used in RenderAllWebsites to select the right website
VenteCanapesLaSiesta.componentName = "venteCanapesLaSiesta";
// used in tab as site title
VenteCanapesLaSiesta.title = "Vente en ligne de Canapés « La Siesta »";
// used in searchEngine
VenteCanapesLaSiesta.excerpt = "Parcourez notre sélection de canapés « La Siesta » en ligne pour trouver le meuble idéal pour votre espace de vie.";

// Mots clés
VenteCanapesLaSiesta.motsCles = [
	"canapé",
	"canapés",
	"canape", // Variante d'orthographe
	"sofa",
	"sofas",
	"divan",
	"divans",
	"meuble",
	"meubles",
	"mobilier",
	"mobiliaire", // Variante d'orthographe
	"salon",
	"salons",
	"espace",
	"espaces",
	"confort",
	"confortable",
	"design",
	"style",
	"styles",
	"moderne",
	"classique",
	"élégant",
	"élégance",
	"elegance", // Variante d'orthographe
	"qualité",
	"qualite", // Variante d'orthographe
	"tendance",
	"tendances",
	"sélection",
	"selection", // Variante d'orthographe
	"en ligne",
	"ligne",
	"achat",
	"achats",
	"acheter",
	"commande",
	"commandes",
	"prix",
	"abordable",
	"discount",
	"promo",
	"promos",
	"promotion",
	"promotions",
	"livraison",
	"gratuite",
	"espace de vie",
	"maison",
	"appartement",
	"chambre",
	"séjour",
	"decoration",
	"décoration",
	"deco", // Variante abrégée
	"intérieur",
	"interieur", // Variante d'orthographe
	"tissu",
	"cuir",
	"velours",
	"modularité",
	"modularite", // Variante d'orthographe
	"angle",
	"convertible",
	"reclinable",
	"taille",
	"formes",
	"personnalisable",
	"options",
	"chaise longue",
	"fauteuil",
	"siesta",
	"la siesta"
];

// Site favicon icon
VenteCanapesLaSiesta.favicon = <IconSearchEngine />;

VenteCanapesLaSiesta.images = [
	"Canapé la Siesta.webp"
]

VenteCanapesLaSiesta.pages = [
	{
		title: "Vente Canapés 'La siesta'",
		url: "https://www.canapes-la-siesta.be",
	},
];
