import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const ParkingMariaHendrikapark = () => {
	return (
		<body className="bg-white">
			<header className="bg-gradient-to-r from-blue-600 to-blue-400 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">Parking périphérique Maria Hendrikapark</h1>
					<p className="mt-2 text-lg text-gray-200">
						Un stationnement gratuit à Ostende, ouvert 24h/24 et 7j/7
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<img
					src="https://images.pexels.com/photos/28374669/pexels-photo-28374669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Parking Maria Hendrikapark"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800">
						Profitez de notre parking gratuit à Ostende, idéalement situé et ouvert à tout moment.
					</p>
					<button
						type="button"
						className="mt-4 inline-block px-8 py-3 text-blue-600 bg-white rounded-lg shadow hover:bg-gray-100"
					>
						Plus d'informations
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-600">Détails du Parking</h2>
					<p className="mt-4 text-gray-700">Voici les informations importantes concernant le parking :</p>
					<ul className="mt-6 space-y-2 text-left">
						<li className="text-gray-800"><strong>Ouvert :</strong> 7/7, 24/24</li>
						<li className="text-gray-800"><strong>Adresse :</strong> Iependreef, 8400 Oostende</li>
						<li className="text-gray-800"><strong>Gratuit :</strong> Oui</li>
						<li className="text-gray-800"><strong>Réservation :</strong> Oui</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center bg-blue-600">
				<h2 className="text-3xl font-bold text-white">Contactez-Nous</h2>
				<p className="mt-4 text-lg text-white">
					Avez-vous des questions ? N'hésitez pas à nous contacter !
				</p>
				<p className="mt-2 text-white">
					Email: <span className="underline">contact@visit-oostende.com</span>
				</p>
				<p className="text-white">
					Téléphone: <span className="underline">+32 49 15 39 45 6</span>
				</p>
			</section>

			<footer className="bg-blue-600 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-200">
						<button className="underline hover:text-white">Contactez-nous</button>
					</p>
					<p className="text-gray-200">
						&copy; {new Date().getFullYear()} Visit Oostende. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default ParkingMariaHendrikapark;

// used in RenderAllWebsites to select the right website
ParkingMariaHendrikapark.componentName = "parkingMariaHendrikapark";
// used in tab as site title
ParkingMariaHendrikapark.title = "Parking périphérique Maria Hendrikapark | Visit Oostende";
// used in searchEngine
ParkingMariaHendrikapark.excerpt = "Parking gratuit à Ostende, ouvert 24h/24 et 7j/7.";

ParkingMariaHendrikapark.favicon = <IconSearchEngine />;

ParkingMariaHendrikapark.pages = [
	{
		title: "Parking Maria Hendrikapark",
		url: "https://www.visit-oostende.be/fr/parking-maria-hendripark",
	},
];
