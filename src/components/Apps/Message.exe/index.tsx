import { useAuth } from "@/providers/auth";
import { getLastStep, getNextStep, saveStep } from "@/lib/client/quiz";
import { ReactElement, FormEvent, useRef, useState, useEffect } from "react";
import { useTranslate } from "@tolgee/react";

import Window from "@/components/Os/Window";
import ContextualBar from "@/components/Os/Window/ContextualBar";
import BubbleChat from "./bubble";

import PaperplaneIcon from "@/assets/icons/paperplane.svg?react";
import CameraIcon from "@/assets/icons/camera.svg?react";
import DismissIcon from "@/assets/icons/dismiss.svg?react";
import { beacon, useBeaconListener } from "@/helpers/beacon";
import Image from "@/components/Ui/Images/image";
import { useExplorer } from "@/providers/explorer";

// Icons
import HangUp from "@/assets/icons/hang_up.svg"
import SoundOff from "@/assets/icons/sound_off.svg"
import SoundOn from "@/assets/icons/sound_on.svg"
import WebcamOff from "@/assets/icons/webcam_off.svg"
import WebcamOn from "@/assets/icons/webcam_on.svg"
import MicOff from "@/assets/icons/mic_off.svg"
import MicOn from "@/assets/icons/mic_on.svg"
import WebcamImage from "@/assets/icons/webcam.jpg"

interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

interface Message {
	id: number;
	sender: number;
	content: string | ReactElement;
}

