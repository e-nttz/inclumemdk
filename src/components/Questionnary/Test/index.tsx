import { classNames } from "@/helpers/sanitize";
import { useEffect, useState } from "react";
import questions from "../questions.json";
import Button from "@/components/Ui/Buttons/button";

import IconArrowRight from "@/assets/icons/arrow-right.svg?react";

interface TestProps {
	show: boolean;
	visible: boolean;
}

export interface Question {
	id: number;
	question: string;
	type: string;
	display: string;
	answer: number[];
	choices: Choice[];
}

export interface Choice {
	id: number;
	text: string;
	image?: string;
}

const Test = ({ show, visible }: TestProps) => {
	const [currentQuestionId] = useState<number>(1);
	const [question, setQuestion] = useState<Question>(null);

	const [questionCounter] = useState<number>(1);

	const getCurrentQuestion = () => {
		return questions.find((question) => question.id === currentQuestionId);
	};

	useEffect(() => {
		const currentQuestion = getCurrentQuestion();

		if (!currentQuestion) {
			return;
		}

		setQuestion(currentQuestion);
	}, []);

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

				<figure className="relative grid grid-cols-[88px_40px_auto] grid-rows-[auto_40px_auto] mt-auto">
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
							<g clip-path="url(#clip0_2050_1514)">
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

			<div className="flex-1 flex flex-col p-10 pb-14 bg-white rounded-[20px] dark:bg-black">
				<div className="relative w-full h-1 overflow-hidden rounded-full bg-gray-50/50 darkbg-gray-200">
					<span
						className="absolute inset-y-0 left-0 block transition bg-orange"
						style={{
							width: `${(questionCounter / 16) * 100}%`,
						}}
					/>
				</div>

				<form className="flex-1 p-8">
					<div>Options ici</div>
					<Button type="submit" disabled className="mx-auto">
						Question suivante
						<IconArrowRight className="w-6 h-auto" />
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Test;
