import Spinner from "@/assets/icons/spinner.svg?react";
import { useTranslation } from "react-i18next";

const SplashScreen = () => {
	const { t } = useTranslation();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen space-y-20 text-white bg-gray">
			<figure>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 4875 4875"
					className="w-48 h-auto"
				>
					<path
						fill="#0078d4"
						d="M0 0h2311v2310H0zm2564 0h2311v2310H2564zM0 2564h2311v2311H0zm2564 0h2311v2311H2564"
					/>
				</svg>
			</figure>

			<div className="flex flex-row items-center gap-2 font-medium">
				<Spinner className="w-12 h-auto ease-in-out animate-spin" />
				<span className="sr-only">{t("Chargement ...")}</span>
			</div>
		</div>
	);
};

export default SplashScreen;