const Message: AppProps = (defaultContent) => {
	const {user, session} = useAuth();
	console.log(getNextStep(session))
	const [isCall, setCall] = useState(false);

	useEffect(() => {
		if (defaultContent && defaultContent["props"] && defaultContent["props"][1] && defaultContent["props"][1].defaultContent === true) {
		  setCall(true);
		}
	}, [defaultContent]);

	const { t } = useTranslate();
	const { handleInfoWindow, closeInfoWindow } = useExplorer();

	const messagesList = useRef<HTMLUListElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const [selectedFiles, setSelectedFiles] = useState<string | null>(null);

	const [isWebcamOn, setWebcamOn] = useState(false);
	const [isMicOn, setMicOn] = useState(true);
	const [isSoundOn, setSoundOn] = useState(true);
	const [messages, setMessages] = useState<Message[]>([
		{
		  id: 1,
		  sender: 4,
		  content: `Salut ${user.candidate.first_name}, merci de garder la maison pendant les vacances. Nous arrivons dans quelques instants à Ostende, es-tu disponible pour que je t’appelle à mon arrivée ?`,
		},
	]);

	useBeaconListener("message", (e) => {
		const message = e.detail;
		setMessages((prev) => [...prev, message]);

		setTimeout(() => {
			messagesList.current?.scrollTo({
				top: messagesList.current.scrollHeight,
				behavior: "smooth",
			});
		}, 150);
	});

	/**
	 * Handle form submission
	 *
	 * @param {FormEvent} e
	 *
	 * @returns {void}
	 */
	const handleSubmit = (e: FormEvent) => {
		// Add message to the list
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const message = form.message.value;

		// If there's an image, send it
		if (selectedFiles) {
			beacon("message", {
				id: Math.random(),
				sender: 1,
				content: (
					<img
						src={selectedFiles}
						alt="Pasted image"
						className="h-auto max-w-full"
					/>
				),
			});

			// Clear input
			setSelectedFiles(null);
		}

		if (message.trim() !== "") {
			beacon("message", {
				id: Math.random(),
				sender: 1,
				content: message,
			});

			// Clear input
			form.reset();
		}

		// Scroll to the bottom
		// We set timeout to wait for the DOM to update
		setTimeout(() => {
			messagesList.current?.scrollTo({
				top: messagesList.current.scrollHeight,
				behavior: "smooth",
			});
		}, 150);
	};

	/**
	 * Handle file attachment
	 *
	 * @returns {void}
	 *
	 */
	const handleFileAttachment = () => {
		alert("Not implemented yet. A fake image is sent instead.");
		setSelectedFiles("/images/restaurant.jpg");
	};

	return (
		<Window
			appName={Message.title}
			contextMenus={isCall === false ? (
				<ContextualBar.Menu name="Fichiers">
					<ContextualBar.Item onClick={() => handleFileAttachment()}>
						{t("join_file", "Joindre un fichier")}
					</ContextualBar.Item>
				</ContextualBar.Menu>
			) : null}
		>
			{isCall === false && (
				<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-white/90 backdrop-blur dark:bg-black/70">
					<header className="px-6 py-4 bg-white dark:bg-black">
						<div className="flex flex-row items-center gap-2">
							<figure className="w-12 overflow-hidden rounded-full aspect-square">
								<Image
									src="/images/avatar-message.jpg"
									alt="Avatar"
									className="object-cover w-full h-full"
								/>
							</figure>

							<p className="font-bold dark:text-white">Vincent Inclume</p>
						</div>
					</header>

					<ul
						className="flex flex-col flex-1 gap-4 px-4 py-4 overflow-auto"
						ref={messagesList}
					>
						{messages.map((message) => (
							<li
								key={message.id}
								className="flex flex-row items-center space-x-2"
							>
								<BubbleChat
									message={message}
									isMine={message.sender === 1}
								/>
							</li>
						))}
					</ul>
					
					<form
						className="gap-4 px-6 py-4 space-y-4 bg-white dark:bg-black dark:text-white"
						onSubmit={handleSubmit}
					>
						{selectedFiles && (
							<div className="relative w-20 h-auto overflow-hidden border-2 rounded-lg border-accent dark:border-accent-dark">
								<img
									src={selectedFiles}
									alt="Avatar"
									className="w-full h-auto"
								/>

								<button
									type="button"
									className="absolute inset-0 flex items-center justify-center transition opacity-0 hover:opacity-100 focus-visible:opacity-100 bg-white/50 backdrop-blur-sm dark:text-black"
									onClick={() => setSelectedFiles(null)}
								>
									<DismissIcon className="w-6 h-auto" />
								</button>
							</div>
						)}
						
						<div className="flex flex-row items-center gap-4">
							<span className="relative flex-1 peer">
								<input
									type="text"
									name="message"
									placeholder="Ecrivez un message..."
									autoComplete="off"
									className="flex-1 w-full p-2 pr-12 border-2 border-solid rounded-lg bg-gray-50/50 border-gray-50/50 dark:hover:border-accent-dark dark:focus:border-accent-dark dark:bg-gray-900 dark:border-gray-900 hover:border-accent focus:border-accent focus:outline-none focus:shadow-none peer"
									// Listen when a paste event is made on input
									onPaste={async (e) => {
										const text = await navigator.clipboard.readText();

										const filePattern =
											/^\/images\/.*\.(png|jpg|jpeg|gif|webp|svg|pdf)$/;
										if (filePattern.test(text)) {
											e.preventDefault();
											// Send new message with image

											beacon("message", {
												id: Math.random(),
												sender: 1,
												content: (
													<img
														src={text}
														alt="Pasted image"
														className="h-auto max-w-full"
													/>
												),
											});

											// Clear input
											(e.target as HTMLInputElement).value = "";

											return;
										}
									}}
								/>
								<button
									type="button"
									className="absolute text-gray-300 -translate-y-1/2 right-4 top-1/2 hover:text-accent dark:hover:text-accent-dark"
									onClick={async () => {
										handleInfoWindow((selected: FileNode) => {
											if (selected?.url) {
												setSelectedFiles(selected.url);
											}

											closeInfoWindow();
										}, undefined);
									}}
								>
									<span className="sr-only">
										{t("insert_file", "Insérez un fichier")}
									</span>

									<CameraIcon className="w-6 h-auto" />
								</button>
							</span>

							<button className="peer-[:not(:placeholder-shown)]:text-accent dark:peer-[:not(:placeholder-shown)]:text-accent-dark text-gray-200 transition flex-shrink-0">
								<span className="sr-only">{t("send", "Envoyer")}</span>

								<PaperplaneIcon className="w-6 h-auto" />
							</button>
						</div>
					</form>
				</section>
			)}

			{isCall === true && (
				<section className="bg-black w-full h-full flex justify-center">
					{/* Référence pour la vidéo */}
					<video autoPlay loop ref={videoRef} muted={!isSoundOn}>
						<source src="https://cdn.pixabay.com/video/2020/01/05/30902-383991325_large.mp4" />
					</video>
					<div className="options flex justify-between absolute bottom-4 w-60">
						<div
							className="camera rounded-[50%] w-12 h-12 flex items-center justify-center cursor-pointer bg-black/40 backdrop-blur"
							onClick={() => setWebcamOn(!isWebcamOn)}
						>
							<img src={isWebcamOn ? WebcamOn : WebcamOff} alt="Webcam" className="h-6" />
						</div>

						<div
							className="micro rounded-[50%] w-12 h-12 flex items-center justify-center cursor-pointer bg-black/40 backdrop-blur"
							onClick={() => setMicOn(!isMicOn)}
						>
							<img src={isMicOn ? MicOn : MicOff} alt="Microphone" className="h-6" />
						</div>

						{/* Bouton pour couper/activer le son */}
						<div
							className="hautparleur rounded-[50%] w-12 h-12 flex items-center justify-center cursor-pointer bg-black/40 backdrop-blur"
							onClick={() => {
								setSoundOn(!isSoundOn); // Alterne l'état local
								if (videoRef.current) {
									videoRef.current.muted = isSoundOn; // Mettre à jour la propriété muted
								}
							}}
						>
							<img src={isSoundOn ? SoundOn : SoundOff} alt="Haut-parleur" className="h-6" />
						</div>

						<div
							className="raccrocher bg-[#FB4343] rounded-[50%] w-12 h-12 flex items-center justify-center cursor-pointer"
							onClick={() => setCall(false)}
						>
							<img src={HangUp} alt="" className="h-6" />
						</div>
					</div>
					{isWebcamOn && (
						<div className="webcam absolute w-64 absolute bottom-3 right-3">
							<img src={WebcamImage} alt="Personnage Webcam" className=""/>
						</div>
					)}
				</section>
			)}
		</Window>
	);
};

