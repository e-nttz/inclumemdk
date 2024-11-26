import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const CuevaDeGabi = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-orange-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Cueva de Gabi</h1>
					<p className="mt-2 text-lg text-orange-200">Votre destination latino ultime à Ixelles</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/26508136/pexels-photo-26508136/free-photo-of-assiette-homme-mains-repas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
	);
};

export default CuevaDeGabi;

// used in RenderAllWebsites to select the right website
CuevaDeGabi.componentName = "cuevaDeGabi";
// used in tab as site title
CuevaDeGabi.title = "Cueva de Gabi à Ixelles";
// used in searchEngine
CuevaDeGabi.excerpt = "Découvrez le meilleur de la cuisine latino-américaine à Ixelles.";

// Site favicon icon
CuevaDeGabi.favicon = <IconSearchEngine />;

CuevaDeGabi.pages = [
	{
		title: "Cueva De Gabi",
		url: "https://www.cueva-de-gabi.be",
	},
];