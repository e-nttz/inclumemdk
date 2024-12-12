import IconSearchEngine from "@/assets/icons/search-engine.svg?react";

const FamilierestaurantOostende = () => {
	return (
		<body className="bg-gray-50">
			<header className="bg-orange-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">Familierestaurant in Oostende</h1>
					<p className="mt-2 text-lg text-orange-200">Huiselijke Keuken en Gezellige Sfeer</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<img
					src="https://images.pexels.com/photos/7772194/pexels-photo-7772194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt="Familierestaurant Oostende"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Bij ons wordt elk gerecht met liefde en zorg bereid, gebruikmakend van recepten die van generatie op generatie zijn doorgegeven. 
						Wij nodigen u uit om te genieten van traditionele en hartverwarmende gerechten in een vriendelijke en ontspannen omgeving, 
					waar elke maaltijd een viering is van goed eten en gezelligheid.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-orange-600">Ons Menu</h2>
					<p className="mt-4 text-gray-700">Ontdek enkele van onze favoriete gerechten :</p>
					<ul className="mt-8 space-y-4">
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-orange-600">Moules/frites</span> - Een klassiek Belgisch gerecht, perfect bereid en geserveerd met frietjes.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-orange-600">Carbonnades flamandes</span> - Een hartverwarmend stoofgerecht met rundvlees en bier.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-orange-600">Waterzooi</span> - Een romige stoofpot met kip of vis, vol smaak en verse groenten.
						</li>
						<li className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold text-orange-600">Vol-au-vent</span> - Een heerlijke pastei gevuld met kip en paddenstoelen in een romige saus.
						</li>
					</ul>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-orange-600">Praktische Informatie</h2>
				<p className="mt-4 text-gray-700">
					Adres: <span className="font-bold">Zeedijkstraat 25, 8400 Oostende</span>
				</p>
				<p className="mt-2 text-gray-700">
					Openingsuren: <span className="font-bold">Maandag – donderdag 11h30-14h30, Vrijdag – zondag 11h30-14h30 en 18h-23h</span>
				</p>
				<p className="mt-2 text-gray-700">
					Email: <button className="text-orange-600 underline">oostende.familierestaurant@outmail.com</button>
				</p>
				<p className="mt-2 text-gray-700">
					Telefoon: <button className="text-orange-600">+32 787 45 48 29 2</button>
				</p>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-orange-600">Klantengetuigenissen</h2>
					<p className="mt-4 text-gray-700">Wat onze klanten zeggen :</p>
					<div className="mt-8 space-y-4">
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Jeroen S.</span>: "Een geweldige ervaring! Het eten was heerlijk en de sfeer was erg gezellig."
						</p>
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Sophie M.</span>: "De moules/frites zijn een must-try. Zeer vers en perfect gekookt!"
						</p>
						<p className="bg-white p-4 rounded-lg shadow">
							<span className="font-bold">Kirsten T.</span>: "Dit restaurant voelt als een tweede huis. Ik kom hier zeker terug!"
						</p>
					</div>
				</div>
			</section>

			<footer className="bg-orange-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} Familierestaurant Oostende. Alle rechten voorbehouden.</p>
				</div>
			</footer>
		</body>
	);
};

export default FamilierestaurantOostende;

// used in RenderAllWebsites to select the right website
FamilierestaurantOostende.componentName = "familierestaurantOostende";
// used in tab as site title
FamilierestaurantOostende.title = "Familierestaurant in Oostende";
// used in searchEngine
FamilierestaurantOostende.excerpt = "Geniet van traditionele gerechten in een gezellige sfeer.";

// Mots clés
FamilierestaurantOostende.motsCles = [
	"mot_cle_1",
	"mot_cle_2",
	"mot_cle_3"
];

// Site favicon icon
FamilierestaurantOostende.favicon = <IconSearchEngine />;

FamilierestaurantOostende.pages = [
	{
		title: "Familierestaurant in Oostende",
		url: "https://www.familierestaurantoostende.be",
	},
];