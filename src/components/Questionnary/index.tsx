import { useAuth } from "@/providers/auth";
import Button from "../Ui/Buttons/button";

import { useTranslate } from "@tolgee/react";
import IconArrowRight from "@/assets/icons/arrow-right.svg?react";
import { useEffect, useRef, useState } from "react";
import { classNames } from "@/helpers/sanitize";
import Test from "./Test";
import FullScreenToggler from "../Ui/Toggle/FullScreen";
import ThemeToggler from "../Ui/Toggle/Theme";
import { getQuestions, saveStep, updateTestSession } from "@/lib/client/quiz";
import { useOS } from "@/providers/InclumeOS";
import { apps } from "@/components/Apps";
import { useNotification } from "@/providers/notifications";


const Questionnary = () => {
	const { addNotification } = useNotification();
	const { t } = useTranslate();
	const { launchApp } = useOS();
	const { user, setTestStatus, session, logout } = useAuth();

	const welcomeRef = useRef<HTMLDivElement>(null);

	const REQUIRED_SCORE = 5;

	const [closeWelcome, setCloseWelcome] = useState<boolean>(false);
	const [startTest, setStartTest] = useState<boolean>(false);
	const [testCompleted, setTestCompleted] = useState<boolean>(false);
	const [score, setScore] = useState<number>(0);
	const [scoreLoading, setScoreLoading] = useState<boolean>(true);

	const [questions, setQuestions] = useState([]);

	useEffect(() => {
		// Get question from API
		(async () => {
			const response = await getQuestions();

			setQuestions(response);
		})();
	}, []);

	const onComplete = async (results) => {
		setTestCompleted(true);

		// For each result, save it to the API
		for (const result of results) {
			await saveStep(session, {
				test_step_template_id: result.question_id,
				is_successful: result.is_correct,
				extra_data: {
					selectedValues: result.selectedValues,
				},
			});
		}

		setScoreLoading(false);
	};

	return (
		<div className="flex flex-col justify-center flex-1 p-8 pb-0">
			{testCompleted ? (
				<div
					className={classNames(
						"p-2.5 rounded-[30px] mx-auto transition bg-[#F9F9F9]/90 backdrop-blur-lg w-full max-w-[560px] flex flex-col self-center mt-auto mb-auto border border-gray-100/40  shadow-[0px_40px_80px_0px_#0000002E,0px_4px_26px_0px_#00000024] dark:bg-black/75"
					)}
				>
					{scoreLoading ? (
						<div className="py-4 font-bold text-center">
							{t(
								"score_loading",
								"Votre score est en cours de calcul, un instant ..."
							)}
						</div>
					) : (
						<>
							<div className="relative flex flex-col items-center w-full before:absolute before:inset-x-0 before:bottom-0 before:top-1/2 before:bg-white dark:before:bg-black before:rounded-t-[20px]">
								<figure className="h-[220px] mx-auto overflow-visible mt-4">
									<img
										src={
											score >= REQUIRED_SCORE
												? "/images/mascotte/success.png"
												: "/images/mascotte/avatar.png"
										}
										className={
											score >= REQUIRED_SCORE
												? "translate-x-[28px]"
												: "translate-x-px"
										}
										alt="Success"
									/>
								</figure>
							</div>

							<div className="bg-white dark:bg-black rounded-b-[20px] p-6">
								<h2 className="font-bold text-center text-[32px] leading-tight">
									{score >= REQUIRED_SCORE
										? t(
												"questionnary_success_title",
												"Bravo ! Tu as réussi cette première étape avec succès !"
										  )
										: t(
												"questionnary_failure_title",
												"Merci d’avoir répondu à ce questionnaire !"
										  )}
								</h2>

								<p className="mt-6 text-lg text-center text-gray-600 whitespace-pre-wrap dark:text-gray-200">
									{score >= REQUIRED_SCORE
										? t(
												"questionnary_success_message",
												"Nous allons pouvoir passer à l’étape suivante en nous immergeant pleinement dans le monde numérique.\nTu es prêt.e ?"
										  )
										: t(
												"questionnary_failure_message",
												"Préviens ton agent/accompagnateur que tu as fini le questionnaire ! A bientôt."
										  )}
								</p>

								<div className="flex items-center justify-center mt-8 mb-2 text-center">
									{score >= REQUIRED_SCORE ? (
										<Button onClick={() => {
											setTestStatus("success");
										}}>
											{t(
												"questionnary_success_cta",
												"Aller sur le bureau"
											)}
											<IconArrowRight className="w-6 h-auto" />
										</Button>
									) : (
										<Button onClick={() => {
											setTestStatus("failed")
											updateTestSession(session, true)
											logout()
											window.location.reload();
										}}>
											{t(
												"questionnary_failure_cta",
												"Fermer ma session"
											)}
										</Button>
									)}
								</div>
							</div>
						</>
					)}
				</div>
			) : (
				<>
					<Test
						show={closeWelcome}
						visible={startTest}
						questions={questions}
						onComplete={onComplete}
						setScore={setScore}
					/>

					<div
						ref={welcomeRef}
						className={classNames(
							"flex items-center flex-1 transition",
							closeWelcome && "hidden"
						)}
					>
						<div
							className={classNames(
								"p-5 rounded-[30px] mx-auto transition bg-[#F9F9F9]/90 backdrop-blur-lg w-full max-w-[1050px] flex flex-row self-center mt-auto mb-auto border border-gray-100/40  flex-1 shadow-[0px_40px_80px_0px_#0000002E,0px_4px_26px_0px_#00000024] dark:bg-black/75"
							)}
						>
							<div className="relative flex flex-col w-[485px]">
								<img
									src="/images/mascotte/welcome.svg"
									alt="Welcome"
									className="relative z-10 w-full h-auto mt-auto"
								/>

								<span className="w-full max-w-[360px] bg-accent/15 absolute inset-0 rounded-[20px]" />
							</div>

							<div className="flex flex-col justify-center flex-1 p-8">
								<h1 className="mb-4 text-2xl font-bold md:text-3xl">
									{t("welcome_name", "Bonjour { name },", {
										name: user.candidate.first_name,
									})}
								</h1>
								<div
									className="space-y-4"
									dangerouslySetInnerHTML={{
										__html: t(
											"welcome_message",
											"<p>Bienvenue sur <strong>Inclume</strong> ! Vous allez dans un instant découvrir le monde du numérique en ma compagnie.</p><p>D’ailleurs, je suis Wap-e, un robot qui t’accompagnera tout au long de l’aventure !</p><p>Est-ce que tu es prêt.e !? Si oui, je t’invite à répondre à un petit questionnaire.</p>"
										),
									}}
								/>

								<Button
									className="mt-16"
									onClick={() => {
										welcomeRef.current?.classList.add(
											"-translate-x-4",
											"opacity-0"
										);

										setTimeout(() => {
											setCloseWelcome(true);

											setTimeout(() => {
												setStartTest(true);
											}, 100);
										}, 300);
									}}
								>
									{t("start", "C'est parti")}
									<IconArrowRight className="w-6 h-auto" />
								</Button>

								<button
									type="button"
									className="mt-4"
									disabled={questions.length === 0}
									onClick={() => {
										setTestStatus("success");
									}}
								>
									Ignorer le test
								</button>
							</div>
						</div>
					</div>
				</>
			)}

			<div className="flex flex-row justify-between gap-4 p-6 mt-auto">
				<img src="/images/brand.svg" alt="Logo" className="w-20 h-auto" />
				<div className="flex flex-row gap-4">
					<FullScreenToggler />
					<ThemeToggler />
				</div>
			</div>
		</div>
	);
};

export default Questionnary;