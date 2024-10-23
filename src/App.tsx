import tolgee from "@/providers/i18n";

import InclumeOSProvider from "./providers/InclumeOS";
import OS from "./components";
import AuthProvider from "./providers/auth";
import { TolgeeProvider } from "@tolgee/react";
import BootScreen from "./components/Boot";
import { StepsListenerProvider } from "./providers/stepsListener";
import { NotificationProvider } from "./providers/notifications";

const App = () => {
	return (
		<TolgeeProvider
			tolgee={tolgee}
			fallback={<BootScreen />} //content to show when localization data is loading
		>
			<AuthProvider>
				<InclumeOSProvider>
					<NotificationProvider>
						<StepsListenerProvider>
							<OS />
						</StepsListenerProvider>
					</NotificationProvider>
				</InclumeOSProvider>
			</AuthProvider>
		</TolgeeProvider>
	);
};

export default App;
