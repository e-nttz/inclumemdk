import { useState } from "react";
import IconSearchEngine from "@/assets/icons/app-antivirus.svg?react";
import Logo from "@/assets/icons/app-antivirus.svg";
import Ok from "@/assets/icons/app-antivirus-ok.svg";
import Analyse from "@/assets/icons/app-antivirus-analyse.svg";
import Protection from "@/assets/icons/app-antivirus-protection.svg";
import Gratuit from "@/assets/icons/app-antivirus-gratuit.svg";
import Integration from "@/assets/icons/app-antivirus-integration.svg";
import Child from "@/assets/icons/app-antivirus-child.svg";
import Telechargement from "@/assets/icons/app-antivirus-telechargement.svg";
import TelechargementReussi from "@/assets/icons/app-antivirus-telechargement-ok.svg";
import Back from "@/assets/icons/back.svg"

const ChildVirus = () => {
  const [telechargement, setTelechargement] = useState(false);
  return (
    <body className="flex flex-col items-center py-10">
      <div className="w-full flex flex-col items-center">
        <header className="w-[80%] flex items-center justify-between">
          <div className="flex items-center">
            <img src={Logo} alt="Logo de Child Virus" className="w-24 h-24"/>
            <p className="text-3xl font-bold ml-4">ChildVirus</p>
          </div>
          {telechargement && (
            <div className="cursor-pointer pb-6 flex items-center" onClick={() => {
              setTelechargement(false);
            }}>
              <img src={Back} alt="retour" className="w-10 h-10"/>
              <p className="underline text-3xl">Retour</p>
          </div>
          )}
        </header>
        {!telechargement && (
          <>
          <div className="w-full mt-24 flex flex-col items-center border-b-2 border-[#FF7100] pb-32">
          <div className="w-[80%] flex flex-col items-center">
            <h1 className="text-center text-6xl w-1/2">Protégez ce qui compte le plus avec ChildVirus</h1>
            <p className="text-center w-4/12 my-8">Téléchargez ChildVirus, Antivirus Gratuit pour profiter d'une protection en temps réel contre les virus, les e-mails infectés, les sites web frauduleux, et bien plus encore.</p>
            <button className="bg-[#FF7100] text-white px-8 py-2 rounded-3xl cursor-pointer" onClick={() => setTelechargement(true)}>Télécharger</button>
          </div>
        </div>
        <div className="w-full flex justify-center border-b-2 border-[#FF7100] py-32">
          <div className="w-[80%] flex justify-between">
            <div className="w-5/12">
              <h2 className="text-4xl mb-8">Optez pour un antivirus gratuit, aussi discret qu'efficace</h2>
              <p className="text-xl">De nombreux antivirus consommment autant de ressources et causent autant de perturbations que les menaces qu'ils combattent. ChildVirus Antivirus Gratuit est conçu pour protéger votre système sans perturber votre travail ni accaparer votre attention.</p>
            </div>
            <div className="w-5/12 border rounded-sm">
              <div className="border-b p-6">
                <div className="">
                  <h3 className="text-lg">Premium</h3>
                  <p className="opacity-60">A venir prochainement</p>
                  <p className="my-8"><span className="text-3xl">€4</span>/mois</p>
                  <button className="bg-[#FF7100] text-white px-8 py-2 rounded w-full">Nous contacter</button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="uppercase text-sm mb-6">Ce qui est inclus</h3>
                <p className="text-xs mb-4 opacity-70">✅ Protection de vos identifiants et mots de passe.</p>
                <p className="text-xs mb-4 opacity-70">✅ Blocage des publicités nocives.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center border-b-2 border-[#FF7100] py-32">
          <div className="w-[80%]">
            <div className="w-7/12">
              <h2 className="text-4xl mb-8">Comment télécharger ?</h2>
              <div className="flex items-center mb-6">
                <img src={Ok} alt="Etape d'installation" className="w-12 h-12 mr-6"/>
                <p className="text-lg">Téléchargez : Cliquez sur le bouton de téléchargement en haut de la page pour obtenir l'assitant d'installation.</p>
              </div>
              <div className="flex items-center mb-6">
                <img src={Ok} alt="Etape d'installation" className="w-12 h-12 mr-6"/>
                <p className="text-lg">Ouvrez : Une fois le fichier téléchargé, double-cliquez dessus pour lancer l'installation.</p>
              </div>
              <div className="flex items-center mb-6">
                <img src={Ok} alt="Etape d'installation" className="w-12 h-12 mr-6"/>
                <p className="text-lg">Installez : Suivez les instructions qui s'affichent à l'écran pour finaliser l'installation.</p>
              </div>
              <div className="flex items-center">
                <img src={Ok} alt="Etape d'installation" className="w-12 h-12 mr-6"/>
                <p className="text-lg">Lancez votre premire analyse : Une fois l'installation terminée, exécutez votre première analyse pour sécuriser immédiatement votre PC.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-32">
          <div className="w-[80%] flex flex-col items-center">
            <h2 className="text-5xl mb-8">Qualité technique unique</h2>
            <div className="flex justify-between w-full flex-wrap">
              <div className="w-5/12 mt-24">
                <img src={Protection} alt="protection antivirus" className="w-10"/>
                <h4 className="text-xl my-2">Une protection discrète et efficace</h4>
                <p>ChildVirus vous tient informé des menaces sans vous interrompre constamment. Contrairement à d'autres antivirus, il vous avertit subtilement des risques, vous permettant de continuer votre travail en toute sérénité.</p>
              </div>
              <div className="w-5/12 mt-24">
                <img src={Analyse} alt="analyse antivirus" className="w-10"/>
                <h4 className="text-xl my-2">Des analyses rapides et légères</h4>
                <p>Oubliez les analyses qui ralentissent votre système! Avec ChildVirus, profitez d'analyses personnalisables qui détectent toutes les menaces tout en maintenant des performances optimales, sans vous bloquer.</p>
              </div>
              <div className="w-5/12 mt-16">
                <img src={Integration} alt="integration antivirus" className="w-10"/>
                <h4 className="text-xl my-2">Protection qui s'intègre parfaitement</h4>
                <p>Avec ChildVirus, pas de perturbations ni d'interférences inutiles. Toutes les fonctionnalités restent en arrière-plan jusqu'à ce que vous décidiez de les utiliser, garantissant une expérience de navigation fluide.</p>
              </div>
              <div className="w-5/12 mt-16">
                <img src={Gratuit} alt="antivirus gratuit" className="w-10"/>
                <h4 className="text-xl my-2">Antivirus 100% gratuit</h4>
                <p>Profitez d'une protection complète sans frais cachés ni période d'essai. Téléchargez ChildVirus gratuitement et installez-le en quelques clics pour une sécurité immédiate.</p>
              </div>
            </div>
            <div className="bg-[#FF7100] text-white px-8 py-12 rounded-3xl mt-48 w-full flex flex-col items-center">
              <div className="flex items-center">
                <img src={Child} alt="Logo antivirus childAntivirus" className="w-10"/>
                <h3 className="text-2xl ml-4">ChildVirus Antivirus Gratuit</h3>
              </div>
              <p className="my-4">Protégez les internautes partout dans le monde</p>
              <p className="text-lg w-[60%] text-center">Avec notre technologie en temps réel, alimentée par une communauté de 435 millions d'utilisateurs, ChildVirus bloque chaque jour plus de 66 millions de menaces pour assurer votre sécurité en ligne.</p>
              <div className="flex items-center mt-12 bg-white px-8 py-4 rounded-3xl cursor-pointer" onClick={() => setTelechargement(true)}>
                <img src={Telechargement} alt="bouton téléchargement" className="w-6 mr-4"/>
                <p className="text-[#FF7100]">Télécharger gratuitement</p>
              </div>
            </div>
            <div className="w-full bg-[#D9D9D9] bg-opacity-15 flex justify-center items-center mt-12 px-8 pt-6 rounded-3xl">
              <img src={Logo} alt="Logo antivirus" className="w-8 mr-8"/>
              <p>© 2024 ChildVirus. All rights reserved.</p>
            </div>
          </div>
        </div>
        </>
        )}
        {telechargement && (
          <div className="w-full mt-24 flex flex-col items-center pb-32">
            <div className="w-[80%] flex flex-col items-center">
              <img src={TelechargementReussi} alt="Succès du téléchargement" />
              <h1 className="text-center text-6xl w-1/2">Vous y êtes presques !</h1>
              <p className="text-center w-4/12 my-8">Pour terminer l’installation, cliquez sur le fichier téléchargé et suivez les instruction qui s’affichent à l’écran.</p>
            </div>
          </div>
        )}
      </div>
    </body>
  );
};

export default ChildVirus;

// used in RenderAllWebsites to select the right website
ChildVirus.componentName = "childVirus";
// used in tab as site title
ChildVirus.title = "L'antivirus qui vous protège";
// used in searchEngine
ChildVirus.excerpt = "Téléchargez dès maintenant ChildVirus et naviguez de manière sûre.";

// Mots clés
ChildVirus.motsCles = [
  "childvirus", 
  "antivirus",
  "child",
  "virus"
];

// Site favicon icon
ChildVirus.favicon = <IconSearchEngine />;

ChildVirus.pages = [
  {
    title: "Child Virus",
    url: "https://www.childvirus.be/",
  },
];
