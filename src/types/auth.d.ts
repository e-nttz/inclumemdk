interface AuthContextType {
	authLoading: boolean;
	sessionLoading: boolean;
	session: string | null;
	user: User | null;
	testStatus: TestStatus;
	setTestStatus: (status: TestStatus) => void;
	login: (session: string) => Promise<boolean | string>;
	logout: () => void;
}

interface AuthProviderProps {
	children: React.ReactNode;
}

interface User {
	firstName: string;
}
