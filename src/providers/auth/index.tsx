import { getLocalStorage, setLocalStorage } from "@/helpers/storage";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext<AuthContextType>({
	authLoading: false,
	session: null,
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
		getLocalStorage("session") || null
	);

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
			setLoading(false);

			setLocalStorage("session", session);

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
			value={{ authLoading: loading, session, login, logout }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
