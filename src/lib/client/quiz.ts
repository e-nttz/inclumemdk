import { LinkedQuestion } from "@/types/test";
import { database } from ".";

import questionJSON from "@/data/questions.json";

export const getQuestions = async (): Promise<LinkedQuestion[]> => {
	const db = database();

	const response = await db.get("/teststeptemplate/form");

	const questions: LinkedQuestion[] = [];

	if (response) {
		questionJSON.forEach((question) => {
			// Find in reponse the question that match question.number to response[].id
			const questionFromAPI = response.find((q) => q.number === question.id);

			console.log("Question from API : ", questionFromAPI);

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
