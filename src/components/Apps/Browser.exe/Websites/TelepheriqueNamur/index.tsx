import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const TelepheriqueNamur = () => {
	return (
		<body className="bg-white">
			<header className="bg-blue-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Téléphérique de la Citadelle de Namur</h1>
					<p className="mt-2 text-lg text-blue-200">Découvrez Namur sous un nouveau jour</p>
				</div>
			</header>

			<section className="py-12 text-center bg-gray-50">
				<img
					src="https://images.pexels.com/photos/18004071/pexels-photo-18004071/free-photo-of-ville-monument-transport-public-tram.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Téléphérique de Namur"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Venez profiter d'une vue imprenable sur la ville de Namur grâce à notre téléphérique. Une expérience inoubliable vous attend alors que vous survolez la citadelle et le paysage environnant.
					</p>
					<button
						type="button"
						className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-500"
					>
						Réservez votre trajet
					</button>
				</div>
			</section>

			<section className="py-16 bg-white">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-600">À Propos de l'Expérience</h2>
					<p className="mt-4 text-gray-700">
						Le téléphérique vous emmène à travers des paysages magnifiques, vous permettant de découvrir Namur d'une perspective unique. Que ce soit pour une sortie en famille, une escapade romantique ou une aventure entre amis, cette attraction est incontournable !
					</p>
					<p className="mt-4 text-gray-700">
						**Horaires** : Du mercredi au dimanche, de 10h à 20h.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100 text-center">
				<h2 className="text-3xl font-semibold text-blue-600">Contactez-nous</h2>
				<p className="mt-4 text-gray-700">Pour toute question ou réservation :</p>
				<div className="mt-6">
					<p className="text-gray-700">Mail : <button className="underline text-blue-600">namur.téléphérique@outmail.be</button></p>
					<p className="text-gray-700 mt-2">Téléphone : <button className="underline text-blue-600">065 34 12 432 1</button></p>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-blue-600">Informations Pratiques</h2>
				<p className="mt-4 text-gray-700">Adresse : Rue des Tailleurs 36, 5000 Namur</p>
			</section>

			<section className="py-16 bg-blue-50 text-center">
				<h2 className="text-3xl font-semibold text-blue-600">Avis des Visiteurs</h2>
				<p className="mt-4 text-gray-700">Voici ce que nos visiteurs disent :</p>
				<div className="mt-6 max-w-3xl mx-auto space-y-4">
					<blockquote className="bg-white p-4 rounded-lg shadow">
						<p className="text-gray-600">“Une expérience incroyable, les vues sont à couper le souffle !”</p>
						<footer className="mt-2 text-gray-500">- Sophie M.</footer>
					</blockquote>
					<blockquote className="bg-white p-4 rounded-lg shadow">
						<p className="text-gray-600">“Idéal pour une sortie en famille. Mes enfants ont adoré !”</p>
						<footer className="mt-2 text-gray-500">- Marc T.</footer>
					</blockquote>
				</div>
			</section>

			<footer className="bg-blue-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Téléphérique de la Citadelle de Namur. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
	);
};

export default TelepheriqueNamur;

// used in RenderAllWebsites to select the right website
TelepheriqueNamur.componentName = "telepheriqueNamur";
// used in tab as site title
TelepheriqueNamur.title = "Téléphérique de la Citadelle de Namur";
// used in searchEngine
TelepheriqueNamur.excerpt = "Découvrez Namur d'un angle unique avec le téléphérique.";

// Mots clés
TelepheriqueNamur.motsCles = [
	"mot_cle_1",
	"mot_cle_2",
	"mot_cle_3"
];

// Site favicon icon
TelepheriqueNamur.favicon = <IconSearchEngine />;

TelepheriqueNamur.pages = [
	{
		title: "Téléphérique de Namur",
		url: "https://namur-telepherique.be/fr",
	},
];
