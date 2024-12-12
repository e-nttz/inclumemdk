import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const Inverso = () => {
	return (
		<body className="bg-white">
			<header className="bg-blue-800 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-extrabold text-gray-100">Inverso</h1>
					<p className="mt-2 text-lg text-gray-300">Traduction en ligne gratuite et instantanée</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<img
					src="https://images.pexels.com/photos/41949/earth-earth-at-night-night-lights-41949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Inverso"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 px-4">
					<p className="text-lg text-gray-700 leading-relaxed">
						Grâce à Inverso, traduisez des phrases, des documents et des textes en plusieurs langues en quelques secondes, gratuitement et facilement accessible depuis n'importe quel appareil.
					</p>
					<button
						type="button"
						className="mt-6 px-8 py-3 text-blue-800 bg-gray-100 rounded-lg shadow hover:bg-gray-200"
					>
						Commencez à traduire
					</button>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-blue-800">Comment utiliser Inverso</h2>
					<div className="grid gap-8 mt-10 md:grid-cols-3">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-800">Étape 1</h3>
							<p className="mt-2 text-gray-600">Entrez le texte original dans la langue de départ.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-800">Étape 2</h3>
							<p className="mt-2 text-gray-600">Choisissez la langue de traduction souhaitée.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-800">Étape 3</h3>
							<p className="mt-2 text-gray-600">Laissez Inverso traduire instantanément pour vous.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center">
				<h2 className="text-3xl font-bold text-blue-800">Langues Disponibles</h2>
				<p className="mt-4 text-lg text-gray-700">
					Inverso supporte les langues les plus utilisées dans le monde :
				</p>
				<ul className="mt-6 flex justify-center flex-wrap gap-4">
					<li className="bg-blue-100 px-4 py-2 rounded-md">Néerlandais</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Français</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Anglais</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Allemand</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Zoulou</li>
					<li className="bg-blue-100 px-4 py-2 rounded-md">Espagnol</li>
				</ul>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-800">Témoignages</h2>
					<p className="mt-4 text-gray-600">Ce que disent nos utilisateurs :</p>
					<div className="mt-6 space-y-6">
						<blockquote className="bg-white p-4 rounded-lg shadow-md">
							<p className="text-gray-600">“Traductions rapides et faciles d'accès où que je sois !”</p>
							<footer className="mt-2 text-gray-500">- Lucie M.</footer>
						</blockquote>
						<blockquote className="bg-white p-4 rounded-lg shadow-md">
							<p className="text-gray-600">“J'utilise Inverso tous les jours pour mes études.”</p>
							<footer className="mt-2 text-gray-500">- Tom R.</footer>
						</blockquote>
					</div>
				</div>
			</section>

			<footer className="bg-blue-800 py-6">
				<div className="container mx-auto text-center">
					<p className="text-gray-300">
						Contact : 
						<button className="underline hover:text-gray-200 ml-2">support@inverso.com</button>
					</p>
					<p className="text-gray-300">
						&copy; {new Date().getFullYear()} Inverso. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
	);
};

export default Inverso;

// used in RenderAllWebsites to select the right website
Inverso.componentName = "inverso";
// used in tab as site title
Inverso.title = "Inverso | Traduction en ligne gratuite";
// used in searchEngine
Inverso.excerpt = "Traduction instantanée de vos textes dans plusieurs langues avec Inverso.";

// Mots clés
Inverso.motsCles = [
	"mot_cle_1",
	"mot_cle_2",
	"mot_cle_3"
];

Inverso.favicon = <IconSearchEngine />;

Inverso.pages = [
	{
		title: "Inverso",
		url: "https://www.inverso.com",
	},
];