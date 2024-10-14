import {
	Tolgee,
	DevTools,
	FormatSimple,
	LanguageStorage,
} from "@tolgee/i18next";

const tolgee = Tolgee()
	.use(DevTools())
	.use(LanguageStorage())
	.use(FormatSimple())
	.init({
		defaultLanguage: "fr",
		apiUrl: import.meta.env.VITE_APP_TOLGEE_API_URL,
		apiKey: import.meta.env.VITE_APP_TOLGEE_API_KEY,
		availableLanguages: ["fr", "en"],
	});

export default tolgee;
