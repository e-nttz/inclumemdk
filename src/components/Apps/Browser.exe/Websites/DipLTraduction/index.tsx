import IconSearchEngine from "@/assets/icons/search-engine.svg?react";
import { IKContext, IKImage } from "imagekitio-react";
import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";
import { useState } from "react";

const translations = {
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
  "dagelijks menu": "menu du jour",
  "feestelijk water": "eau de fête",
  "pittige salade": "salade épicée",
  "brandende burrito": "burrito en feu",
  "hoofdgerecht dessert": "dessert",
  "zachte churros": "churros doux",
};
const DipLTraduction = () => {
	const { session } = useAuth();

  const validationEtape14 = async () => {
    const step = await getNextStep(session);
    if (step.id === 37) {
      await saveStep(session, {
        test_step_template_id: step.id,
        is_successful: true,
      });
    }
  };

  const [inputWord, setInputWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [copySuccess, setCopySuccess] = useState(false); // État pour afficher "Copié !"

  const handleTranslate = () => {
    const lowerCasedWord = inputWord.toLowerCase().trim();
    if (translations[lowerCasedWord]) {
      setTranslation(translations[lowerCasedWord]);
      validationEtape14();
    } else {
      setTranslation(
        "Est-ce la bonne orthographe ? Nous n'avons pas trouvé le mot dans notre dictionnaire."
      );
    }
    setCopySuccess(false); // Réinitialiser le message "Copié !"
  };

  const handleCopy = () => {
    if (translation) {
      navigator.clipboard.writeText(translation).then(() => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1500); // Masquer le message après 1.5s
      });
    }
  };
	return (
		<IKContext urlEndpoint="https://ik.imagekit.io/0jngziwft/inclume/photos_sites/">
			<body className="bg-white">
			<header className="bg-blue-700 py-8 shadow-md">
				<div className="container mx-auto text-center">
					<h1 className="text-4xl font-bold text-white">DipL Traduction</h1>
					<p className="mt-2 text-lg text-gray-200">
						Traduction instantanée de textes et documents complets
					</p>
				</div>
			</header>

			<section className="py-16 text-center bg-white">
				<IKImage
					path={DipLTraduction.images[0]}
					alt="DipL Traduction"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-lg"
				/>
				<div className="container mx-auto mt-6">
					<p className="text-lg text-gray-800">
						Accédez à des traductions précises en un clic avec DipL Traduction.
					</p>
					<button
						type="button"
						className="mt-4 inline-block px-8 py-3 text-blue-700 bg-white rounded-lg shadow hover:bg-gray-100 transition duration-200"
					>
						Commencez votre traduction
					</button>
				</div>
			</section>
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
            <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md w-80 flex flex-col items-center">
              <p className="text-gray-700 text-lg">{translation || "La traduction apparaîtra ici..."}</p>
              {translation && (
                <button
                  onClick={handleCopy}
                  className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Copier
                </button>
              )}
              {copySuccess && <p className="text-green-600 mt-2">✅ Copié !</p>}
            </div>
          </div>
      </section>
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-700">Langues Disponibles</h2>
					<p className="mt-4 text-gray-700">
						Choisissez votre langue source et cible pour une traduction instantanée :
					</p>
					<div className="mt-6 flex justify-center gap-4 flex-wrap">
						<span className="bg-blue-100 px-4 py-2 rounded-md">Néerlandais</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Français</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Anglais</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Allemand</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Zoulou</span>
						<span className="bg-blue-100 px-4 py-2 rounded-md">Espagnol</span>
					</div>
				</div>
			</section>

			<section className="py-16 text-center bg-blue-700 text-white">
				<h2 className="text-3xl font-bold">Pourquoi Choisir DipL Traduction ?</h2>
				<p className="mt-4 text-lg">
					Nous garantissons des traductions rapides, fiables, et accessibles à tout moment.
				</p>
				<div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
					<div className="p-6 bg-blue-600 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold">Précision</h3>
						<p className="mt-2">Des traductions claires et précises pour tous vos besoins professionnels.</p>
					</div>
					<div className="p-6 bg-blue-600 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold">Rapidité</h3>
						<p className="mt-2">Obtenez vos traductions en quelques secondes.</p>
					</div>
					<div className="p-6 bg-blue-600 rounded-lg shadow-lg">
						<h3 className="text-xl font-semibold">Accessibilité</h3>
						<p className="mt-2">Disponible en ligne, où que vous soyez.</p>
					</div>
				</div>
			</section>

			<section className="py-16 bg-white text-center">
				<h2 className="text-3xl font-semibold text-blue-700">Fonctionnalités Supplémentaires</h2>
				<p className="mt-4 text-gray-800">
					Explorez nos options de traduction avancées pour améliorer vos documents.
				</p>
				<ul className="mt-6 flex justify-center flex-wrap gap-6 text-lg text-gray-800">
					<li className="px-6 py-3 bg-gray-100 rounded-md shadow">Traduction de documents PDF</li>
					<li className="px-6 py-3 bg-gray-100 rounded-md shadow">Traduction avec synthèse vocale</li>
					<li className="px-6 py-3 bg-gray-100 rounded-md shadow">Ajustement linguistique avancé</li>
				</ul>
			</section>

			<footer className="bg-blue-700 py-6 text-white">
				<div className="container mx-auto text-center">
					<p>
						Pour nous contacter : contact@dipl-translator.com
					</p>
					<p className="mt-4">&copy; {new Date().getFullYear()} DipL Traduction. Tous droits réservés.</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default DipLTraduction;

// used in RenderAllWebsites to select the right website
DipLTraduction.componentName = "diplTraduction";
// used in tab as site title
DipLTraduction.title = "DipL Traduction | Traduction instantanée de textes et documents complets";
// used in searchEngine
DipLTraduction.excerpt = "Traduction instantanée de textes et documents complets avec DipL Traduction.";

// Mots clés
DipLTraduction.motsCles = [
    "traduction",
    "tradution", // Variante de mauvaise orthographe
    "texte",
    "textes",
    "texe", // Variante de mauvaise orthographe
    "document",
    "documents",
    "documant", // Variante de mauvaise orthographe
    "instantané",
    "instantanee", // Variante sans accent
    "immédiat",
    "immediat", // Variante sans accent
    "rapide",
    "vitesse",
    "dipl",
    "dipL",
    "traduire",
    "traducteur",
    "traducteurs",
    "convertir",
    "conversion",
    "interprétation",
    "interpretation", // Variante sans accent
    "automatique",
    "automatisation",
    "logiciel",
    "logiciels",
    "online", // Variante anglaise
    "enligne", // Variante
    "service",
    "services",
    "multilingue",
    "multilanguage", // Variante anglaise
    "langue",
    "langues",
    "idiome", // Synonyme
    "complet",
    "intégral",
    "integral", // Variante sans accent
    "fichier",
    "fichiers",
    "écrit",
    "écrits",
    "ercrits", // Variante de mauvaise orthographe
    "documentaire",
    "contenu",
    "contenus",
    "transfert",
    "communication",
    "pittige",
    "salade"
];

DipLTraduction.favicon = <IconSearchEngine />;

DipLTraduction.images = [
	"DipL Traduction.jpeg"
]

DipLTraduction.pages = [
	{
		title: "DipL Traduction",
		url: "https://www.dipl-translator.com",
	},
];
