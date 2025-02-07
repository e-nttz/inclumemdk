// import { database } from "@/lib/client";
// import {
// 	createContext,
// 	memo,
// 	useCallback,
// 	useContext,
// 	useEffect,
// 	useMemo,
// 	useState,
// } from "react";

// import dataSteps from "../../data/steps.json";
// import { useBeaconListener } from "@/helpers/beacon";
// import { useNotification } from "../notifications";

// interface Step {
// 	step_id: number;
// 	items: {
// 		value: string;
// 		clues: Clue[];
// 	}[];
// }

// export const StepsListenerContext = createContext<StepsListenerContextType>({
// 	pauseMode: false,
// 	setPauseMode: () => {},
// 	setTimer: () => {},
// 	clearTimer: () => {},
// });

// export const StepsListenerProvider = memo(({ children }) => {
// 	const [, setTestStepTemplate] = useState<TestStepTemplate | null>(null);
// 	const [pauseMode, setPauseMode] = useState<boolean>(false);
// 	// const [timer, setTimer] = useState<number>(0);
// 	const [steps] = useState<Step[]>(dataSteps);
// 	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
// 	const { addNotification } = useNotification();

// 	// Get session storage
// 	const sessionId = window.sessionStorage.getItem("session");
// 	const [currentSession, setCurrentSession] = useState<Session | null>(null);

// 	// Effect to load or create the session
// 	useEffect(() => {
// 		if (sessionId) {
// 			const sessionData = localStorage.getItem(sessionId);
// 			if (sessionData) {
// 				setCurrentSession(JSON.parse(sessionData));
// 				setTimer(JSON.parse(sessionData)?.timer || 0);
// 			} else {
// 				const newSession = {
// 					currentStep: 0,
// 					currentStepIndex: 0,
// 					timer: 0,
// 					cluesShowed: 0,
// 					currentScore: 0,
// 				};
// 				setCurrentSession(newSession);
// 				localStorage.setItem(sessionId, JSON.stringify(newSession));
// 			}
// 		}
// 	}, [sessionId]);

// 	// Effect to show the clues
// 	const [timer, setTimer] = useState(0); // Timer avec état
// 	const [intervalId, setIntervalId] = useState(null); // Pour gérer l'interval

// 	useEffect(() => {
// 		if (!pauseMode && currentSession) {
// 			const currentStep = steps.find(
// 				(step) => step.step_id === currentSession?.currentStep + 1
// 			);
// 			const currentClues = currentStep?.items[currentStepIndex]?.clues;

// 			// Nettoyer tout interval précédent
// 			if (intervalId) {
// 				clearInterval(intervalId);
// 			}
			
// 			// Démarrer un nouvel interval
// 			const newInterval = setInterval(() => {
// 				setTimer((prevTimer) => {
// 					const newTimer = prevTimer + 1;

// 					// Vérifier s'il y a des indices à afficher
// 					const currentClue = currentClues?.find(
// 						(clue) => clue.time_launched === newTimer
// 					);
// 					if (currentClue) {
// 						addNotification({
// 							title: currentClue.title,
// 							message: currentClue.message,
// 						});

// 						const updatedSession = {
// 							...currentSession,
// 							cluesShowed: currentSession.cluesShowed + 1,
// 						};
// 						setCurrentSession(updatedSession);
// 						localStorage.setItem(
// 							sessionId,
// 							JSON.stringify(updatedSession)
// 						);
// 					}

// 					// Mise à jour périodique du timer dans la session
// 					if (newTimer % 10 === 0) {
// 						const updatedSession = { ...currentSession, timer: newTimer };
// 						setCurrentSession(updatedSession);
// 						localStorage.setItem(
// 							sessionId,
// 							JSON.stringify(updatedSession)
// 						);
// 					}

// 					return newTimer;
// 				});
// 			}, 1000);

// 			setIntervalId(newInterval);

// 			// Nettoyage de l'interval lors du démontage
// 			return () => clearInterval(newInterval);
// 		}
// 	}, [currentSession, pauseMode, currentStepIndex, steps]);

// 	// Effect to fetch the test step template
// 	useEffect(() => {
// 		const fetchSessions = async () => {
// 			const client = database();
// 			const testStepTemplate = await client.get("/teststeptemplate/test");
// 			return testStepTemplate;
// 		};

// 		const fetchData = async () => {
// 			const data = await fetchSessions();
// 			setTestStepTemplate(data);
// 		};

// 		fetchData();
// 	}, []);

