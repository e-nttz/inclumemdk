import UserAvatar from "../Ui/Avatars/User";
import ThemeToggler from "../Ui/Toggle/Theme";
import Input from "../Ui/Inputs/Input";
import { useTranslate } from "@tolgee/react";
import { useAuth } from "@/providers/auth";
import { useEffect, useState } from "react";
import { classNames } from "@/helpers/sanitize";
import FullScreenToggler from "../Ui/Toggle/FullScreen";
import { useOS } from "@/providers/InclumeOS";

const LoginScreen = () => {
	const { t } = useTranslate();

	const { authLoading, login } = useAuth();

	const [sessionError, setSessionError] = useState<string | null>(null);
	const { changeTheme, theme} = useOS();

	useEffect(() => {
		// Clear all localStorage and sessionStorage
		localStorage.clear();
		sessionStorage.clear();
	}, []);

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

				<div className="w-full max-w-[420px] mt-8">
					<Input
						label={t("session_code", "Code de session")}
						hideLabel
						placeholder={t("paste_code", "Saisir le code de session")}
						wrapperClassName="max-w-[420px] w-full"
						isLoading={authLoading}
						handleSubmitButton={async (
							e: React.MouseEvent<HTMLButtonElement>,
							value: string
						) => {
							e.preventDefault();

							setSessionError(null);

							const userSession = await login(value);
							changeTheme(theme === "light" ? "dark" : "light");
							if (typeof userSession === "string") {
								setSessionError(userSession);
								return;
							}
						}}
					/>

					{sessionError && (
						<p className="relative z-10 px-3 py-2 -mt-1 text-sm text-red-500 bg-white border-t-2 border-red-500 rounded-b">
							{sessionError}
						</p>
					)}
				</div>
			</form>

			<div className="flex flex-row justify-between gap-4 p-6 mt-auto">
				<img src="/images/brand.svg" alt="Logo" className="w-20 h-auto" />
				<div className="flex flex-row gap-4">
					<FullScreenToggler />
					<ThemeToggler />
				</div>
			</div>
		</>
	);
};

export default LoginScreen;