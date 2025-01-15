import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const CuevaDeGabi = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-orange-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Cueva de Gabi</h1>
					<p className="mt-2 text-lg text-orange-200">Votre destination latino ultime à Ixelles</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<IKImage
					path={CuevaDeGabi.images[0]}
					alt="Cueva de Gabi"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						"Cueva De Gabi" - Découvrez nos spécialités latino-américaines au restaurant, savourez nos cocktails exotiques au bar, et profitez d'un séjour confortable à notre auberge. 
						Plongez dans une ambiance chaleureuse et vibrante, imprégnée de la passion de la culture latino.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-orange-600">Nos Spécialités</h2>
					<p className="mt-4 text-gray-700">Dégustez des plats authentiques :</p>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-orange-600">La Cena</h3>
							<ul className="mt-2">
								<li>Ceviche</li>
								<li>Asado</li>
								<li>Ropa Vieja</li>
							</ul>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-orange-600">La Fiesta</h3>
							<ul className="mt-2">
								<li>Pisco Sour</li>
								<li>Caipirinha</li>
								<li>Fernet</li>
							</ul>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-orange-600">La Siesta</h3>
							<p>Auberges pour un séjour relaxant</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-orange-600">Informations Pratiques</h2>
				<p className="mt-4 text-gray-700">
					Adresse : <span className="font-bold">Rue du trône, 17, 1050 Ixelles</span>
				</p>
				<p className="mt-2 text-gray-700">
					Ouverture : <span className="font-bold">Ouvert 24h/24, 7j/7</span>
				</p>
				<p className="mt-2 text-gray-700">
					Email : <button className="text-orange-600 underline">cuevadegabi@outmail.com</button>
				</p>
				<p className="mt-2 text-gray-700">
					Téléphone : <button className="text-orange-600">+32 2 19 17 91 0</button>
				</p>
			</section>

			<footer className="bg-orange-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Cueva de Gabi. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default CuevaDeGabi;

// used in RenderAllWebsites to select the right website
CuevaDeGabi.componentName = "cuevaDeGabi";
// used in tab as site title
CuevaDeGabi.title = "Cueva de Gabi à Ixelles";
// used in searchEngine
CuevaDeGabi.excerpt = "Découvrez le meilleur de la cuisine latino-américaine à Ixelles.";

// Mots clés
CuevaDeGabi.motsCles = [
    "cuisine",
    "cusine", // Variante courante de mauvaise orthographe
    "latino",
    "latina",
    "gastronomie",
    "gastrnomie", // Variante courante de mauvaise orthographe
    "amérique",
    "amerique", // Variante sans accent
    "latine",
    "restaurant",
    "resto",
    "restaurent", // Variante courante de mauvaise orthographe
    "Ixelles",
    "xl", // Variante locale pour Ixelles
    "Bruxelles",
    "Brussel", // Variante en néerlandais
    "tacos",
    "tacosx", // Variante de mauvaise orthographe
    "empanadas",
    "empanada",
    "arepas",
    "arepaz", // Variante de mauvaise orthographe
    "ceviche",
    "seviche", // Variante phonétique
    "mexicaine",
    "mexicain",
    "mexico",
    "brésilienne",
    "brésil",
    "brazil", // Variante anglaise
    "péruvienne",
    "perou",
    "colombienne",
    "colombie",
    "sud",
    "américain",
    "americaine", // Variante sans accent
    "latin",
    "food", // Variante anglaise
    "plats",
    "typique",
    "traditionnel",
    "dîner",
    "repas",
    "gourmand",
    "authentique"
];

// Site favicon icon
CuevaDeGabi.favicon = <IconSearchEngine />;

CuevaDeGabi.images = [
	"Cueva de Gabi.webp"
]

CuevaDeGabi.pages = [
	{
		title: "Cueva De Gabi",
		url: "https://www.cueva-de-gabi.be",
	},
];
