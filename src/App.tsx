import "@/providers/i18n";

import InclumeOSProvider from "./providers/InclumeOS";
import OS from "./components";
import AuthProvider from "./providers/auth";

const App = () => {
	return (
		<AuthProvider>
			<InclumeOSProvider>
				<OS />
			</InclumeOSProvider>
		</AuthProvider>
	);
};

export default App;
