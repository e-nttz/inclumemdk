import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";

const LaSiestaHotel = () => {
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-blue-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">La Siesta Hotel</h1>
					<p className="mt-2 text-lg text-blue-200">Votre oasis de détente à Oostende</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<IKImage
					path={LaSiestaHotel.images[0]}
					alt="La Siesta Hotel"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Notre hôtel propose des chambres élégantes et bien aménagées, idéales pour se ressourcer après une journée de découverte de la ville ou de farniente sur la plage. 
						Détendez-vous dans notre salon confortable ou sur notre terrasse ensoleillée, et profitez de notre service attentionné pour rendre votre séjour inoubliable.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-600">Informations Pratiques</h2>
					<p className="mt-4 text-gray-700">Pour un séjour sans souci, voici les détails importants :</p>
					<p className="mt-2 text-gray-700">
						Email : <button className="text-blue-600 underline">lasiestahotel@outmail.com</button>
					</p>
					<p className="mt-2 text-gray-700">
						Téléphone : <button className="text-blue-600">+32 69 40 34 90 5</button>
					</p>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-blue-600">Nos Services</h2>
				<p className="mt-4 text-gray-700">Profitez de nos services pour un séjour agréable :</p>
				<ul className="mt-8 space-y-4">
					<li className="bg-gray-100 p-4 rounded-lg shadow">
						<span className="font-bold text-blue-600">Chambres Élégantes</span> - Chambres modernes avec toutes les commodités.
					</li>
					<li className="bg-gray-100 p-4 rounded-lg shadow">
						<span className="font-bold text-blue-600">Terrasse ensoleillée</span> - Détente au grand air.
					</li>
					<li className="bg-gray-100 p-4 rounded-lg shadow">
						<span className="font-bold text-blue-600">Service Attentionné</span> - Notre équipe est là pour vous aider à chaque étape.
					</li>
				</ul>
			</section>

			<section className="py-16 text-center bg-gray-100">
				<h2 className="text-3xl font-semibold text-blue-600">Réservez Votre Séjour</h2>
				<p className="mt-4 text-gray-700">
					Réservez votre séjour à l'hôtel "La Siesta" pour une expérience de détente ultime. Profitez du confort de nos chambres modernes et de notre emplacement idéal à quelques pas de la plage.
				</p>
				<button 
					type="button" 
					className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-500"
				>
					Réservez Maintenant
				</button>
			</section>

			<footer className="bg-blue-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} La Siesta Hotel. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default LaSiestaHotel;

// used in RenderAllWebsites to select the right website
LaSiestaHotel.componentName = "laSiestaHotel";
// used in tab as site title
LaSiestaHotel.title = "La Siesta Hotel";
// used in searchEngine
LaSiestaHotel.excerpt = "Réservez votre séjour à l'hôtel \"La Siesta\" pour une expérience de détente ultime.";

// Mots clés
LaSiestaHotel.motsCles = [
    "réservation",
    "reserver", // Variante de mauvaise orthographe
    "séjour",
    "sejour", // Variante sans accent
    "hôtel",
    "hotel", // Variante sans accent
    "détente",
    "relaxation",
    "repos",
    "expérience",
    "experience", // Variante sans accent
    "confort",
    "luxueux",
    "luxe",
    "chambre",
    "chambres",
    "tarif",
    "prix",
    "vacances",
    "escapade",
    "weekend",
    "nuitée",
    "vue", 
    "piscine",
    "spa",
    "bien-être",
    "bienetre", // Variante sans accent
    "service",
    "services",
    "accueil",
    "confortable",
    "relaxant",
    "reposant",
    "luxueux",
    "chambre",
    "detente", // Variante sans accent
    "vacances",
    "detente",
    "bienetre", // Variante sans accent
    "hotel", // Variante sans accent
    "chambre",
    "reservation", // Variante de mauvaise orthographe
    "luxe",
	"escapade",
	"siesta",
	"la siesta"
];

// Site favicon icon
LaSiestaHotel.favicon = <IconSearchEngine />;

LaSiestaHotel.images = [
	"La Siesta Hotel.webp"
]

LaSiestaHotel.pages = [
	{
		title: "Hôtel la siesta",
		url: "https://www.hotel-siesta.be",
	},
];
