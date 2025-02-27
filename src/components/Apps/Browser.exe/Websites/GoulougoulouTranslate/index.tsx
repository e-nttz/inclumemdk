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

const GoulougoulouTranslate = () => {
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
			<header className="bg-blue-700 py-8 shadow-lg">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold text-yellow-300">Gougoule Traduction</h1>
					<p className="mt-2 text-xl text-white">
						Le service gratuit de traduction instantanée
					</p>
				</div>
			</header>

			<section className="py-16 text-center">
				<IKImage
					path={GoulougoulouTranslate.images[0]}
					alt="Goulougoulou Traduction"
					className="object-cover w-full h-80 md:h-96 rounded-lg shadow-md"
				/>
				<div className="container mx-auto mt-6 px-4">
					<p className="text-lg text-gray-800 leading-relaxed">
						Utilisez Gougoule pour traduire des mots, des phrases ou des pages web en un instant, gratuitement et sans inscription.
					</p>
					<button
						type="button"
						className="mt-6 px-8 py-3 text-yellow-300 bg-blue-700 rounded-lg shadow hover:bg-blue-800 hover:text-yellow-200"
					>
						Commencez votre traduction
					</button>
				</div>
			</section>
			<section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-blue-800">Outil de traduction</h2>
          <div className="mt-8 container mx-auto flex flex-col items-center">
            <input
            autoComplete="off"
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
			<section className="py-16 bg-yellow-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold text-blue-700">Comment ça marche ?</h2>
					<div className="grid gap-8 mt-10 md:grid-cols-3">
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-700">Étape 1</h3>
							<p className="mt-2 text-gray-600">Entrez votre texte dans la langue d'origine.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-700">Étape 2</h3>
							<p className="mt-2 text-gray-600">Choisissez la langue de traduction.</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-blue-700">Étape 3</h3>
							<p className="mt-2 text-gray-600">Recevez votre traduction immédiatement.</p>
						</div>
					</div>
				</div>
			</section>

			<section className="py-16 text-center">
				<h2 className="text-3xl font-bold text-blue-700">Langues disponibles</h2>
				<p className="mt-4 text-lg text-gray-800">
					Traductions disponibles dans les langues suivantes :
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

			<section className="py-16 bg-yellow-100">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-semibold text-blue-700">Avis de nos utilisateurs</h2>
					<p className="mt-4 text-gray-700">Découvrez ce que nos utilisateurs disent :</p>
					<div className="mt-6 space-y-6">
						<blockquote className="bg-white p-4 rounded-lg shadow-md">
							<p className="text-gray-600">“Une expérience de traduction fluide et rapide !”</p>
							<footer className="mt-2 text-gray-500">- Léa P.</footer>
						</blockquote>
						<blockquote className="bg-white p-4 rounded-lg shadow-md">
							<p className="text-gray-600">“Idéal pour traduire en quelques secondes !”</p>
							<footer className="mt-2 text-gray-500">- Thomas D.</footer>
						</blockquote>
					</div>
				</div>
			</section>

			<footer className="bg-blue-700 py-6">
				<div className="container mx-auto text-center">
					<p className="text-yellow-300">
						Contactez-nous pour plus d'informations : 
						<button className="underline hover:text-white ml-2">info@gougoule-translate.be</button>
					</p>
					<p className="text-yellow-300">
						&copy; {new Date().getFullYear()} Gougoule Traduction. Tous droits réservés.
					</p>
				</div>
			</footer>
		</body>
		</IKContext>
	);
};

export default GoulougoulouTranslate;

// used in RenderAllWebsites to select the right website
GoulougoulouTranslate.componentName = "goulougoulouTranslate";
// used in tab as site title
GoulougoulouTranslate.title = "Gougoule Traduction | Traduction gratuite instantanée";
// used in searchEngine
GoulougoulouTranslate.excerpt = "Traduisez des mots, phrases et pages Web gratuitement avec Gougoule.";

// Mots clés
GoulougoulouTranslate.motsCles = [
    "traduction",
    "tradution", // Variante de mauvaise orthographe
    "traduire",
    "traducteur",
    "traducteurs",
    "texte",
    "textes",
    "texe", // Variante de mauvaise orthographe
    "phrase",
    "phrases",
    "page",
    "pages",
    "web",
    "internet",
    "site",
    "sites",
    "gratuit",
    "gratuite",
    "libre",
    "sanspaiement", // Variante sans espace
    "service",
    "services",
    "outil",
    "outils",
    "logiciel",
    "logiciels",
    "automatique",
    "automatisation",
    "rapide",
    "efficace",
    "fiable",
    "multilingue",
    "multilanguage", // Variante anglaise
    "langue",
    "langues",
    "idiome", // Synonyme
    "contenu",
    "contenus",
    "conversion",
    "convertir",
    "interprétation",
    "interpretation", // Variante sans accent
    "communication",
    "pittige",
    "salade"
];

GoulougoulouTranslate.favicon = <IconSearchEngine />;

GoulougoulouTranslate.images = [
	"Gougoule Translate.webp"
]

GoulougoulouTranslate.pages = [
	{
		title: "Gougoule Traduction",
		url: "https://gougoule-translate.be/fr",
	},
];
