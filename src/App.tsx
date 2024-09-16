import "@/providers/i18n";
import { useTranslation } from "react-i18next";
import InclumeOSProvider from "./providers/InclumeOS";

const App = () => {
	const { t } = useTranslation();

	return (
		<InclumeOSProvider>
			<p>{t("Welcome on Inclume !")}</p>
		</InclumeOSProvider>
	);
};

export default App;
