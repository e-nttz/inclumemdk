import { database } from "@/lib/client";
import { createContext, useContext, useEffect, useState } from "react";

import dataSteps from "../../data/steps.json";

// import { useNotification } from "../notifications";
import { useBeaconListener } from "@/helpers/beacon";

// interface Step {
// 	step_id: number;
// 	items: {
// 		value: string;
// 		clues: Clue[];
// 	}[];
// }

export const StepsListenerContext = createContext<StepsListenerContextType>({
	pauseMode: false,
	setPauseMode: () => {},
	timer: 0,
	setTimer: () => {},
	clearTimer: () => {},
});

export const StepsListenerProvider = ({ children }) => {
	const [, setTestStepTemplate] = useState<TestStepTemplate | null>(null);
	const [pauseMode, setPauseMode] = useState<boolean>(false);
	const [timer, setTimer] = useState<number>(0);
	// const [steps] = useState<Step[]>(dataSteps);
	const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

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
	useEffect(() => {
		if (!pauseMode && currentSession) {
			// TODO : fix the timer (memory leak)
			// const currentStep = steps.find(
			// 	(step) => step.step_id === currentSession?.currentStep + 1
			// );
			// const currentClues = currentStep?.items[currentStepIndex]?.clues;
			// let timerDuplicate = timer;
			// const interval = setInterval(() => {
			// 	timerDuplicate++;
			// 	setTimer(timerDuplicate);
			// 	const currentClue = currentClues?.find(
			// 		(clue) => clue.time_launched === timerDuplicate
			// 	);
			// 	if (currentClue) {
			// 		addNotification({
			// 			title: currentClue.title,
			// 			message: currentClue.message,
			// 		});
			// 		const currentSessionDuplicate = { ...currentSession };
			// 		currentSessionDuplicate.cluesShowed++;
			// 		localStorage.setItem(
			// 			sessionId,
			// 			JSON.stringify(currentSessionDuplicate)
			// 		);
			// 		setCurrentSession(currentSessionDuplicate);
			// 	}
			// 	if (timerDuplicate % 10 === 0) {
			// 		const currentSessionDuplicate = { ...currentSession };
			// 		currentSessionDuplicate.timer = timerDuplicate;
			// 		setCurrentSession(currentSessionDuplicate);
			// 		localStorage.setItem(
			// 			sessionId,
			// 			JSON.stringify(currentSessionDuplicate)
			// 		);
			// 	}
			// }, 1000);
			// return () => clearInterval(interval);
		}
	}, [currentSession, pauseMode, currentStepIndex]);

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
	const clearTimer = () => {
		setTimer(0);
		const currentSessionDuplicate = { ...currentSession };
		currentSessionDuplicate.timer = 0;
		currentSessionDuplicate.cluesShowed = 0;
		setCurrentSession(currentSessionDuplicate);
		localStorage.setItem(sessionId, JSON.stringify(currentSessionDuplicate));
	};

	useBeaconListener("triggerStep", (e) => {
		const session = JSON.parse(localStorage.getItem(sessionId));

		if (
			e.detail?.value ===
			dataSteps[session.currentStep]?.items[currentStepIndex]?.value
		) {
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
		}
	});

	return (
		<StepsListenerContext.Provider
			value={{
				pauseMode,
				setPauseMode,
				timer,
				setTimer,
				clearTimer,
			}}
		>
			{children}
		</StepsListenerContext.Provider>
	);
};

export const useStepsListener = () => {
	return useContext(StepsListenerContext);
};
