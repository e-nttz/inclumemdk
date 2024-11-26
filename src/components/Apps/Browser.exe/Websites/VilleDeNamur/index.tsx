import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const VilleDeNamur = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-gray-800 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">Ville de Namur</h1>
					<p className="mt-2 text-lg text-gray-300">Bienvenue à Namur - Découvrez notre patrimoine et nos événements locaux</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/18042330/pexels-photo-18042330/free-photo-of-maisons-monument-horizon-immeubles.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Ville de Namur"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg mx-auto"
				/>
				<div className="container mx-auto mt-8 max-w-2xl">
					<p className="text-lg text-gray-800">
						Explorez Namur, capitale de la Wallonie, et découvrez son riche patrimoine historique, ses festivals et ses activités touristiques.
					</p>
					<button
						type="button"
						className="mt-6 bg-gray-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-700"
					>
						Planifiez votre visite
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-gray-800">Actualités et Événements</h2>
					<p className="mt-4 text-gray-600">Suivez les dernières nouvelles et événements à Namur</p>
					<div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 text-left">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-gray-700">Agenda Culturel</h3>
							<p className="mt-2 text-gray-600">Les prochaines expositions, spectacles, et animations à ne pas manquer.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-gray-700">Événements Locaux</h3>
							<p className="mt-2 text-gray-600">Découvrez les festivals et autres célébrations qui animent la ville.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-gray-700">Élections 2024</h3>
							<p className="mt-2 text-gray-600">Informations sur les élections et comment participer.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-bold text-gray-800">Contactez-nous</h2>
				<p className="mt-4 text-gray-700">Des questions ? N'hésitez pas à nous contacter !</p>
				<div className="mt-6">
					<p className="text-gray-700">Mail : <button className="underline text-blue-600">info.namur@outmail.be</button></p>
					<p className="text-gray-700 mt-2">Téléphone : <button className="underline text-blue-600">066 34 13 74 1</button></p>
				</div>
			</section>

			<footer className="bg-gray-800 py-8 text-gray-300">
				<div className="container mx-auto text-center">
					<p>&copy; {new Date().getFullYear()} Ville de Namur. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default VilleDeNamur;

// used in RenderAllWebsites to select the right website
VilleDeNamur.componentName = "villeDeNamur";
// used in tab as site title
VilleDeNamur.title = "Ville de Namur | Découvrez notre patrimoine et nos événements";
// used in searchEngine
VilleDeNamur.excerpt = "La saison touristique commence à Namur ! Explorez la ville et ses activités.";

// Site favicon icon
VilleDeNamur.favicon = <IconSearchEngine />;

VilleDeNamur.pages = [
	{
		title: "Ville de Namur - Découvrez notre patrimoine et nos événements",
		url: "https://ville-de-namur.be",
	},
];
