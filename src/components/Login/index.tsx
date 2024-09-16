import UserAvatar from "../Ui/Avatars/User";
import ThemeToggler from "../Ui/Toggle/Theme";
import Input from "../Ui/Inputs/Input";
import { useTranslation } from "react-i18next";

const LoginScreen = () => {
	const { t } = useTranslation();

	return (
		<>
			<form className="flex flex-col items-center justify-center flex-1 pb-40">
				<UserAvatar className="w-64 mx-auto" />

				<h1 className="mt-8 text-4xl font-medium text-white dark:text-white">
					Inclume
				</h1>

				<Input
					label={t("Code de session")}
					hideLabel
					placeholder={t("Saisir le code de session")}
					wrapperClassName="mt-8 max-w-[420px] w-full"
					handleSubmitButton={(e: React.MouseEvent<HTMLButtonElement>) => {
						e.preventDefault();

						console.log("Send !");
					}}
				/>
			</form>

			<div className="self-end mt-auto justify-self-end">
				<ThemeToggler />
			</div>
		</>
	);
};

export default LoginScreen;
