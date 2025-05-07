import { createContext, memo, useContext, useEffect, useState, useRef } from "react";
import dataSteps from "../../data/steps.json";
import { useNotification } from "../notifications";
import { useBeaconListener } from "@/helpers/beacon";
import { getNextStep, saveStep } from "@/lib/client/quiz";
import { useAuth } from "../auth";
import { beacon } from "@/helpers/beacon";
import MascotteNeutre from "@/assets/mascotte/mascotte_neutre.svg";
import MascotteIndice from "@/assets/mascotte/mascotte_indice.svg"

export const StepsListenerContext = createContext({});

export const StepsListenerProvider = memo(({ children }) => {
    const [disabled, setDisabled] = useState(false);
    const [showHintButton, setShowHintButton] = useState(true);
    const [showSkipButton, setShowSkipButton] = useState(true);
    const { addNotification } = useNotification();
    const timeoutRef = useRef<number | null>(null); // Stocke l'ID du timeout pour éviter les doublons
    const [steps] = useState(dataSteps);
    const { session } = useAuth();
    const [lastTrigger, setLastTrigger] = useState<any[]>([]);
    const [currentStepId, setCurrentStepId] = useState(null);
    const [stepType, setStepType] = useState(null);
    const [currentStep, setCurrentStep] = useState(null);

    useEffect(() => {
        const fetchNextStep = async () => {
            if (session) {
                const nextStep = await getNextStep(session);
                setCurrentStep(nextStep);
                setCurrentStepId(nextStep.id);
                setStepType(nextStep.step_type);
            }
        };
        if (lastTrigger.length > 0) {
            fetchNextStep();
        }
    }, [lastTrigger, session]);

    // Écouteur de beacon
    useBeaconListener("triggerStep", (e) => {
        setLastTrigger((prevState) => [...prevState, e]);
    });
    
    // 🔹 Fonction pour récupérer un indice
    const handleGetHint = async () => {
        const nextStep = await getNextStep(session);
        const currentStepHints = steps.find(step => step.step_id === nextStep.id);
        if (currentStepHints) {
            let hintFound = false;
            for (let i = 0; i < currentStepHints.items.length; i++) {
                const item = currentStepHints.items[i];
                const isMatch = lastTrigger.some(trigger => trigger.detail?.value === item.value);

                if (!isMatch) {
                    addNotification({
                        title: item.clues[0].title,
                        message: item.clues[0].message,
                        visualHint: item.clues[0].visualHint
                    });
                    hintFound = true;
                    if(i === currentStepHints.items.length - 1){
                        setLastTrigger([]);
                    }
                    return;
                }
            }

            // Si aucun indice trouvé, on ne déclenche pas le timeout
            if (!hintFound) return;
        }
        setShowHintButton(false);
    };

    // Déclencher le bouton d'indice seulement si nécessaire
    useEffect(() => {
		const fetchCurrentStepHints = async () => {
			const currentStep = await getNextStep(session);
			const currentStepHints = steps.find(step => step.step_id === currentStep.id);
	
			// Vérifie si l'étape actuelle a bien des indices avant d'afficher le bouton
			if (!showHintButton && currentStepHints && currentStepHints.items.length > 0) {
				console.log("Indices disponibles pour cette étape:", currentStepHints.items);
	
				timeoutRef.current = window.setTimeout(() => {
					setShowHintButton(true);
				}, 60000);
			}
		};
	
		fetchCurrentStepHints();
	
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [showHintButton, currentStepId]); // Ajout de `currentStepId` pour suivre les changements d'étape	

    const invalidateStepProb = async () =>{
        await saveStep(session, {
            test_step_template_id: 66,
            is_successful: false,
        });
    }
    // 🔹 Fonction pour passer une étape
    const skipStep = async () => {
        const step = await getNextStep(session);
        await saveStep(session, {
            test_step_template_id: step.id,
            is_successful: false,
        });
        if(step.id === 1){
            setTimeout(() => {
                addNotification({
                    title: "Informez votre ami !",
                    message:
                        "Si tu ne trouves pas l’adresse, ce n’est pas grave. Envoie un message à ton ami pour le prévenir que tu ne trouves pas l’adresse dont il a besoin.",
                });
            }, 5000)
        }
        if(step.id === 4 || step.id === 5 || step.id === 6){
            setTimeout(() => {
                beacon("message", {
                    id: Math.random(),
                    sender: 0,
                    content: "Je viens de me rappeler que dans mon dossier “vacances”, il y a un fichier “info resto” avec toutes les informations sur ce restaurant, peux-tu me l’envoyer par mail? Mon adresse est vincent@inclume.be.",
                });
                addNotification({
                    title: "Nouveau message !",
                    message:
                        "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
                });
            }, 5000)
        }
        if(step.id === 3 || step.id === 7 || step.id === 42 || step.id === 2 || step.id === 46){
            setTimeout(() => {
                beacon("message", {
                    id: Math.random(),
                    sender: 0,
                    content: "Finalement, mon ami a retrouvé l’adresse, nous avons trouvé le restaurant, merci quand même ! Sur le pc de la maison, il y’a un dossier “vacances”. Tu y trouveras la fiche client que je devais compléter pour notre réservation à l’hôtel à Namur, mais j’ai totalement oublié d’ajouter le nom de famille de mon amie Céline. Pourrais-tu ajouter “Dupont” au document ? Peux-tu enregistrer le fichier en le renommant “dupont” ? Tu ne dois rien envoyer, le dossier est déjà enregistré sur mon Cloud.",
                });
                addNotification({
                    title: "Nouveau message !",
                    message:
                        "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
                });
            }, 5000)
        }
        if(step.id === 8 || step.id === 10 || step.id === 11){
            setTimeout(() => {
                beacon("message", {
                    id: Math.random(),
                    sender: 0,
                    content: "Salut, c’est encore moi, nous avons mal organisé nos vacances... Pourrais tu regarder sur internet quelles sont les activités disponibles dans la ville de Namur et nous envoyer le lien (url) de ce que tu as trouvé par mail?",
                });
                addNotification({
                    title: "Nouveau message !",
                    message:
                        "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
                });
            }, 5000)
        }
        if(step.id === 44){
            setTimeout(() => {
                beacon("message", {
                    id: Math.random(),
                    sender: 0,
                    content: "Salut, c’est encore moi, nous avons mal organisé nos vacances... Pourrais tu regarder sur internet quelles sont les activités disponibles dans la ville de Namur et nous envoyer le lien (url) de ce que tu as trouvé par message?",
                });
                addNotification({
                    title: "Nouveau message !",
                    message:
                        "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
                });
            }, 5000)
        }
        if(step.id === 13 || step.id === 45 || step.id === 49 || step.id === 54 || step.id === 59 || step.id === 9 || step.id === 14){
            setTimeout(() => {
                beacon("message", {
                    id: Math.random(),
                    sender: 0,
                    content: `Nous aimerions bien faire cette activité, mais nous devons créer un fichier pour confirmer notre inscription avec nos noms, prénoms et photos d’identité.<br><br> - Peux-tu le faire depuis mon application traitement de texte ?<br> - Tu trouveras les photos d’identité dans le dossier "vacances".<br> - Peux-tu l’enregistrer sur mon cloud ? Je pourrai l’avoir directement sur mon téléphone.<br><br> - Pour rappel, voici nos noms et prénoms :<br> &nbsp;&nbsp;&nbsp;&nbsp;- Vincent Inclume<br> &nbsp;&nbsp;&nbsp;&nbsp;- Céline Dupont.`
                });
                addNotification({
                    title: "Nouveau message !",
                    message:
                        "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
                });
            }, 5000)
        }
        if(step.id === 15 || step.id === 16 || step.id === 17 || step.id === 34 || step.id === 52 || step.id === 53 || step.id === 57 || step.id === 58){
            setTimeout(() => {
				beacon("call", {
					status: "incoming",
				});
			},5000)
        }
        if(step.id === 35 || step.id === 51 || step.id === 55){
            setTimeout(() => {
                beacon("message", {
                    id: Math.random(),
                    sender: 0,
                    content: `Notre réservation pour l’activité est confirmée mais il n’est pas possible de payer sur place. Il faut faire un virement avant le début de l’activité.<br><br> Pourrais tu le faire pour nous? <br>Il faut envoyer 20€ au Compte BE12345678910. Indique “Visiter Namur” en bénéficiaire.<br><br>Pour information, j'utilise la banque BNG. <br><br> Merci! `,
                });
                addNotification({
                    title: "Nouveau message !",
                    message:
                        "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
                });
            }, 5000)
        }
        if(step.id === 37){
            setTimeout(() => {
                beacon("message", {
                    id: Math.random(),
                    sender: 0,
                    content: "Merci grâce à toi nous avons pu commander notre repas. En attendant qu’il soit prêt, j’aimerai montrer les vidéos de mes dernières vacances à Céline mais je n’arrive pas à me connecter au Wifi du resto. Peux-tu m’envoyer le lien d'une page web qui pourrait m’aider à résoudre ce problème?",
                });
                addNotification({
                    title: "Nouveau message !",
                    message:
                        "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
                });
            }, 5000)
        }
        if(step.id === 61 || step.id === 36){
            setTimeout(() => {
              beacon("message", {
                  id: Math.random(),
                  sender: 0,
                  content: "Décidemment ce début de vacances est super épique. Le restaurant n’a aucune carte en français... Peux-tu me traduire le plat “pittige salade” s’il te plait ?",
              });
              addNotification({
                  title: "Nouveau message !",
                  message:
                      "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
              });
          }, 5000)
        }
        if(step.id === 38){
            setTimeout(() => {
				beacon("message", {
					id: Math.random(),
					sender: 0,
					content: "Merci grâce à toi nous avons pu commander notre repas. En attendant qu’il soit prêt, j’aimerai montrer les vidéos de mes dernières vacances à Céline mais je n’arrive pas à me connecter au Wifi du resto. Peux-tu m’envoyer le lien d'une page web qui pourrait m’aider à résoudre ce problème?",
				});
				addNotification({
					title: "Nouveau message !",
					message:
						"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
				});
			},5000)
        }
        if(step.id === 39 || step.id === 50 || step.id === 62){
            setTimeout(() => {
				beacon("message", {
					id: Math.random(),
					sender: 0,
					content: "Tu te rappelles, tu m’avais dit que tu allais installer l’antivirus ChildVirus et faire une analyse de mon pc avec l’antivirus ? Peux-tu le faire maintenant ? Merci!",
				});
				addNotification({
					title: "Nouveau message !",
					message:
						"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
				});
			},5000)
        }
        if(step.id === 40 || step.id === 56 || step.id === 63){
            setTimeout(() => {
                    beacon("message", {
                    id: Math.random(),
                    sender: 0,
                    content: "Merci pour tout ce que tu as fait pour moi aujourd’hui! J’ai un dernier service à te demander, peux-tu changer l’interface de mon bureau pour le mode “sombre”? Si tu n’y arrives, pas ce n’est pas grave, je le ferais moi-même. N’oublie pas d’éteindre l’ordinateur quand tu auras fini!",
                    });
                    addNotification({
                    title: "Nouveau message !",
                    message:
                        "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
                });
            },5000)
        }
        if(step.id === 64){
            setTimeout(() => {
                beacon("message", {
                id: Math.random(),
                sender: 0,
                content: "Merci pour tout ce que tu as fait pour moi, avant de partir, n’oublie pas d’éteindre mon ordinateur!",
                });
                addNotification({
                title: "Nouveau message !",
                message:
                    "<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
            });
        },5000)
        }
    };

    return (
        <StepsListenerContext.Provider value={{}}>
            {children}

            {showHintButton && stepType === "TEST" && (
                <div onClick={handleGetHint} className="cursor-pointer absolute right-2 bottom-20 flex items-center bg-[#EB5D1D] rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white px-6 py-2 mr-3 rounded-l-2xl">
                        <img src={MascotteIndice} className="h-6" alt="" />
                    </div>
                    <p className="text-[#D7EBFF] pr-6 py-2 font-semibold">Obtenir un indice</p>
                </div>
            )}

            {showSkipButton && stepType === "TEST" && (
                <div onClick={() => {
                    if (disabled) return;
                    setDisabled(true);
                    skipStep()
                    setTimeout(() => setDisabled(false), 6500);
                }} className={`cursor-pointer absolute right-2 bottom-40 flex items-center 
                    bg-[#EB5D1D] rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-300
                    ${disabled ? "pointer-events-none opacity-50" : ""}`}>
                    <div className="bg-white px-6 py-2 mr-3 rounded-l-2xl">
                        <img src={MascotteNeutre} className="h-6" alt="" />
                    </div>
                    <p className="text-[#D7EBFF] pr-6 py-2 font-semibold">
                        {disabled ? "Chargement..." : "Passer cette étape"}
                    </p>                
                </div>
            )}
        </StepsListenerContext.Provider>
    );
});

export const useStepsListener = () => useContext(StepsListenerContext);