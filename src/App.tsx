import tolgee from "@/providers/i18n";

import InclumeOSProvider from "./providers/InclumeOS";
import OS from "./components";
import AuthProvider from "./providers/auth";
import { TolgeeProvider } from "@tolgee/react";

const App = () => {
	return (
		<TolgeeProvider
			tolgee={tolgee}
			fallback={<>Loading...</>} //content to show when localization data is loading
		>
			<AuthProvider>
				<InclumeOSProvider>
					<OS />
				</InclumeOSProvider>
			</AuthProvider>
		</TolgeeProvider>
	);
};

export default App;
