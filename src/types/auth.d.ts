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
	candidate: {
		first_name: string;
		last_name: string;
	};
	code: string;
	created_at: string;
	updated_at: string;
	id: number;
	is_finished: boolean;
}
