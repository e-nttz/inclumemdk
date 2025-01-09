import { ReactElement, useState, useEffect } from "react";
import Window from "@/components/Os/Window";
import ChildVirusIcon from "@/assets/icons/app-antivirus.svg?react";
import ChildVirusLogo from "@/assets/icons/app-antivirus.svg";
import AnalyseReussie from "@/assets/icons/app-antivirus-telechargement-ok.svg";
import Error from "@/assets/icons/app-antivirus-error.svg";
import Ellipse from "@/assets/icons/app-antivirus-ellipse.svg";
import Good from "@/assets/icons/app-antivirus-analyse-good.svg";
import Separator from "@/assets/icons/app-antivirus-separator.svg";

import { getAntivirusInstalledFromLocalStorage, saveAntivirusInstalledToLocalStorage, resetAntivirusInstalledInLocalStorage } from "@/utils/localeStorage";
import { useOS } from "@/providers/InclumeOS";

interface AppProps<T> extends React.FC<T> {
  title: string;
  icon: ReactElement;
  unmount?: boolean;
}

interface ChildVirusProps {
  content?: string;
}

const ChildVirus: AppProps<ChildVirusProps> = () => {
  const { openedApps } = useOS();
  const appData: any = Object.entries(openedApps).find(
    (x) => x[1].title === ChildVirus.title
  );

  const [installationStarted, setInstallationStarted] = useState<boolean>(false);
  const [installationFinished, setInstallationFinished] = useState<boolean>(false);
  const [analyseStarted, setAnalyseStarted] = useState<boolean>(false);
  const [analyseEnded, setAnalyseEnded] = useState<boolean>(false);
  const [analyseResult, setAnalyseResult] = useState<boolean>(false); 
  // État pour suivre si l'antivirus est installé
  const [antivirusInstalled, setAntivirusInstalled] = useState<boolean>(false);

  // Charger l'état initial de AntivirusInstalled au montage du composant
  useEffect(() => {
    const installed = getAntivirusInstalledFromLocalStorage();
    setAntivirusInstalled(installed);
  }, []);

  // Fonction pour activer l'antivirus
  const activateAntivirus = () => {
    saveAntivirusInstalledToLocalStorage(true);
    setAntivirusInstalled(true);
  };

  // Fonction pour désactiver/réinitialiser l'antivirus
  const deactivateAntivirus = () => {
    saveAntivirusInstalledToLocalStorage(false);
    setAntivirusInstalled(false);
  };

  // Barre de chargement
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (installationStarted) {
      let interval: ReturnType<typeof setInterval>;

      const startProgress = () => {
        interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setInstallationStarted(false);  
              setInstallationFinished(true);
              setProgress(0);
              return 100;
            }
            return prev + 1;
          });
        }, 200);
      };

      startProgress();

      return () => clearInterval(interval);
    }
  }, [installationStarted]);

  // Analyse antivirus
  const [progressAnalyse, setProgressAnalyse] = useState(0);
  useEffect(() => {
    if (analyseStarted) {
      let interval: ReturnType<typeof setInterval>;

      const startProgress = () => {
        interval = setInterval(() => {
          setProgressAnalyse((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              setAnalyseEnded(true);  
              return 100;
            }
            return prev + 1; // Incrémentation par 1% toutes les 200ms
          });
        }, 200);
      };

      startProgress();
      return () => clearInterval(interval); // Nettoyage en cas de démontage
    }
  }, [analyseStarted]);

  const getStatus = (step: "os" | "virus" | "advanced") => {
    if (step === "os" && progressAnalyse >= 33) {
      return { img: Good, text: "Parfait", color: "text-green-500" };
    }
    if (step === "virus" && progressAnalyse >= 66) {
      return { img: Error, text: "Problèmes trouvés", color: "text-[#7F0000]" };
    }
    if (step === "advanced" && progressAnalyse >= 100) {
      return { img: Error, text: "Problèmes trouvés", color: "text-[#7F0000]" };
    }
    return { img: Ellipse, text: "", color: "" };
  };

  return (
    <Window appName={ChildVirus.title}>
      <div className="flex w-full bg-[#F9F9F9] relative h-full overflow-hidden">
        {antivirusInstalled && (
          <div className="flex flex-col items-center justify-center w-full mt-8">
          <div className="flex flex-col items-center">
            <img
              src={AnalyseReussie}
              alt="Analyse réussie"
              className="mb-8"
            />
            <h1 className="text-6xl w-7/12 text-center">
              Votre système est entièrement protégé.
            </h1>
            <p className="text-lg font-semibold mt-4">
              Dernière analyse complète : Aujourd'hui
            </p>
            <p className="text-lg font-semibold mt-4">
              Statut de la protection : Activée et à jour
            </p>
            <p className="mt-8">
              Vous êtes en sécurité. Continuez à utiliser votre appareil en toute tranquillité.
            </p>
          </div>
        </div>
        )}
        {!antivirusInstalled && (
          <div className="flex justify-center items-center w-full h-full">
            {!installationStarted && !installationFinished && !analyseStarted && !analyseResult &&(
              <div className="instalaltion flex flex-col items-center justify-center w-[80%]">
                <img src={ChildVirusLogo} alt="Logo ChildVirus" className="w-24 mb-4"/>
                <h1 className="text-6xl w-7/12 text-center">
                  ChildVirus
                </h1>
                <p className="text-lg font-semibold w-6/12 text-center mt-16 mb-8">
                  En cliquant sur installer, vous confirmez avoir lu et approuver la Politique de confidentialité de ChildVirus, qui régissent le téléchargement et l’utilisation des produits concernés.
                </p>
                <button className="bg-[#FF7100] text-white px-8 py-2 rounded-3xl cursor-pointer" onClick={
                  () => {
                    setInstallationStarted(true);
                  }
                }>Installer</button>
              </div>
            )}
            {installationStarted && (
              <div className="instalaltion flex flex-col items-center justify-center w-[80%]">
                <h1 className="text-6xl w-7/12 text-center">
                  Installation...
                </h1>
                <p className="text-lg font-semibold w-6/12 text-center mt-16 mb-8">
                  Cette opération peut prendre quelques minutes.
                </p>

                {/* Barre de chargement */}
                <div className="w-full flex flex-col items-center">
                  <div className="relative w-full h-3 bg-black rounded-lg overflow-hidden mt-4">
                    <div
                      id="progress-bar"
                      className="absolute top-0 left-0 h-full bg-green-500 rounded-lg transition-all duration-[200ms]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-right w-full mt-2 text-sm font-semibold">
                    {progress}%
                  </p>
                </div>
              </div>
            )}
            {installationFinished && (
              <div className="instalaltion flex flex-col items-center justify-center w-[80%]">
                <h1 className="text-6xl w-7/12 text-center">
                  Lancer votre première analyse.
                </h1>
                <p className="text-lg font-semibold w-6/12 text-center mt-16 mb-8">
                  En cliquant sur Analyser, vous protégez votre système en détectant et éliminant les menaces potentielles pour garantir votre sécurité et vos données.
                </p>
                <button className="bg-[#FF7100] text-white px-8 py-2 rounded-3xl cursor-pointer" onClick={
                  () => {
                    setAnalyseStarted(true);
                    setInstallationFinished(false);
                  }
                }>Lancer l'analyse</button>
              </div>
            )}
            {analyseStarted && (
              <div className="instalation flex flex-col items-center justify-center w-[80%]">
                <div className="relative flex w-[80%] items-center">
                  {/* Système d'exploitation */}
                  <div className={`flex flex-col items-center absolute left-0 bg-[#F9F9F9] z-10 ${progressAnalyse < 33 ? "transform translate-y-[-18px]" : ""}`}>
                    <img
                      src={getStatus("os").img}
                      alt="analyse en cours"
                      className="w-14 bg-[#F9F9F9]"
                    />
                    <p className="mt-4 font-semibold">Système d'exploitation</p>
                    {progressAnalyse >= 33 && (
                      <p className={`mt-4 font-semibold ${getStatus("os").color}`}>
                        {getStatus("os").text}
                      </p>
                    )}
                  </div>

                  {/* Séparateur central */}
                  <div className="absolute w-[calc(100%-2rem)] h-1 bg-[#F9F9F9] top-1/2 transform translate-y-[-38px]">
                    <img src={Separator} alt="analyse en cours" className="w-full h-1 mx-auto" />
                  </div>

                  {/* Virus et malwares */}
                  <div className={`flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 bg-[#F9F9F9] ${progressAnalyse < 66 ? "transform translate-y-[-18px]" : ""}`}>
                    <img
                      src={getStatus("virus").img}
                      alt="analyse en cours"
                      className="w-14 bg-[#F9F9F9]"
                    />
                    <p className="mt-4 font-semibold">Virus et malwares</p>
                    {progressAnalyse >= 66 && (
                      <p className={`mt-4 font-semibold ${getStatus("virus").color}`}>
                        {getStatus("virus").text}
                      </p>
                    )}
                  </div>

                  {/* Problèmes avancés */}
                  <div className={`flex flex-col items-center absolute right-0 bg-[#F9F9F9] ${progressAnalyse < 100 ? "transform translate-y-[-18px]" : ""}`}>
                    <img
                      src={getStatus("advanced").img}
                      alt="analyse en cours"
                      className="w-14 bg-[#F9F9F9]"
                    />
                    <p className="mt-4 font-semibold">Problèmes avancés</p>
                    {progressAnalyse >= 100 && (
                      <p className={`mt-4 font-semibold ${getStatus("advanced").color}`}>
                        {getStatus("advanced").text}
                      </p>
                    )}
                  </div>
                </div>
                
                {!analyseEnded && (
                  <>
                    <h1 className="text-6xl w-7/12 text-center mt-56">
                      Recherche de menaces en cours... {progressAnalyse}%
                    </h1>
                    <p className="text-lg font-semibold w-6/12 text-center mt-48">
                      Ne fermez pas cette fenêtre pendant l'analyse.
                    </p>
                  </>
                )}
                {analyseEnded && (
                  <>
                    <p className="text-lg font-semibold w-6/12 text-center mt-36 mb-12">Vos paramètres actuels pourraient exposer votre sécurité et confidentialité. Appliquez ces changements afin de protéger votre PC.</p>
                    <div className="bg-[#FF7100] bg-opacity-80 flex items-center p-4 w-[70%]">
                      <p className="text-2xl mr-8">✅</p>
                      <div className="w-9/12">
                        <h2 className="text-xl text-white">Des logiciels malveillants et autres menaces pourraient s’exécuter dans la mémoire de votre PC</h2>
                        <p className="text-white mt-2">Activez la Prévention de l’exécution des données pour détecter les codes malveillants (l’activation se
                          fere aprés le redémarrage du PC).</p>
                      </div>
                    </div>
                    <div className="bg-[#FF7100] bg-opacity-80 flex items-center p-4 w-[70%] mt-4">
                      <p className="text-2xl mr-8">✅</p>
                      <div className="w-9/12">
                        <h2 className="text-xl text-white">D’autres personnes pourraient voir vos notifications lorsque vous n’êtes pas devant votre pc</h2>
                        <p className="text-white mt-2">Si vous souhaitez les garder privées, désactivez les notifications sur l’écran de verrouillage.</p>
                      </div>
                    </div>
                    <button className="bg-[#FF7100] text-white px-10 py-4 rounded-3xl cursor-pointer mt-12 text-xl" onClick={() => {
                      setAnalyseStarted(false);
                      setAnalyseEnded(false);
                      setAnalyseResult(true);
                    }}>Résoudre les problèmes</button>
                  </>
                )}
              </div>
            )}
            {analyseResult && (
              <div className="instalation flex flex-col items-center justify-center w-[80%]">
                <div className="relative flex flex-col w-[80%]">
                  <h1 className="text-6xl w-7/12">
                    Nous avons terminé l’analyse de l’appareil
                  </h1>
                  <p className="text-2xl font-semibold w-6/12 mt-12 mb-12">
                    Pensez à exécuter de nouveau une analyse bientôt pour résoudre de futur problèmes.
                  </p>
                  <div className="flex items-center mb-4">
                    <img src={Good} alt="Ok" className="mr-4 w-8"/>
                    <p className="text-lg">0 probléme de paramètres systèmme trouvé</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <img src={Good} alt="Ok" className="mr-4 w-8"/>
                    <p className="text-lg">2 menace de malware trouvées</p>
                  </div>
                  <div className="flex items-center mb-4">
                    <img src={Good} alt="Ok" className="mr-4 w-8"/>
                    <p className="text-lg">11 problèmes avancés trouvés</p>
                  </div>
                  {/* <div className="bg-[#FF7100] bg-opacity-80 flex items-center justify-center p-4 mt-4">
                    <div className="">
                      <h2 className="text-xl text-white">Contribuez à protéger votre PC en programmant votre analyse</h2>
                      <p className="text-white mt-2">Actuellement programmée tous les 28 jours du mois à 12h00.</p>
                    </div>
                  </div> */}
                  <div className="w-full flex justify-center">
                    <button className="bg-[#FF7100] text-white px-10 py-4 rounded-3xl cursor-pointer mt-12 text-xl w-96" onClick={() => {
                        setAnalyseResult(false);
                        setAntivirusInstalled(true);
                      }}>Fermer l'analyse</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Window>
  );
};

ChildVirus.unmount = true;
ChildVirus.title = "ChildVirus";
ChildVirus.icon = <ChildVirusIcon />;
export default ChildVirus;