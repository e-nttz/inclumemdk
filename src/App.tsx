import "@/providers/i18n";
import { useTranslation } from "react-i18next";

const App = () => {
	const { t } = useTranslation();

	return <p>{t("Welcome on Inclume !")}</p>;
};

export default App;
