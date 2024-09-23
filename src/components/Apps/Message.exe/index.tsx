import { ReactElement, FormEvent, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Window from "@/components/Os/Window";
import ContextualBar from "@/components/Os/Window/ContextualBar";
import BubbleChat from "./bubble";

import MessageIcon from "@/assets/icons/app-message.svg?react";
import PaperplaneIcon from "@/assets/icons/paperplane.svg?react";
import CameraIcon from "@/assets/icons/camera.svg?react";
import DismissIcon from "@/assets/icons/dismiss.svg?react";
interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

interface Message {
	id: number;
	sender: number;
	content: string | ReactElement;
}

const Message: AppProps = () => {
	const { t } = useTranslation();
	const messagesList = useRef<HTMLUListElement>(null);

	const [selectedFiles, setSelectedFiles] = useState<string | null>(null);

	const [messages, setMessages] = useState<Message[]>([
		{
			id: 1,
			sender: 4,
			content: "Hello, world!",
		},
		{
			id: 2,
			sender: 4,
			content: "Want to chat?",
		},
		{
			id: 3,
			sender: 1,
			content: "Sure!",
		},
		{
			id: 5,
			sender: 4,
			content:
				"Labore ipsum nostrud duis mollit velit. Anim ut eu elit aute occaecat aliqua cupidatat incididunt ut dolore consequat veniam eu. Consequat Lorem dolor tempor mollit pariatur. Exercitation labore Lorem reprehenderit qui nulla. Esse fugiat eiusmod est fugiat esse adipisicing exercitation nostrud cillum culpa anim id consectetur amet. Anim sint amet aliqua aute pariatur ea commodo enim eiusmod consequat magna nostrud deserunt excepteur irure. Exercitation aliquip mollit mollit dolore eu est in tempor. Duis consectetur ut in do exercitation incididunt aute proident culpa amet sint minim et nulla amet.",
		},
	]);

	useEffect(() => {
		/**
		 * Listen to messages sent by the system
		 *
		 * @param {CustomEvent} e
		 * @returns {Promise<void>}
		 */
		const listener = async (e: CustomEvent) => {
			const type = e.type;

			if (type == "beaconMessage" && e.detail) {
				setMessages((prev) => [...prev, e.detail]);

				// Scroll to the bottom
				setTimeout(() => {
					messagesList.current?.scrollTo({
						top: messagesList.current.scrollHeight,
						behavior: "smooth",
					});
				}, 150);
			}
		};

		// Add event listener to receive messages from the entire system
		window.addEventListener("beaconMessage", listener);

		// Remove event listener
		return () => {
			window.removeEventListener("beaconMessage", listener);
		};
	}, []);

	const handleSubmit = (e: FormEvent) => {
		// Add message to the list
		e.preventDefault();

		const form = e.target as HTMLFormElement;
		const message = form.message.value;

		// If there's an image, send it
		if (selectedFiles) {
			window.dispatchEvent(
				new CustomEvent("beaconMessage", {
					detail: {
						id: Math.random(),
						sender: 1,
						content: (
							<img
								src={selectedFiles}
								alt="Pasted image"
								className="h-auto max-w-full"
							/>
						),
					},
				})
			);

			// Clear input
			setSelectedFiles(null);
		}

		if (message.trim() !== "") {
			// Send new message
			window.dispatchEvent(
				new CustomEvent("beaconMessage", {
					detail: {
						id: Math.random(),
						sender: 1,
						content: message,
					},
				})
			);

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

	const handleFileAttachment = () => {
		alert("Not implemented yet. A fake image is sent instead.");
		setSelectedFiles("/images/restaurant.jpg");
	};

	return (
		<Window
			appName={Message.title}
			contextMenus={
				<>
					<ContextualBar.Menu name="Fichiers">
						<ContextualBar.Item onClick={() => handleFileAttachment()}>
							{t("Joindre un fichier")}
						</ContextualBar.Item>
					</ContextualBar.Menu>
				</>
			}
		>
			<section className="flex flex-col flex-1 w-full overflow-auto text-black bg-white/90 backdrop-blur dark:bg-black/70">
				<header className="px-6 py-4 bg-white dark:bg-black">
					<div className="flex flex-row items-center gap-2">
						<figure className="w-12 overflow-hidden rounded-full aspect-square">
							<img
								src="/images/avatar-message.jpg"
								alt="Avatar"
								className="object-cover w-full h-full"
							/>
						</figure>

						<p className="font-bold dark:text-white">John Doe</p>
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
								placeholder="Type a message..."
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
										window.dispatchEvent(
											new CustomEvent("beaconMessage", {
												detail: {
													id: Math.random(),
													sender: 1,
													content: (
														<img
															src={text}
															alt="Pasted image"
															className="h-auto max-w-full"
														/>
													),
												},
											})
										);

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
									alert(
										"Not implemented yet. A fake image is sent instead."
									);

									setSelectedFiles("/images/restaurant.jpg");
								}}
							>
								<span className="sr-only">
									{t("Insérez un fichier")}
								</span>

								<CameraIcon className="w-6 h-auto" />
							</button>
						</span>

						<button className="peer-[:not(:placeholder-shown)]:text-accent dark:peer-[:not(:placeholder-shown)]:text-accent-dark text-gray-200 transition flex-shrink-0">
							<span className="sr-only">{t("Envoyer")}</span>

							<PaperplaneIcon className="w-6 h-auto" />
						</button>
					</div>
				</form>
			</section>
		</Window>
	);
};

export default Message;

Message.title = "Message";
Message.icon = <MessageIcon />;
