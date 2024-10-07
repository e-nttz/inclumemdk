import { useAuth } from "@/providers/auth";
import { useTranslation } from "react-i18next";
import Button from "../Ui/Buttons/button";

import IconArrowRight from "@/assets/icons/arrow-right.svg?react";

const Questionnary = () => {
	const { t } = useTranslation();

	const { user } = useAuth();

	return (
		<div className="flex items-center justify-center flex-1 p-8">
			<div className="p-5 rounded-[30px] bg-[#F9F9F9]/90 backdrop-blur-lg w-full max-w-[1050px] flex flex-row">
				<div className="relative flex flex-col">
					<img
						src="/images/mascotte/welcome.svg"
						alt="Welcome"
						className="relative z-10 w-full h-auto mt-auto"
					/>

					<span className="w-full max-w-[360px] bg-accent/15 absolute inset-0 rounded-[20px]" />
				</div>

				<div className="flex flex-col justify-center flex-1 p-5">
					<h1 className="mb-4 text-2xl font-bold md:text-3xl">
						{t("content.questionnaryTitle", { name: user.firstName })}
					</h1>
					<div
						className="space-y-4"
						dangerouslySetInnerHTML={{
							__html: t("content.questionnaryWelcome"),
						}}
					/>

					<Button
						className="mt-8"
						onClick={() => {
							console.log("Go to next");
						}}
					>
						{t("C'est parti")}
						<IconArrowRight className="w-6 h-auto" />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Questionnary;
