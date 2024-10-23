import { database } from "@/lib/client";
import { createContext, useContext, useEffect, useState } from "react";

import dataSteps from "../../data/steps.json";

import { useNotification } from "../notifications";

interface Step {
	step_id: number;
	items: {
		beacon_name: string;
		value: string;
		clues: Clue[];
	}[];
}

export const StepsListenerContext = createContext<StepsListenerContextType>({
	pauseMode: false,
	setPauseMode: () => {},
	timer: 0,
	setTimer: () => {},
	clearTimer: () => {},
});

export const StepsListenerProvider = ({ children }) => {
	const { addNotification } = useNotification();
	/**
	 * Test Step Template
	 */
	const [, setTestStepTemplate] = useState<TestStepTemplate | null>(null);

	/**
	 * Pause mode
	 */
	const [pauseMode, setPauseMode] = useState<boolean>(false);

	/**
	 * Timer in seconds
	 */
	const [timer, setTimer] = useState<number>(0);

	/**
	 * Steps
	 */
	const [steps] = useState<Step[]>(dataSteps);
	const [currentStepIndex] = useState<number>(0);

	// get session storage
	const sessionId = window.sessionStorage.getItem("session");

	const [currentSession, setCurrentSession] = useState<Session | null>(null);

	useEffect(() => {
		if (sessionId) {
			if (localStorage.getItem(sessionId)) {
				setCurrentSession(JSON.parse(localStorage.getItem(sessionId)));
				setTimer(JSON.parse(localStorage.getItem(sessionId))?.timer || 0);
			} else {
				const currentSession = {
					currentStep: 1,
					timer: 0,
					cluesShowed: 0,
				};
				setCurrentSession(currentSession);
				localStorage.setItem(sessionId, JSON.stringify(currentSession));
			}
		}
	}, [sessionId]);

	useEffect(() => {
		if (!pauseMode) {
			// find the step that is in steps.id === currentSession.currentStep
			const currentStep = steps.find(
				(step) => step.step_id === currentSession?.currentStep
			);
			// in clues find the clues that are in clues.step_id === currentSession.currentStep
			const currentClues = currentStep?.items[currentStepIndex].clues;
			let timerDuplicate = timer;
			const interval = setInterval(() => {
				timerDuplicate++;
				setTimer(timerDuplicate);
				// in currentClue.items find the clue that is in currentClue.items.time_launched === timerDuplicate
				const currentClue = currentClues?.find(
					(clue) => clue.time_launched === timerDuplicate
				);
				if (currentClue) {
					addNotification({
						title: currentClue.title,
						message: currentClue.message,
					});
					const currentSessionDuplicate = { ...currentSession };
					currentSessionDuplicate.cluesShowed++;
					localStorage.setItem(
						sessionId,
						JSON.stringify(currentSessionDuplicate)
					);
					setCurrentSession(currentSessionDuplicate);
				}
				if (timerDuplicate % 10 === 0) {
					const currentSessionDuplicate = { ...currentSession };
					currentSessionDuplicate.timer = timerDuplicate;
					setCurrentSession(currentSessionDuplicate);
					localStorage.setItem(
						sessionId,
						JSON.stringify(currentSessionDuplicate)
					);
				}
			}, 1000);

			return () => clearInterval(interval);
		}
	}, [currentSession, pauseMode, currentStepIndex]);

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

	const clearTimer = () => {
		setTimer(0);
		const currentSessionDuplicate = { ...currentSession };
		currentSessionDuplicate.timer = 0;
		currentSessionDuplicate.cluesShowed = 0;
		setCurrentSession(currentSessionDuplicate);
		localStorage.setItem(sessionId, JSON.stringify(currentSessionDuplicate));
	};

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
