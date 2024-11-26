import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const TukTukNamur = () => {
	return (
		<body className="bg-white">
			<header className="bg-green-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Visites guidées insolites à Namur</h1>
					<p className="mt-2 text-lg text-green-200">Explorez la ville de manière originale avec Tuk-Tuk</p>
				</div>
			</header>

			<section className="py-12 text-center bg-gray-50">
				<img
					src="https://images.pexels.com/photos/18042328/pexels-photo-18042328/free-photo-of-ville-religion-cathedrale-catholique.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Tuk-Tuk à Namur"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Laissez-vous conduire par nos tuk-tuks pour découvrir les joyaux cachés de Namur. Une expérience unique vous attend !
					</p>
					<button
						type="button"
						className="mt-4 bg-green-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-500"
					>
						Réservez votre visite
					</button>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-green-600">À Propos des Visites</h2>
					<p className="mt-4 text-gray-700">
						Nos visites guidées en tuk-tuk sont conçues pour vous offrir une expérience mémorable. Découvrez l'histoire, la culture et les curiosités de Namur tout en profitant d'un trajet amusant et relaxant.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100 text-center">
				<h2 className="text-3xl font-semibold text-green-600">Contactez-nous</h2>
				<p className="mt-4 text-gray-700">Pour toute question ou réservation :</p>
				<div className="mt-6">
					<p className="text-gray-700">Mail : <button className="underline text-blue-600">namurentuktuk@outmail.com</button></p>
					<p className="text-gray-700 mt-2">Téléphone : <button className="underline text-blue-600">094 46 42 81 3</button></p>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-green-600">Informations Pratiques</h2>
				<p className="mt-4 text-gray-700">Adresse : Place des Saints, 5000 Namur</p>
			</section>

			<footer className="bg-green-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Tuk-Tuk Namur. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default TukTukNamur;

// used in RenderAllWebsites to select the right website
TukTukNamur.componentName = "tukTukNamur";
// used in tab as site title
TukTukNamur.title = "Visites guidées insolites à Namur | Tuk-Tuk";
// used in searchEngine
TukTukNamur.excerpt = "Découvrez Namur d'une manière originale avec nos visites en tuk-tuk.";

// Site favicon icon
TukTukNamur.favicon = <IconSearchEngine />;

TukTukNamur.pages = [
	{
		title: "Visites guidées Tuk-Tuk",
		url: "https://namur-tuktuk.be/fr",
	},
];
