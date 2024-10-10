import { useAuth } from "@/providers/auth";
import Button from "../Ui/Buttons/button";

import { useTranslate } from "@tolgee/react";
import IconArrowRight from "@/assets/icons/arrow-right.svg?react";
import { useRef, useState } from "react";
import { classNames } from "@/helpers/sanitize";
import Test from "./Test";
import FullScreenToggler from "../Ui/Toggle/FullScreen";
import ThemeToggler from "../Ui/Toggle/Theme";

const Questionnary = () => {
	const { t } = useTranslate();

	const { user } = useAuth();

	const welcomeRef = useRef<HTMLDivElement>(null);

	const [closeWelcome, setCloseWelcome] = useState<boolean>(false);
	const [startTest, setStartTest] = useState<boolean>(false);

	return (
		<div className="flex flex-col justify-center flex-1 p-8 pb-0">
			<Test show={closeWelcome} visible={startTest} />

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
								name: user.firstName,
							})}
						</h1>
						<div
							className="space-y-4"
							dangerouslySetInnerHTML={{
								__html: t(
									"welcome_message",
									"<p>Bienvenue sur <strong>Inclume</strong> ! Vous allez dans un instant découvrir le monde du numérique en ma compagnie.</p><p>D’ailleurs, je suis Wap-e (créé par Wallon Musk), un robot qui t’accompagnera tout au long de l’aventure !</p><p>Est-ce que tu es prêt.e !? Si oui, je t’invite à répondre à un petit questionnaire.</p>"
								),
							}}
						/>

						<Button
							className="mt-8"
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
					</div>
				</div>
			</div>

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
