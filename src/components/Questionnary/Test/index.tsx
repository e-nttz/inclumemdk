import { classNames } from "@/helpers/sanitize";
import { useEffect, useState } from "react";
import Button from "@/components/Ui/Buttons/button";

import IconArrowRight from "@/assets/icons/arrow-right.svg?react";
import Radio from "./radio";
import { useTranslate } from "@tolgee/react";
import { Choice, LinkedQuestion, TestProps } from "@/types/test";

const Test = ({
	show,
	visible,
	questions = [],
	onComplete,
	setScore,
}: TestProps) => {
	const [currentQuestionId, setCurrentQuestionId] = useState<number>(null);
	const [question, setQuestion] = useState<LinkedQuestion>(null);
	const [results, setResults] = useState<{ [key: number]: boolean }>({});
	const [answers, setAnswers] = useState<{ [key: number]: any }>({});

	const [questionCounter, setQuestionCounter] = useState<number>(1);
	const { t } = useTranslate();

	const [selectedValues, setSelectedValues] = useState<string[]>([]);

	const getCurrentQuestion = (id = currentQuestionId) => {
		const findId = id || questions?.[0]?.id;

		return questions.find((question) => question.id == findId);
	};

	useEffect(() => {
		// get first question id
		const firstQuestionId = questions?.[0]?.id;

		if (firstQuestionId && !currentQuestionId) {
			setCurrentQuestionId(firstQuestionId);

			return;
		}
	}, [questions]);

	const handleComplete = async () => {
		// Test is completed, calculate score
		const score = Object.values(results).filter((r) => r).length;

		setScore(score);

		// Merge results and answers
		onComplete(
			Object.entries(results).map(([key, value]) => {
				// Get answer from answers object
				const answer = answers[key];

				return {
					is_correct: value,
					question_id: key,
					selectedValues: answer,
				};
			})
		);

		return;
	};

	useEffect(() => {
		if (currentQuestionId) {
			const currentQuestion = getCurrentQuestion();

			if (!currentQuestion) {
				handleComplete();
			}

			setQuestion(currentQuestion);
		}
	}, [currentQuestionId]);

	const handleSubmit = (e) => {
		e.preventDefault();

		const isCorrect =
			currentQuestionId === 31
				? selectedValues.some((answer) => question.answer.includes(Number(answer)))
				: question.answer.every((answer) => selectedValues.includes(answer + "")) &&
				selectedValues.length === question.answer.length;

		setResults({
			...results,
			[currentQuestionId]: isCorrect,
		});

		setAnswers({
			...answers,
			[currentQuestionId]: selectedValues,
		});

		setSelectedValues([]);

		// Check if current question has a "conditionnal" object that show if the user has to go to a specific question
		const nextQuestionId = isCorrect
			? question.next_question_if_successed
			: question.next_question_if_failed;

		// If there's no "nextQuestionId", try to get it from all questions from next object
		if (!nextQuestionId) {
			const currentIndex = questions.findIndex(
				(q) => q.id === currentQuestionId
			);

			const nextQuestion = questions?.[currentIndex + 1];

			if (nextQuestion) {
				setCurrentQuestionId(nextQuestion.id);
				return;
			}
		}

		if (!nextQuestionId) {
			handleComplete();
		}

		setCurrentQuestionId(nextQuestionId);
		setQuestionCounter(questionCounter + 1);
	};

	if (!question) {
		return null;
	}

	return (
		<div
			className={classNames(
				"p-5 rounded-[30px] bg-[#F9F9F9]/90 border border-gray-100/40 backdrop-blur-lg w-full flex flex-row transition flex-1 shadow-[0px_40px_80px_0px_#0000002E,0px_4px_26px_0px_#00000024] dark:bg-black/75",
				!show && "hidden",
				!visible && "translate-x-4 opacity-0"
			)}
		>
			<aside className="relative flex flex-col w-[480px] px-10 py-5 justify-evenly gap-4">
				<div className="mt-auto justify-self-center">
					<p className="text-gray-600 dark:text-gray-200">
						Question {questionCounter}
					</p>

					<h1 className="text-3xl font-bold">{question.question}</h1>
				</div>

				{question.id === 25 && (
					<p className="text-xl mt-8 font-secondary text-orange">var texte = "Bonjour"</p>
				)}

				<figure
					className={classNames(
						"relative grid grid-cols-[88px_40px_auto] grid-rows-[auto_40px_auto] mt-auto",
						question.type !== "multiple" && "opacity-0"
					)}
				>
					<img
						src="/images/mascotte/hand-tips.svg"
						className="w-full h-auto col-start-1 col-end-3 row-start-2 row-end-4"
					/>

					<figcaption className="flex items-center justify-center col-start-2 col-end-4 row-start-1 row-end-3 text-[12px] bg-white text-orange rounded-full max-w-[130px] p-4 aspect-square text-center font-secondary font-bold relative font-secondary">
						<p className="font-secondary">
							Sélectionne une ou plusieurs propositions
						</p>

						<svg
							className="bg-cover bg-no-repeat absolute bottom-2 left-2 w-[30px] h-[30px] -z-[1]"
							width="30"
							height="30"
							viewBox="0 0 30 30"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M9.50468 0C10.3824 2.38752 10.8636 4.97009 10.8636 7.6697C10.8636 15.8075 6.49044 22.9077 0 26.6996C3.43385 28.7945 7.45284 30 11.7529 30C19.2095 30 25.8309 26.3758 30 20.7698L9.50468 0Z"
								fill="white"
							/>
						</svg>

						<svg
							width="26"
							height="26"
							viewBox="0 0 26 26"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="absolute left-0 top-1"
						>
							<g clipPath="url(#clip0_2050_1514)">
								<path
									d="M23.63 17.13C23.41 17.72 23.29 18.35 23.29 19.02C23.29 21.02 24.38 22.77 26 23.7C25.14 24.21 24.14 24.51 23.07 24.51C21.21 24.51 19.56 23.62 18.52 22.24L23.63 17.13Z"
									fill="#EB5D1D"
								/>
								<path
									d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
									fill="#EB5D1D"
								/>
								<path
									d="M12.6898 10.52H12.3698C11.4998 10.5 10.7498 11.15 10.6498 12.01C10.5898 12.88 11.2398 13.64 12.1098 13.72V18.7C12.1098 19.59 12.8298 20.31 13.7198 20.31C14.6098 20.31 15.3298 19.59 15.3298 18.7V13.15C15.3298 11.7 14.1498 10.52 12.6998 10.52H12.6898Z"
									fill="white"
								/>
								<path
									d="M12.9997 9.37C14.0197 9.37 14.8397 8.55 14.8397 7.53C14.8397 6.51 14.0197 5.69 12.9997 5.69C11.9797 5.69 11.1597 6.51 11.1597 7.53C11.1597 8.54 11.9797 9.37 12.9997 9.37Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_2050_1514">
									<rect width="26" height="26" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</figcaption>
				</figure>
			</aside>

			<div className="flex-1 flex flex-col p-10 bg-white rounded-[20px] dark:bg-black">
				<div className="relative w-full h-1 overflow-hidden rounded-full bg-gray-50/50 darkbg-gray-200">
					<span
						className="absolute inset-y-0 left-0 block transition bg-orange"
						style={{
							width: `${(questionCounter / 14) * 100}%`,
						}}
					/>
				</div>
				
				<div className={
					classNames(
						question.id === 26
							? "flex items-center h-full"
							: "flex flex-col justify-center h-full"
					)
				}>
					{question.id === 26 && (
								<img src="/images/questionnary/questionnaire_question_10_element.png" alt="Image représentant une notification de localisation sur téléphone" className="w-72"/>
					)}

					<form
						className="flex flex-col flex-1 gap-4 p-8 pb-0"
						onSubmit={handleSubmit}
					>
						<div
							className={classNames(
								"flex gap-5 mt-auto",
								question.display === "icon" || question.display === "image"
									? "items-stretch flex-row"
									: "flex-col",
								question.display === "image" && "justify-evenly",
								question.id === 23 || question.id === 28
									? "grid grid-cols-2"
									: ""
							)}
						>	
							
							{question.choices.map((choice: Choice) => (
								<Radio
									key={choice.id}
									name={
										question.id.toString() +
										(question.type === "multiple" ? "[]" : "")
									}
									question={choice.text}
									image={choice?.image}
									value={choice.id}
									selectedValues={selectedValues}
									type={
										question.type === "multiple" ? "checkbox" : "radio"
									}
									onChange={(e) => {
										const value = e.target.value;
										const isChecked = e.target.checked;

										if (isChecked) {
											if (question.type === "single") {
												setSelectedValues([value]);
											} else {
												setSelectedValues([...selectedValues, value]);
											}
										} else {
											setSelectedValues(
												selectedValues.filter((v) => v !== value)
											);
										}
									}}
									style={question.display}
								/>
							))}
						</div>

						<Button
							type="submit"
							size="sm"
							disabled={selectedValues.length === 0}
							className="mx-auto mt-auto"
						>
							{t("next_question", "Question suivante")}
							<IconArrowRight className="w-6 h-auto" />
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Test;
