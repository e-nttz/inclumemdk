import { listenBeacon } from "@/helpers/beacon";
import { classNames } from "@/helpers/sanitize";
import useAudioPlayer from "@/hooks/useAudioPlayer";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const FaceTime = () => {
	const { t } = useTranslation();

	const [callStatus, setCallStatus] = useState<
		"waiting" | "incoming" | "active"
	>("waiting");

	const incomingCallSound = useAudioPlayer("/sounds/incoming-call.mp3", true);

	useEffect(() => {
		// setTimeout(() => {
		// 	setCallStatus("incoming");
		// 	incomingCallSound.play();
		// }, 1000);

		listenBeacon("call", (e) => {
			if (e.detail?.status === "incoming") {
				setCallStatus("incoming");
				incomingCallSound.play();
			}
		});

		return () => {
			incomingCallSound.revoke();
		};
	}, []);

	return (
		<div
			className={classNames(
				"absolute inset-0 flex items-center justify-center z-[150000] transition",
				callStatus === "incoming" &&
					"bg-white/15 backdrop-blur dark:bg-black/25",
				callStatus !== "incoming" && "pointer-events-none"
			)}
		>
			<div
				className={classNames(
					"w-full p-4 border border-gray-100 rounded-lg shadow transition pointer-events-none max-w-96 bg-white/75 dark:bg-black/70 dark:border-gray-700",
					callStatus === "waiting" && "translate-y-4 opacity-0 scale-90"
				)}
			>
				{callStatus === "incoming" && (
					<div className="pointer-events-auto">
						<p className="flex items-center gap-2 mb-8 text-xs font-bold">
							<FaceTime.icon className="flex-shrink-0 w-5 h-auto" />
							<span>{t("Appel entrant")}</span>
						</p>

						<header className="mx-auto mb-4 text-center">
							<figure className="mx-auto mb-4 overflow-hidden rounded-full w-28 aspect-square">
								<img
									src="/images/avatar-message.jpg"
									alt="Avatar"
									className="object-cover w-full h-full"
								/>
							</figure>
							<p className="text-2xl font-bold text-black dark:text-white">
								John Doe
							</p>
						</header>

						<button
							type="button"
							className="px-4 py-2 rounded-lg bg-[#02BA4D] font-bold flex flex-col gap-2 items-center justify-center w-full mt-12 hover:opacity-60 transition text-black"
						>
							{t("Accepter l'appel")}
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default FaceTime;

FaceTime.icon = ({ className }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox="0 0 600 600"
		>
			<linearGradient
				id="a"
				x1="-137.5424"
				x2="-133.9618"
				y1="785.878"
				y2="197.7213"
				gradientTransform="matrix(1 0 0 -1 435.7924 798.4074)"
				gradientUnits="userSpaceOnUse"
			>
				<stop offset="0" stop-color="#5df777" />
				<stop offset="1" stop-color="#0abc28" />
			</linearGradient>
			<path
				fill="url(#a)"
				d="M137.7 0h324.6C538.6 0 600 61.4 600 137.7v324.6c0 76.3-61.4 137.7-137.7 137.7H137.7C61.4 600 0 538.6 0 462.3V137.7C0 61.4 61.4 0 137.7 0z"
			/>
			<path
				fill="#fff"
				d="M91.5 227.3v146.1c0 31.9 25.9 57.7 57.7 57.7H325c31.9 0 57.7-25.9 57.7-57.7V227.3c0-31.9-25.9-57.7-57.7-57.7H149.3c-31.9-.1-57.8 25.8-57.8 57.7zm379.3-39.1-66.2 54.6c-5.9 4.9-9.3 12.1-9.3 19.7v75.6c0 7.6 3.3 14.7 9.1 19.6l66.2 55.6c15.1 12.6 38 1.9 38-17.7V206c.1-19.5-22.7-30.3-37.8-17.8z"
			/>
		</svg>
	);
};