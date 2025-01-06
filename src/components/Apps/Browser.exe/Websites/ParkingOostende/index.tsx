import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const ParkingsOostende = () => {
	return (
		<body className="bg-white">
			<header className="bg-blue-700 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">Où garer ma voiture à Ostende ?</h1>
					<p className="mt-2 text-lg text-gray-200">Explorez les options de stationnement à Ostende</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<img
					src="https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Où garer ma voiture à Ostende ?"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800">
						Découvrez les différents parkings et options de stationnement pour une visite sans soucis dans la belle ville d'Ostende.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto">
					<h2 className="text-3xl font-bold text-blue-700 text-center">Aperçu de tous les parkings</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
						<div className="p-6 bg-white rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold">Parking Churchill</h3>
							<p className="mt-2 text-gray-600">Adresse : Natiënkaai 7, 8400 Oostende</p>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold">Sky Parking Oostende</h3>
							<p className="mt-2 text-gray-600">Adresse : Leopold III-laan 6, 8400 Oostende</p>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold">Parking périphérique P3 Oosteroever</h3>
							<p className="mt-2 text-gray-600">Adresse : Ankerstraat (Gratuit)</p>
						</div>
						<div className="p-6 bg-white rounded-lg shadow-lg">
							<h3 className="text-xl font-semibold">Parking périphérique Maria Hendrikapark</h3>
							<p className="mt-2 text-gray-600">Adresse : Iependreef, 8400 Oostende (Gratuit)</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center">
				<h2 className="text-3xl font-bold text-blue-700">Stationnement sur le domaine public</h2>
				<p className="mt-4 text-lg text-gray-800">
					Les zones de stationnement à Ostende sont organisées par couleur, chacune avec des règles spécifiques.
				</p>
				<div className="mt-6 space-y-6">
					<div className="bg-blue-100 p-4 rounded-lg shadow">
						<h3 className="text-2xl font-semibold">Zone Orange</h3>
						<p className="text-gray-600">Stationnement payant tous les jours de 9h00 à 20h00.</p>
					</div>
					<div className="bg-green-100 p-4 rounded-lg shadow">
						<h3 className="text-2xl font-semibold">Zone Verte</h3>
						<p className="text-gray-600">Stationnement payant tous les jours de 9h00 à 20h00.</p>
					</div>
					<div className="bg-yellow-100 p-4 rounded-lg shadow">
						<h3 className="text-2xl font-semibold">Zone Jaune</h3>
						<p className="text-gray-600">Réglementation variable (consulter les panneaux de signalisation).</p>
					</div>
				</div>
			</section>

			<footer className="bg-blue-700 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-200">
						Contact : info@visit-oostende.be
					</p>
					<p className="text-gray-200">
						&copy; {new Date().getFullYear()} Visit Oostende. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default ParkingsOostende;

// used in RenderAllWebsites to select the right website
ParkingsOostende.componentName = "parkingsOostende";
// used in tab as site title
ParkingsOostende.title = "Où garer ma voiture à Ostende ? | Visit Oostende";
// used in searchEngine
ParkingsOostende.excerpt = "Stationnement sur le domaine public en tant que visiteur : Zone orange, verte, jaune.";

// Mots clés
ParkingsOostende.motsCles = [
	"mot_cle_1",
	"mot_cle_2",
	"mot_cle_3"
];

ParkingsOostende.favicon = <IconSearchEngine />;

ParkingsOostende.pages = [
	{
		title: "Où garer ma voiture à Ostende ?",
		url: "https://www.visit-oostende.be/fr/parkings",
	},
];
