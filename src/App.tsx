import "@/providers/i18n";

import InclumeOSProvider from "./providers/InclumeOS";
import OS from "./components";

const App = () => {
	return (
		<InclumeOSProvider>
			<OS />
		</InclumeOSProvider>
	);
};

export default App;
