interface AuthContextType {
	authLoading: boolean;
	session: string | null;
	login: (session: string) => Promise<boolean | string>;
	logout: () => void;
}

interface AuthProviderProps {
	children: React.ReactNode;
}