// 	// TEST FUNCTION FOR DEVELOPMENT
// 	const clearTimer = useCallback(() => {
// 		setTimer(0);
// 		const currentSessionDuplicate = { ...currentSession };
// 		currentSessionDuplicate.timer = 0;
// 		currentSessionDuplicate.cluesShowed = 0;
// 		setCurrentSession(currentSessionDuplicate);
// 		localStorage.setItem(sessionId, JSON.stringify(currentSessionDuplicate));
// 	}, [currentSession]);

// 	useBeaconListener("triggerStep", (e) => {
// 		console.log("Trigger", e)
// 		const session = JSON.parse(localStorage.getItem(sessionId));

// 		if (
// 			e.detail?.value ===
// 			dataSteps[session.currentStep]?.items[currentStepIndex]?.value
// 		) {
// 			console.log("Current step change !");
// 			console.log(e.detail.value)

// 			const currentSessionDuplicate = session;
// 			currentSessionDuplicate.timer = 0;
// 			currentSessionDuplicate.score++;
// 			localStorage.setItem(
// 				sessionId,
// 				JSON.stringify(currentSessionDuplicate)
// 			);
// 			if (currentStepIndex < dataSteps[session.currentStep].items.length) {
// 				setCurrentStepIndex((prev) => prev + 1);
// 				currentSessionDuplicate.currentStepIndex++;
// 			} else {
// 				setCurrentStepIndex(0);
// 				currentSessionDuplicate.currentStepIndex = 0;
// 				currentSessionDuplicate.currentStep++;
// 			}
// 			if (session.currentStep === dataSteps.length) {
// 				// here we send a post request to the backend to save the session and the score
// 			}
// 			setCurrentSession(currentSessionDuplicate);

// 			// console.log("Current session", currentSessionDuplicate);
// 			setTimer(0);
// 		}
// 	});

// 	const value = useMemo(
// 		() => ({
// 			pauseMode,
// 			setPauseMode,
// 			setTimer,
// 			clearTimer,
// 		}),
// 		[pauseMode, setPauseMode, setTimer, clearTimer]
// 	);

// 	return (
// 		<StepsListenerContext.Provider value={value}>
// 			{children}
// 		</StepsListenerContext.Provider>
// 	);
// });

// export const useStepsListener = () => {
// 	return useContext(StepsListenerContext);
// };

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
        console.log(nextStep)
        const currentStepHints = steps.find(step => step.step_id === nextStep.id);
        console.log(currentStepHints)
        console.log(lastTrigger)
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
                    content: "Salut, c’est encore moi, nous avons mal organisé nos vacances... Pourrais tu regarder sur internet quelles sont les activités disponibles dans le ville de Namur et nous envoyer ce que tu as trouvé par mail?",
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
                    content: "Salut, c’est encore moi, nous avons mal organisé nos vacances... Pourrais tu regarder sur internet quelles sont les activités disponibles dans le ville de Namur et nous envoyer ce que tu as trouvé par message?",
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
                    content: "Nous aimerions bien faire une activité mais nous devons envoyer un fichier word pour confirmer notre inscription, avec nos noms, prénoms et photos d’identité. Tu trouveras les photos d’identité dans le dossier “vacances”. Peux-tu l’enregistrer sur mon cloud? Je pourrais l’avoir directement sur mon téléphone.",
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
                    content: "Notre réservation pour l’activité est confirmée mais il n’est pas possible de payer sur place? Il faut faire un virement avant le début de l’activité. Pourrais tu le faire pour nous? Il faut envoyer 20€ au Compte BE12345678910. Merci!",
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
                    content: "Merci grâce à toi nous avons pu commander notre repas. En attendant qu’il soit prêt, j’aimerai montrer les vidéos de mes dernières vacances à Céline mais je n’arrive pas à me connecter au Wifi du resto. Peux-tu m’envoyer un tuto qui pourrait m’aider à résoudre ce problème?",
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
					content: "Merci grâce à toi nous avons pu commander notre repas. En attendant qu’il soit prêt, j’aimerai montrer les vidéos de mes dernières vacances à Céline mais je n’arrive pas à me connecter au Wifi du resto. Peux-tu m’envoyer un tuto qui pourrait m’aider à résoudre ce problème?",
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
                content: "Merci pour tout ce que tu as fait pour moi, avant de partir, n’oublie d’éteindre mon ordinateur!",
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
                <div onClick={skipStep} className="cursor-pointer absolute right-2 bottom-40 flex items-center bg-[#EB5D1D] rounded-2xl opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white px-6 py-2 mr-3 rounded-l-2xl">
                        <img src={MascotteNeutre} className="h-6" alt="" />
                    </div>
                    <p className="text-[#D7EBFF] pr-6 py-2 font-semibold">Passer cette étape</p>
                </div>
            )}
        </StepsListenerContext.Provider>
    );
});

export const useStepsListener = () => useContext(StepsListenerContext);