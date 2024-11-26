import { database } from "./index";

export const getTestSession = async (sessionId: string) => {
	const client = database();

	const testSession = await client.get("/testsession/" + sessionId);

	if (
		testSession.detail === "Test session is already finished." ||
		testSession.is_finished
	) {
		return {
			error: true,
			translation: {
				key: "session_finished",
				message:
					"Votre session est déjà terminée. Veuillez contactez votre conseiller pour plus d'informations.",
			},
		};
	}

	if (testSession?.id) {
		return {
			error: false,
			testSession,
		};
	}

	return {
		error: true,
		translation: {
			key: "session_not_found",
			message: "La session n'a pas été trouvée.",
		},
	};
};
