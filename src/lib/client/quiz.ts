import { LinkedQuestion } from "@/types/test";
import { database } from ".";

import questionJSON from "@/data/questions.json";

interface TestStep {
	test_step_template_id: number;
	is_successful: boolean;
	score?: number;
	extra_data?: any;
	number_of_hint_used?: number;
	response_time?: number;
}

export const getQuestions = async (): Promise<LinkedQuestion[]> => {
	const db = database();

	const response = await db.get("/teststeptemplate/form");

	const questions: LinkedQuestion[] = [];

	if (response) {
		questionJSON.forEach((question) => {
			// Find in reponse the question that match question.number to response[].id
			const questionFromAPI = response.find((q) => q.number === question.id);

			if (questionFromAPI) {
				questions.push({
					...question,
					...questionFromAPI,
				});
			}
		});
	}

	return questions;
};

export const getLastStep = async (sessionId: string): Promise<any> => {
	const db = database();

	const response = await db.get(`/testsession/${sessionId}/teststep/last`);

	return response;
};

export const getNextStep = async (sessionId: string): Promise<any> => {
	const db = database();

	const response = await db.get(`/testsession/${sessionId}/teststeptemplate/next`);
	return response;
};

export const saveStep = async (
	sessionId: string,
	step: TestStep
): Promise<any> => {
	const db = database();

	const response = await db.post(
		`/testsession/${sessionId}/teststep/`,
		step as any
	);

	return response;
};
