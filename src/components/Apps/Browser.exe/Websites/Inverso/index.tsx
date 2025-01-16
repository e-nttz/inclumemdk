import { useState } from "react";
import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";
const translations = {
  // Traductions mot à mot
  "dagelijks": "quotidien",
  "menu": "menu",
  "aperitief": "apéritif",
  "feestelijk": "festif",
  "water": "eau",
  "voorgerecht": "entrée",
  "pittige": "épicée",
  "salade": "salade",
  "hoofdgerecht": "plat principal",
  "brandende": "en feu",
  "burrito": "burrito",
  "dessert": "dessert",
  "zachte": "doux",
  "churros": "churros",

  // Traductions complètes
  "dagelijks menu": "menu du jour",
  "feestelijk water": "eau de fête",
  "pittige salade": "salade épicée",
  "brandende burrito": "burrito en feu",
  "hoofdgerecht dessert": "dessert",
  "zachte churros": "churros doux",
};

const Inverso = () => {
  const {session} = useAuth();
    const validationEtape14 = async () =>{
      const step = await getNextStep(session);
      if (step.id === 14) {
        await saveStep(session, {
          test_step_template_id: step.id,
          is_successful: true,
        });
      }
  }
  const [inputWord, setInputWord] = useState("");
  const [translation, setTranslation] = useState("");

  const handleTranslate = () => {
    const lowerCasedWord = inputWord.toLowerCase().trim();
    if (translations[lowerCasedWord]) {
      setTranslation(translations[lowerCasedWord]);
      validationEtape14();
    } else {
      setTranslation("Est-ce la bonne orthographe? Nous n'avons pas trouvé le mot dans notre dictionnaire.");
    }
  };

  return (
    <IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
      <body className="bg-white">
      <header className="bg-blue-800 py-8 shadow-md">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold text-gray-100">Inverso</h1>
          <p className="mt-2 text-lg text-gray-300">
            Traduction en ligne gratuite et instantanée
          </p>
        </div>
      </header>

      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold text-blue-800">Outil de traduction</h2>
        <div className="mt-8 container mx-auto flex flex-col items-center">
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
            placeholder="Entrez un mot en néerlandais..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring focus:ring-blue-400"
          />
          <button
            onClick={handleTranslate}
            className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700"
          >
            Traduire
          </button>
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md w-80">
            <p className="text-gray-700">
              {translation || "La traduction apparaîtra ici..."}
            </p>
          </div>
        </div>
      </section>

	  <section className="py-16 text-center">
			<IKImage
				path={Inverso.images[0]}
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

      <footer className="bg-blue-800 py-6">
        <div className="container mx-auto text-center">
          <p className="text-gray-300">
            Contact :{" "}
            <button className="underline hover:text-gray-200 ml-2">
              support@inverso.com
            </button>
          </p>
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} Inverso. Tous droits réservés.
          </p>
        </div>
      </footer>
    </body>
    </IKContext>
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
    "traduction",
	"outil",
	"de",
    "tradution", // Variante de mauvaise orthographe
    "traduire",
    "traducteur",
    "traducteurs",
    "texte",
    "textes",
    "texe", // Variante de mauvaise orthographe
    "instantané",
    "instantanee", // Variante sans accent
    "immédiat",
    "immediat", // Variante sans accent
    "rapide",
    "vitesse",
    "langue",
    "langues",
    "idiome", // Synonyme
    "multilingue",
    "multilanguage", // Variante anglaise
    "automatique",
    "automatisation",
    "efficace",
    "précis",
    "precis", // Variante sans accent
    "fiable",
    "service",
    "services",
    "outil",
    "outils",
    "logiciel",
    "logiciels",
    "contenu",
    "contenus",
    "langages",
    "communication"
];

Inverso.favicon = <IconSearchEngine />;

Inverso.images = [
  "Inverso.jpeg"
]

Inverso.pages = [
	{
		title: "Inverso",
		url: "https://www.inverso.com",
	},
];
