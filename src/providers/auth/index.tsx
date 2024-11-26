import { getLocalStorage, setLocalStorage } from "@/helpers/storage";
import { getLastStep } from "@/lib/client/quiz";

import { getTestSession } from "@/lib/client/session";
import { useTranslate } from "@tolgee/react";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<AuthContextType>({
	authLoading: false,
	sessionLoading: true,
	session: null,
	user: null,
	testStatus: "success",
	setTestStatus: () => {},
	login: async () => {
		return false;
	},
	logout: () => {},
});

/**
 * AuthProvider
 *
 * @interface AuthProvider
 *
 * @param {AuthProviderProps} { children }
 * @return {*}
 */
const AuthProvider = ({ children }: AuthProviderProps) => {
	const { t } = useTranslate();

	const [session, setSession] = useState<string | null>(null);

	const [user, setUser] = useState<User | null>(
		getLocalStorage("user", true)
			? JSON.parse(getLocalStorage("user", true))
			: null
	);

	const [testStatus, _setTestStatus] = useState<TestStatus>("waiting");

	const setTestStatus = (status: TestStatus) => {
		_setTestStatus(status);
	};

	const [loading, setLoading] = useState<boolean>(false);
	const [sessionLoading, setSessionLoading] = useState<boolean>(true);

	/**
	 * Login the user
	 *
	 * This method is used to login the user
	 *
	 * @method
	 * @memberof AuthProvider
	 *
	 * @param {string} session
	 * @return {*}
	 */
	const login = async (session: string) => {
		setLoading(true);

		const testSession = await getTestSession(session);

		if (!testSession?.error) {
			setSession(session);

			setUser({
				...testSession.testSession,
			});

			// Getch last step
			const lastStep = await getLastStep(session);

			if (lastStep?.id) {
				setTestStatus("success");
			}

			setLocalStorage("session", session, true);
			setLocalStorage(
				"user",
				JSON.stringify({
					...testSession.testSession,
					firstName: "Test user",
				}),
				true
			);

			setTimeout(() => {
				setLoading(false);
			}, 500);

			return true;
		}

		setLoading(false);

		return t(testSession.translation.key, testSession.translation.message);
	};

	useEffect(() => {
		(async () => {
			const session = getLocalStorage("session", true);

			if (session) {
				// Test if session is valid
				const testSession = await getTestSession(session);

				if (!testSession?.error) {
					setSession(session);

					// Getch last step
					const lastStep = await getLastStep(session);

					if (lastStep?.id) {
						setTestStatus("success");
					}

					setUser({
						...testSession.testSession,
						firstName: "Test user",
					});
				} else {
					// Clean the session
					setLocalStorage("session", "", true);
					setLocalStorage("user", "", true);

					setSessionLoading(false);
				}
			}

			setSessionLoading(false);
		})();
	}, []);

	const logout = () => {
		setSession(null);

		setLocalStorage("session", "", true);
		setLocalStorage("user", "", true);
	};

	return (
		<AuthContext.Provider
			value={{
				authLoading: loading,
				sessionLoading,
				session,
				user,
				testStatus,
				setTestStatus,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
