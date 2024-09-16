import UserAvatar from "../Ui/Avatars/User";
import ThemeToggler from "../Ui/Toggle/Theme";
import Input from "../Ui/Inputs/Input";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/providers/auth";
import { useState } from "react";
import { classNames } from "@/helpers/sanitize";
import FullScreenToggler from "../Ui/Toggle/FullScreen";

const LoginScreen = () => {
	const { t } = useTranslation();

	const { authLoading, login } = useAuth();

	const [sessionError, setSessionError] = useState<string | null>(null);

	return (
		<>
			<form
				className={classNames(
					"flex flex-col items-center justify-center flex-1 pb-40"
				)}
			>
				<UserAvatar className="w-56 mx-auto" />

				<h1 className="mt-8 text-4xl font-medium text-white dark:text-white">
					Inclume
				</h1>

				<Input
					label={t("Code de session")}
					hideLabel
					placeholder={t("Saisir le code de session")}
					wrapperClassName="mt-8 max-w-[420px] w-full"
					isLoading={authLoading}
					handleSubmitButton={async (
						e: React.MouseEvent<HTMLButtonElement>,
						value: string
					) => {
						e.preventDefault();

						setSessionError(null);

						const userSession = await login(value);

						if (typeof userSession === "string") {
							setSessionError(userSession);
							return;
						}
					}}
				/>

				{sessionError && (
					<p className="mt-8 text-white dark:text-white">{sessionError}</p>
				)}
			</form>

			<div className="flex flex-row self-end gap-4 p-6 mt-auto justify-self-end">
				<FullScreenToggler />
				<ThemeToggler />
			</div>
		</>
	);
};

export default LoginScreen;
