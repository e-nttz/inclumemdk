import { getLocalStorage, setLocalStorage } from "@/helpers/storage";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType>({
	authLoading: false,
	session: null,
	user: null,
	testStatus: "waiting",
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
	const [session, setSession] = useState<string | null>(
		getLocalStorage("session", true) || null
	);

	const [user, setUser] = useState<User | null>(
		getLocalStorage("user", true)
			? JSON.parse(getLocalStorage("user", true))
			: null
	);

	const [testStatus] = useState<TestStatus>("success");

	const [loading, setLoading] = useState<boolean>(false);

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

		// Await 2s
		await new Promise((resolve) => setTimeout(resolve, 150));

		if (session === "mediakod") {
			setSession(session);

			setUser({
				firstName: "Mediakod",
			});

			setLoading(false);

			setLocalStorage("session", session, true);
			setLocalStorage(
				"user",
				JSON.stringify({
					firstName: "Mediakod",
				}),
				true
			);

			return true;
		}

		setLoading(false);

		return "La session n'a pas été trouvée.";
	};

	const logout = () => {
		setSession(null);
	};

	return (
		<AuthContext.Provider
			value={{
				authLoading: loading,
				testStatus,
				session,
				user,
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
