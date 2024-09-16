import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import FR from "@/locales/fr.json";
import EN from "@/locales/en.json";

const defaultLocale = "fr";

const resources = {
	fr: {
		translation: FR,
	},
	en: {
		translation: EN,
	},
};

const i18nInstance = i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: defaultLocale,
		fallbackLng: defaultLocale, // use en if detected lng is not available
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18nInstance;
