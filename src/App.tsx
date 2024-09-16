import "@/providers/i18n";
import { useTranslation } from "react-i18next";
import InclumeOSProvider from "./providers/InclumeOS";
import InclumeOs from "./components/Os";

const App = () => {
	const { t } = useTranslation();

	return (
		<InclumeOSProvider>
			<InclumeOs />
		</InclumeOSProvider>
	);
};

export default App;
