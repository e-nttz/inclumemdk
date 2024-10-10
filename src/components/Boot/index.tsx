import Spinner from "@/assets/icons/spinner.svg?react";
import { useTranslate } from "@tolgee/react";

const BootScreen = () => {
	const { t } = useTranslate();

	return (
		<div className="flex flex-col items-center justify-center min-h-screen space-y-20 text-white bg-gray">
			<figure>
				<svg
					className="w-64 h-auto"
					viewBox="0 0 30 32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M20.9537 12.2175L17.3169 15.8766C16.3615 16.8379 16.3615 18.3965 17.3169 19.3578L20.9537 23.0169C21.9092 23.9782 23.4583 23.9782 24.4137 23.0169L28.0505 19.3578C29.006 18.3965 29.006 16.8379 28.0505 15.8766L24.4137 12.2175C23.4583 11.2562 21.9092 11.2562 20.9537 12.2175Z"
						fill="#1265AF"
					/>
					<path
						d="M12.7477 20.4782L9.11084 24.1374C8.1554 25.0987 8.1554 26.6572 9.11084 27.6185L12.7477 31.2776C13.7031 32.2389 15.2522 32.2389 16.2076 31.2776L19.8445 27.6185C20.7999 26.6572 20.7999 25.0986 19.8445 24.1374L16.2076 20.4782C15.2522 19.517 13.7031 19.517 12.7477 20.4782Z"
						fill="#1265AF"
					/>
					<path
						d="M12.5485 0.720433L8.91162 4.37955C7.95618 5.34084 7.95618 6.8994 8.91162 7.86069L12.5485 11.5198C13.5039 12.4811 15.053 12.4811 16.0084 11.5198L19.6453 7.86069C20.6007 6.8994 20.6007 5.34084 19.6453 4.37955L16.0084 0.720433C15.053 -0.240857 13.5039 -0.240857 12.5485 0.720433Z"
						fill="#EB5D1D"
					/>
					<path
						d="M4.35511 12.0749L0.71826 15.734C-0.237181 16.6953 -0.237181 18.2539 0.71826 19.2152L4.35511 22.8743C5.31055 23.8356 6.85962 23.8356 7.81506 22.8743L11.4519 19.2152C12.4074 18.2539 12.4074 16.6953 11.4519 15.734L7.81506 12.0749C6.85962 11.1136 5.31055 11.1136 4.35511 12.0749Z"
						fill="#1265AF"
					/>
				</svg>
			</figure>

			<div className="flex flex-row items-center gap-2 font-medium">
				<Spinner className="w-12 h-auto ease-in-out animate-spin" />
				<span className="sr-only">{t("loading", "Chargement ...")}</span>
			</div>
		</div>
	);
};

export default BootScreen;
