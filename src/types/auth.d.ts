interface AuthContextType {
	authLoading: boolean;
	sessionLoading: boolean;
	session: string | null;
	user: User | null;
	testStatus: TestStatus;
	login: (session: string) => Promise<boolean | string>;
	logout: () => void;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

interface User {
	firstName: string;
}
