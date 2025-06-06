import { useAuth } from "@/providers/auth";
import { getNextStep, saveStep } from "@/lib/client/quiz";
import { ReactElement, FormEvent, useRef, useState, useEffect } from "react";
import { useTranslate } from "@tolgee/react";
import AttachmentDocument from "@/assets/icons/mail_attachment.svg"

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
import { useNotification } from "@/providers/notifications";

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
	const [isCall, setCall] = useState(false);
	const [isSoundOn, setSoundOn] = useState(true);
	const {addNotification } = useNotification();

	const [stepId, setStepId] = useState(1)
	const [videoLink, setVideoLink] = useState(null)
	
	setTimeout(() => {
		messagesList.current?.scrollTo({
			top: messagesList.current.scrollHeight,
			behavior: "smooth",
		});
	}, 100);

	useEffect(() => {
		const fetchStepVideo = async () => {
		  try {
			const stepVideo = await getNextStep(session);
			if (stepVideo.id === 1) {
			  setVideoLink("https://ik.imagekit.io/0jngziwft/Appels%20/Appel%20vid%C3%A9o%20%C3%A9tape%201.mp4");
			} else {
				setStepId(stepVideo.id)
			  	setVideoLink("https://ik.imagekit.io/0jngziwft/Appels%20/Appel%20%C3%A9tape%2013.mp4");
			}
		  } catch (error) {
			console.error("Error fetching step video:", error);
		  }
		};
	
		if (session) {
		  fetchStepVideo();
		}
	}, [session]);

	const fetchStepId = async (session, message) => {
		try {
		  const step = await getNextStep(session);
		  if(step.id === 1){
			if(message === "raté"){
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: false,
					extra_data: {
						"message" : message,
					},
				});
			}
		  }
		  if (step.id === 2) {
			if(["rodestraat", "24", "oostende", "adres"].some(keyword => message.toLowerCase().includes(keyword))){
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: true,
					extra_data: {
						"message" : message,
					},
				});
				
				setTimeout(() => {
					beacon("message", {
						id: Math.random(),
						sender: 0,
						content: "Désolé de t’embêter, nous sommes dans la bonne rue mais nous ne trouvons pas le bâtiment. Pourrais-tu <strong>télécharger</strong> sur l'ordinateur et m’envoyer une photo du bâtiment par mail à l’adresse : vincent@inclume.be ?",
					});
					addNotification({
						title: "Nouveau message !",
						message:
							"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
					});
				}, 5000)
			}
		  }
		//   Etape 2 bis
		// Ajouter pa
		  if(step.id === 3){
			if (
				["pas", "pa", "p as", "p a", "non"].some(keyword => message.toLowerCase().includes(keyword))
			  ) {
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: true,
					extra_data: {
						"message" : message,
					},
				});
				setTimeout(() => {
					beacon("message", {
						id: Math.random(),
						sender: 0,
						content: "Je viens de me rappeler que dans mon dossier “vacances”, il y a un fichier “info resto” avec toutes les informations sur ce restaurant, peux-tu me l’envoyer par mail? Mon adresse est vincent@inclume.be.",
					});
					addNotification({
						title: "Nouveau message !",
						message:
							"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
					});
				}, 5000)
			}
			if(message === "raté"){
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: false,
					extra_data: {
						"message" : message,
					},
				});
			}
		  }
		  	if(step.id === 14){
				if(message.toLowerCase().includes("http") && message.toLowerCase().includes("namur")){
					if(message.toLowerCase().includes("https")){
						await saveStep(session, {
							test_step_template_id: step.id,
							is_successful: true,
							extra_data: {
								"message" : message,
							},
						});
						setTimeout(() => {
							beacon("message", {
								id: Math.random(),
								sender: 0,
								content: `Nous aimerions bien faire cette activité, mais nous devons créer un fichier pour confirmer notre inscription avec nos noms, prénoms et photos d’identité.<br><br> - Peux-tu le faire depuis mon application traitement de texte ?<br> - Tu trouveras les photos d’identité dans le dossier "vacances".<br> - Peux-tu l’enregistrer sur mon cloud ? Je pourrai l’avoir directement sur mon téléphone.<br><br> - Pour rappel, voici nos noms et prénoms :<br> &nbsp;&nbsp;&nbsp;&nbsp;- Vincent Inclume<br> &nbsp;&nbsp;&nbsp;&nbsp;- Céline Dupont.`
							});
							addNotification({
								title: "Nouveau message !",
								message:
									"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
							});
						}, 5000)
					}
					else{
						//AJOUTER MESSAGE + DIALOGUE
						await saveStep(session, {
							test_step_template_id: step.id,
							is_successful: false,
							extra_data: {
								"message" : message,
							},
						});
						setTimeout(() => {
							beacon("message", {
								id: Math.random(),
								sender: 0,
								content: `Nous aimerions bien faire cette activité, mais nous devons créer un fichier pour confirmer notre inscription avec nos noms, prénoms et photos d’identité.<br><br> - Peux-tu le faire depuis mon application traitement de texte ?<br> - Tu trouveras les photos d’identité dans le dossier "vacances".<br> - Peux-tu l’enregistrer sur mon cloud ? Je pourrai l’avoir directement sur mon téléphone.<br><br> - Pour rappel, voici nos noms et prénoms :<br> &nbsp;&nbsp;&nbsp;&nbsp;- Vincent Inclume<br> &nbsp;&nbsp;&nbsp;&nbsp;- Céline Dupont.`
							});
							addNotification({
								title: "Nouveau message !",
								message:
									"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
							});
						}, 5000)
					}
				}
			}
		  if(step.id === 39){
			if(message.toLowerCase().includes("https://tutoriel-wifi.com")){
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: true,
					extra_data: {
						"message" : message,
					},
				});
				setTimeout(() => {
					beacon("message", {
						id: Math.random(),
						sender: 0,
						content: "Tu te rappelles, tu m’avais dit que tu allais installer l’antivirus ChildVirus et faire une analyse de mon pc avec l’antivirus ? Peux-tu le faire maintenant ? Merci!",
					});
					addNotification({
						title: "Nouveau message !",
						message:
							"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
					});
				},5000)
			}
		  }
		  if(step.id === 35 || step.id === 51 || step.id === 55){
			if(message === "raté"){
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: false,
				  })
				  setTimeout(() => {
					beacon("message", {
						id: Math.random(),
						sender: 0,
						content: "Notre réservation pour l’activité est confirmée mais il n’est pas possible de payer sur place. Il faut faire un virement avant le début de l’activité. Pourrais tu le faire pour nous? Il faut envoyer 20€ au Compte BE12345678910. Indique “Visiter Namur” en bénéficiaire. Pour information, j'utilise la banque BNG. Merci!",
					});
					addNotification({
						title: "Nouveau message !",
						message:
							"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
					});
				}, 2000)
			}else{
				await saveStep(session, {
					test_step_template_id: step.id,
					is_successful: true,
					extra_data: {
						"message" : message,
					},
				});
				setTimeout(() => {
					beacon("message", {
						id: Math.random(),
						sender: 0,
						content: "Voici le numéro de compte auquel tu dois faire le virement de 20€ : BE12345678910. Pour le nom du bénéficiaire, le voici : Visiter Namur. Pour information, j'utilise la banque BNG.",
					});
					addNotification({
						title: "Nouveau message !",
						message:
							"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
					});
				}, 25000)
			}
		}
		  if(step.id === 38 &&
			["salade", "epicee", "épicée", "epicée", "épicee", "epice", "épicé", "epicée", "epicé", "épissée", "épissé", "épiceé", "épisée", "épicee", "épissé", "epicée", "epicéé"].some(keyword => message.toLowerCase().includes(keyword))){
			await saveStep(session, {
				test_step_template_id: step.id,
				is_successful: true,
				extra_data: {
					"message" : message,
				},
			});
			setTimeout(() => {
				beacon("message", {
					id: Math.random(),
					sender: 0,
					content: "Merci grâce à toi nous avons pu commander notre repas. En attendant qu’il soit prêt, j’aimerai montrer les vidéos de mes dernières vacances à Céline mais je n’arrive pas à me connecter au Wifi du resto. Peux-tu m’envoyer le lien d'un tuto qui pourrait m’aider à résoudre ce problème ?",
				});
				addNotification({
					title: "Nouveau message !",
					message:
						"<strong>Tu as reçu un nouveau message !</strong> Ouvre l'application Message pour le consulter.",
				});
			},5000)
		  }
		} catch (error) {
		  console.error("Erreur lors de la récupération de l'étape :", error);
		}
	};

	useEffect(() => {
		const executeCall = async () => {
			const step = await getNextStep(session);
			const call1 = localStorage.getItem("call1");
			const call2 = localStorage.getItem("call2");
			
			if (call1 && !call2){
				if(step.id != 35 && step.id != 51 && step.id != 55){
					return;
				}
			}

			if (call1 && call2) return; // Évite l'appel en boucle

			if (
				defaultContent &&
				defaultContent["props"] &&
				defaultContent["props"][1] &&
				defaultContent["props"][1].defaultContent === true
			) {
				if (step.id === 35 || step.id === 51 || step.id === 55) {
					setStepId(step.id);
					setSoundOn(false);
					setVideoLink("https://ik.imagekit.io/0jngziwft/Appels%20/Appel%20%C3%A9tape%2013.mp4");
					localStorage.setItem("call2", "true"); // Marque l'appel 2 comme exécuté
					localStorage.setItem("call1", "true"); // Marque l'appel 1 comme exécuté si test a été relancé
				} else {
					localStorage.setItem("call1", "true"); // Marque l'appel 1 comme exécuté
				}
				setCall(true);
			}
		};
	
		executeCall();
	}, [defaultContent, session]);
	
	const { t } = useTranslate();
	const { handleInfoWindow, closeInfoWindow } = useExplorer();

	const messagesList = useRef<HTMLUListElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);

	const [selectedFiles, setSelectedFiles] = useState<string | null>(null);

	const [isWebcamOn, setWebcamOn] = useState(false);
	const [isMicOn, setMicOn] = useState(true);
	const [messages, setMessages] = useState<Message[]>([
		{
		  id: 1,
		  sender: 4,
		  content: `Salut ${user.candidate.first_name}, merci de garder la maison pendant les vacances. Nous arrivons dans quelques instants à Ostende, je t’appelle à mon arrivée !`,
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
			if(selectedFiles.includes("image")){
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
			}else{
				beacon("message", {
					id: Math.random(),
					sender: 1,
					content: (
						<div className="flex items-center">
							<img src={AttachmentDocument} className="mr-3" alt="" />
							<p>{selectedFiles}</p>
						</div>
					),
				});
			}

			// Clear input
			setSelectedFiles(null);
		}

		if (message.trim() !== "") {
			beacon("message", {
				id: Math.random(),
				sender: 1,
				content: message,
			});
			fetchStepId(session, message);

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
	const handleFileAttachment = (file) => {
		if(file.content.url){
			setSelectedFiles(file.content.url);
		}else{
			setSelectedFiles(file.name)
		}
	};

	return (
		<Window
			appName={Message.title}
			contextMenus={isCall === false ? (
				<ContextualBar.Menu name="Fichiers">
					<ContextualBar.Item onClick={() => {
						handleInfoWindow((selected: FileNode) => {
							if (selected?.url || selected?.name) {
								handleFileAttachment(selected)
							}
							closeInfoWindow();
						}, undefined);
					}}>
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
									src="/images/avatar-message.png"
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
							<div className="relative w-96 h-auto overflow-hidden border-2 rounded-lg border-accent dark:border-accent-dark">
								{selectedFiles.includes("imagekit") && (
									<img
										src={selectedFiles}
										alt="Fichier joint"
										className="h-auto "
									/>
								)}
								{!selectedFiles.includes("imagekit") && (
									<div className="flex items-center px-2 py-2">
										<img src={AttachmentDocument} className="mr-3" alt="" />
										<p>{selectedFiles}</p>
									</div>
								)}

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
									onClick={() => {
										handleInfoWindow((selected: FileNode) => {
											if (selected?.url || selected?.name) {
												handleFileAttachment(selected)
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
				<video 
					autoPlay 
					ref={videoRef} 
					muted={!isSoundOn} 
					onEnded={() => {
						setCall(false);
						if(!isSoundOn){
								fetchStepId(session, "raté");
						}
					}}
				>
					<source src={videoLink} />
				</video>
				
				<div className="options flex justify-between absolute bottom-4 w-60">
					{/* ... autres boutons ... */}
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
								videoRef.current.muted = !isSoundOn; // Mettre à jour la propriété muted
								
								// Réinitialiser la vidéo au début lorsque l'on active/désactive le son
								if(stepId != 1){
									videoRef.current.currentTime = 0;
								}
							}
							fetchStepId(session, "");
						}}
					>
						<img src={isSoundOn ? SoundOn : SoundOff} alt="Haut-parleur" className="h-6" />
					</div>
			
					<div
							className="raccrocher bg-[#FB4343] rounded-[50%] w-12 h-12 flex items-center justify-center cursor-pointer"
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