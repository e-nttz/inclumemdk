import { Tolgee, DevTools, FormatSimple } from "@tolgee/i18next";

const tolgee = Tolgee()
	.use(DevTools())
	.use(FormatSimple())
	.init({
		language: "fr",
		apiUrl: import.meta.env.VITE_APP_TOLGEE_API_URL,
		apiKey: import.meta.env.VITE_APP_TOLGEE_API_KEY,
		staticData: {
			fr: {
				key: "value",
			},
		},
	});

export default tolgee;