export default Message;

Message.title = "Message";
Message.icon = (
	<svg
		width="52"
		height="52"
		viewBox="0 0 52 52"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M52 11.0382V40.9543C52 47.0414 47.0486 51.9928 40.9615 51.9928H11.0385C4.95139 51.9998 0 47.0484 0 40.9613V11.0382C0 4.95115 4.95139 -0.000244141 11.0385 -0.000244141H40.9546C47.0417 -0.000244141 51.9931 4.95115 51.9931 11.0452L52 11.0382Z"
			fill="#41B521"
		/>
		<path
			d="M52.0014 26.3287V40.9612C52.0014 47.0483 47.05 51.9997 40.9629 51.9997H23.0894L9.15625 38.0666L34.5503 8.88452L52.0014 26.3287Z"
			fill="#4E8526"
		/>
		<path
			d="M45.1162 45.8917C44.9777 46.3349 44.6037 46.418 44.1813 46.4457C41.5429 46.6189 39.1745 45.9333 37.097 44.3405C34.971 45.3516 32.5957 45.9194 30.0889 45.9194C24.168 45.9194 18.9811 42.7616 16.1211 38.0457C18.351 38.9459 20.7124 39.4099 23.1431 39.4099C33.5168 39.4099 41.9514 30.9683 41.9514 20.5946C41.9514 19.8052 41.903 19.0296 41.806 18.2678C44.6453 21.204 46.3973 25.1928 46.3973 29.6041C46.3973 34.0153 44.7699 37.7271 42.1107 40.6287C42.1107 40.6841 42.1246 40.7534 42.1384 40.8226C42.547 42.4708 43.378 43.8489 44.6868 44.9361C44.9984 45.1854 45.2547 45.4624 45.1162 45.8917Z"
			fill="white"
		/>
		<path
			d="M39.8763 20.5948C39.8763 29.8259 32.3695 37.3326 23.1454 37.3326C20.7493 37.3326 18.4364 36.834 16.255 35.8507L15.7079 35.5944L15.2163 35.9545C15.1747 35.9822 15.1401 36.0099 15.0985 36.0376C13.3257 37.3188 11.4283 37.9974 9.35076 38.0944C8.85908 38.1151 8.60285 37.5265 8.93526 37.1595C9.98786 35.9822 10.7358 34.5834 11.1513 32.9768L11.1859 32.3051L10.902 32.0073C7.21092 28.0462 5.62509 22.5408 6.77465 17.07C8.33278 9.66715 14.8562 4.19638 22.4114 3.87091C30.4028 3.53158 37.2378 8.8223 39.2599 16.1144C39.6616 17.5409 39.8763 19.0436 39.8763 20.5948Z"
			fill="white"
		/>
	</svg>
);
