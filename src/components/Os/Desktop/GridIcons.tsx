import { apps } from "@/components/Apps";
import { useOS } from "@/providers/InclumeOS";
import { getAntivirusInstalledFromLocalStorage } from "@/utils/localeStorage";
import { useNotification } from "@/providers/notifications";
import { useState, useEffect } from "react";
import DossierVacances from "@/assets/icons/colors/folder.svg"
const GridIcons = () => {
  const { notifications } = useNotification();
  const { launchApp } = useOS();
  const [messageNotification, setMessageNotification] = useState(false); // Initialisez à false

  // Vérifiez s'il y a un nouveau message et mettez à jour l'état de messageNotification
  useEffect(() => {
    // Vérifier si une notification de type message existe déjà
    const newMessageNotification = notifications.some(
      (notif) =>
        notif.title === "Nouveau message !" &&
        notif.message ===
          "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter."
    );

    if (newMessageNotification) {
      setMessageNotification(true); // Si un nouveau message est détecté, mettez à jour l'état à true
    }
  }, [notifications]); // Recalculez chaque fois que `notifications` change

  return (
    <ul className="absolute top-0 left-0 flex flex-col flex-wrap items-start justify-start max-h-full gap-4 p-4 pb-0">
      {Object.entries(apps)
        .filter(([key]) => {
          // Filtrer ChildVirus si antivirus non installé
          if (key === "childVirus" && !getAntivirusInstalledFromLocalStorage()) {
            return false;
          }
          return true;
        })
        .map(([, value]: any) => (
          <li key={Math.random()}>
            <button
              className="w-[100px] h-[100px] flex flex-col items-center justify-center p-4 transition duration-150 rounded group hover:bg-white/30 focus:bg-white/30 active:bg-white/75 dark:hover:bg-white/25 dark:active:bg-white/50 cursor-default"
              onDoubleClick={() => {
                launchApp({
                  title: value.title,
                  icon: value.icon,
                });

                // Si l'application lancée est "Message", réinitialisez la notification
                if (value.title === "Message") {
                  setMessageNotification(false); // Réinitialiser l'état de notification à false
                }
              }}
            >
              <figure className="w-16 h-16 p-1 mb-2 relative">
                {value.icon}
                {value.title === "Message" && messageNotification && (
                  <div className="flex items-center justify-center text-xs w-5 h-5 bg-[#FB4343] rounded-[50%] text-white font-bold absolute top-0 right-0">
                    
                  </div>
                )}
              </figure>
              <span className="text-[12px] text-white">{value.title}</span>
            </button>
          </li>
        ))}
        {/* <li key={Math.random()}>
          <button className="w-[100px] h-[100px] flex flex-col items-center justify-center p-4 transition duration-150 rounded group hover:bg-white/30 focus:bg-white/30 active:bg-white/75 dark:hover:bg-white/25 dark:active:bg-white/50 cursor-default"
            onDoubleClick={
              () => {
                launchApp({
                  title: apps.explorer.title,
                  icon: apps.explorer.icon,
                  defaultContent: "vacances"
                })
              }
            }>
            <figure className="w-16 h-16 p-1 mb-2 relative">
                <img src={DossierVacances} alt="" className="w-full"/>
            </figure>
            <span className="text-[12px] text-white">Vacances</span>
          </button>
        </li> */}
    </ul>
  );
};

export default GridIcons;
