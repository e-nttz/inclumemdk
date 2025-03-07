import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";
import { beacon } from "@/helpers/beacon";

const RestaurantLaSiestaOostende = () => {
	const {user, session} = useAuth();
	const validationEtape1 = async () =>{
		const step = await getNextStep(session);
		if (step.id === 1) {
			await saveStep(session, {
				test_step_template_id: step.id,
				is_successful: true,
			});
			beacon("triggerStep", {
				value: "openSiesta",
			  });
		}
	}
	validationEtape1();
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-gray-50">
			<header className="bg-green-600 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-white">La Siesta | Oostende</h1>
					<p className="mt-2 text-lg text-green-200">Ontdek de authentieke smaken van Mexico</p>
				</div>
			</header>

			<section className="py-12 text-center bg-white">
				<div className="container mx-auto mt-6 max-w-2xl">
					<p className="text-lg text-gray-800">
						Ontdek "La Siesta", een oase van Mexicaanse smaken in het hart van Oostende. Laat je meeslepen door een ontspannen en zonnige sfeer waar de tijd vertraagt en de smaken ontwaken. 
						Van onze heerlijke nacho's met toppings tot onze authentieke taco's, elk gerecht is een smaakvolle reis door de culinaire tradities van Mexico.
					</p>
					<p className="mt-4 text-lg text-gray-800">
						Onze warme en gezellige sfeer nodigt uit tot ontspanning en het genieten van elk moment. Of je nu komt voor een snelle lunchpauze of voor een avondje uit met vrienden, 
						"La Siesta" belooft een culinaire ervaring die je zintuigen prikkelt en je direct naar de Mexicaanse zon transporteert.
					</p>
				</div>
			</section>

			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-green-600">Onze Menu</h2>
					<p className="mt-4 text-gray-700">Geniet van onze smakelijke Mexicaanse gerechten:</p>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-green-600">Taco</h3>
							<p className="text-gray-700">Kies uit een selectie van vullingen, geserveerd in zachte of krokante tortillas.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-green-600">Quesadilla</h3>
							<p className="text-gray-700">Gegrilde tortilla gevuld met gesmolten kaas en jouw keuze van vlees of groenten.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-green-600">Enchilada</h3>
							<p className="text-gray-700">Tortilla gevuld met vlees of groenten, overgoten met onze huisgemaakte saus.</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow">
							<h3 className="font-bold text-green-600">Nachos</h3>
							<p className="text-gray-700">Krokante tortillachips belegd met kaas, jalapeños, guacamole en meer.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-white">
				<h2 className="text-3xl font-semibold text-green-600">Praktische Informatie</h2>
				<p className="mt-4 text-gray-700">
					Adres: <span className="font-bold">Rodestraat 24, Oostende</span>
				</p>
				<p className="mt-2 text-gray-700">
					Openingstijden: <span className="font-bold">Dinsdag tot zondag 11h30-23h (gesloten dinsdag en vrijdagmiddag)</span>
				</p>
				<p className="mt-2 text-gray-700">
					Telefoon: <button className="text-green-600">+32 59 12 34 56</button>
				</p>
				<p className="mt-2 text-gray-700">
					E-mail: <button className="text-green-600 underline">reservation@lasiestaoostende.be</button>
				</p>
			</section>

			<footer className="bg-green-600 py-6">
				<div className="container mx-auto text-center text-gray-200">
					<p>&copy; {new Date().getFullYear()} La Siesta | Oostende. Alle rechten voorbehouden.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default RestaurantLaSiestaOostende;

// used in RenderAllWebsites to select the right website
RestaurantLaSiestaOostende.componentName = "restaurantLaSiestaOostende";
// used in tab as site title
RestaurantLaSiestaOostende.title = "La Siesta | Oostende";
// used in searchEngine
RestaurantLaSiestaOostende.excerpt = "Geniet van authentieke Mexicaanse smaken in Oostende.";

// Mots clés
RestaurantLaSiestaOostende.motsCles = [
	"cuisine",
	"cuisines",
	"cuizine", // Variante d'orthographe
	"mexicaine",
	"mexicain",
	"mexicains",
	"mexicaines",
	"Mexique",
	"mexike", // Variante d'orthographe
	"saveurs",
	"saveur",
	"savoeur", // Variante d'orthographe
	"authentique",
	"authentiques",
	"authenticité",
	"plats",
	"plat",
	"repas",
	"repaz", // Variante d'orthographe
	"recettes",
	"recette",
	"tacos",
	"burritos",
	"enchiladas",
	"quesadillas",
	"gastronomie",
	"gastronomique",
	"exotique",
	"exotiques",
	"exotism",
	"exotisme",
	"Ostende",
	"Ostend", // Variante d'orthographe
	"ambiance",
	"ambiances",
	"festif",
	"festifs",
	"tradition",
	"traditionnel",
	"traditionnels",
	"traditionnelle",
	"délice",
	"délices",
	"délicieux",
	"délicieuse",
	"culture",
	"cultures",
	"tropical",
	"tropicals", // Variante au pluriel
	"tropique",
	"tropiques",
	"spécialités",
	"spécialité",
	"goût",
	"goûts",
	"gouts", // Variante d'orthographe
	"fête",
	"fêtes",
	"siesta",
	"la siesta",
	"restaurant"
];

// Site favicon icon
RestaurantLaSiestaOostende.favicon = <IconSearchEngine />;

RestaurantLaSiestaOostende.images = [
	"La Siesta Oostende zoom.webp"
]

RestaurantLaSiestaOostende.pages = [
	{
		title: "La siesta | Oostende",
		url: "https://www.lasiesta-oostende.be",
	},
];
