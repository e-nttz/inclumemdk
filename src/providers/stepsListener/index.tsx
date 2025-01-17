import { database } from "@/lib/client";
import {
	createContext,
	memo,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

import dataSteps from "../../data/steps.json";
import { useBeaconListener } from "@/helpers/beacon";
import { useNotification } from "../notifications";

interface Step {
	step_id: number;
	items: {
		value: string;
		clues: Clue[];
	}[];
}

export const StepsListenerContext = createContext<StepsListenerContextType>({
	pauseMode: false,
	setPauseMode: () => {},
	setTimer: () => {},
	clearTimer: () => {},
});

export const StepsListenerProvider = memo(({ children }) => {
	const [, setTestStepTemplate] = useState<TestStepTemplate | null>(null);
	const [pauseMode, setPauseMode] = useState<boolean>(false);
	// const [timer, setTimer] = useState<number>(0);
	const [steps] = useState<Step[]>(dataSteps);
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
	const { addNotification } = useNotification();

	// Get session storage
	const sessionId = window.sessionStorage.getItem("session");
	const [currentSession, setCurrentSession] = useState<Session | null>(null);

	// Effect to load or create the session
	useEffect(() => {
		if (sessionId) {
			const sessionData = localStorage.getItem(sessionId);
			if (sessionData) {
				setCurrentSession(JSON.parse(sessionData));
				setTimer(JSON.parse(sessionData)?.timer || 0);
			} else {
				const newSession = {
					currentStep: 0,
					currentStepIndex: 0,
					timer: 0,
					cluesShowed: 0,
					currentScore: 0,
				};
				setCurrentSession(newSession);
				localStorage.setItem(sessionId, JSON.stringify(newSession));
			}
		}
	}, [sessionId]);

	// Effect to show the clues
	const [timer, setTimer] = useState(0); // Timer avec état
	const [intervalId, setIntervalId] = useState(null); // Pour gérer l'interval

	useEffect(() => {
		if (!pauseMode && currentSession) {
			const currentStep = steps.find(
				(step) => step.step_id === currentSession?.currentStep + 1
			);
			const currentClues = currentStep?.items[currentStepIndex]?.clues;

			// Nettoyer tout interval précédent
			if (intervalId) {
				clearInterval(intervalId);
			}

			// Démarrer un nouvel interval
			const newInterval = setInterval(() => {
				setTimer((prevTimer) => {
					const newTimer = prevTimer + 1;

					// Vérifier s'il y a des indices à afficher
					const currentClue = currentClues?.find(
						(clue) => clue.time_launched === newTimer
					);
					if (currentClue) {
						addNotification({
							title: currentClue.title,
							message: currentClue.message,
						});

						const updatedSession = {
							...currentSession,
							cluesShowed: currentSession.cluesShowed + 1,
						};
						setCurrentSession(updatedSession);
						localStorage.setItem(
							sessionId,
							JSON.stringify(updatedSession)
						);
					}

					// Mise à jour périodique du timer dans la session
					if (newTimer % 10 === 0) {
						const updatedSession = { ...currentSession, timer: newTimer };
						setCurrentSession(updatedSession);
						localStorage.setItem(
							sessionId,
							JSON.stringify(updatedSession)
						);
					}

					return newTimer;
				});
			}, 1000);

			setIntervalId(newInterval);

			// Nettoyage de l'interval lors du démontage
			return () => clearInterval(newInterval);
		}
	}, [currentSession, pauseMode, currentStepIndex, steps]);

	// Effect to fetch the test step template
	useEffect(() => {
		const fetchSessions = async () => {
			const client = database();
			const testStepTemplate = await client.get("/teststeptemplate/test");
			return testStepTemplate;
		};

		const fetchData = async () => {
			const data = await fetchSessions();
			setTestStepTemplate(data);
		};

		fetchData();
	}, []);

	// TEST FUNCTION FOR DEVELOPMENT
	const clearTimer = useCallback(() => {
		setTimer(0);
		const currentSessionDuplicate = { ...currentSession };
		currentSessionDuplicate.timer = 0;
		currentSessionDuplicate.cluesShowed = 0;
		setCurrentSession(currentSessionDuplicate);
		localStorage.setItem(sessionId, JSON.stringify(currentSessionDuplicate));
	}, [currentSession]);

	useBeaconListener("triggerStep", (e) => {
		const session = JSON.parse(localStorage.getItem(sessionId));

		if (
			e.detail?.value ===
			dataSteps[session.currentStep]?.items[currentStepIndex]?.value
		) {
			console.log("Current step change !");

			const currentSessionDuplicate = session;
			currentSessionDuplicate.timer = 0;
			currentSessionDuplicate.score++;
			localStorage.setItem(
				sessionId,
				JSON.stringify(currentSessionDuplicate)
			);
			if (currentStepIndex < dataSteps[session.currentStep].items.length) {
				setCurrentStepIndex((prev) => prev + 1);
				currentSessionDuplicate.currentStepIndex++;
			} else {
				setCurrentStepIndex(0);
				currentSessionDuplicate.currentStepIndex = 0;
				currentSessionDuplicate.currentStep++;
			}
			if (session.currentStep === dataSteps.length) {
				// here we send a post request to the backend to save the session and the score
			}
			setCurrentSession(currentSessionDuplicate);

			// console.log("Current session", currentSessionDuplicate);
			setTimer(0);
		}
	});

	const value = useMemo(
		() => ({
			pauseMode,
			setPauseMode,
			setTimer,
			clearTimer,
		}),
		[pauseMode, setPauseMode, setTimer, clearTimer]
	);

	return (
		<StepsListenerContext.Provider value={value}>
			{children}
		</StepsListenerContext.Provider>
	);
});

export const useStepsListener = () => {
	return useContext(StepsListenerContext);
};
