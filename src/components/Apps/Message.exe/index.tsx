import { FormEvent, useEffect, useRef, useState } from "react";
import BubbleChat from "./bubble";
import { useTranslation } from "react-i18next";

import MessageIcon from "@/assets/icons/app-message.svg?react";
import PaperplaneIcon from "@/assets/icons/paperplane.svg?react";

import { ReactElement } from "react";

interface AppProps extends React.FC {
	title: string;
	icon: ReactElement;
}

const Message: AppProps = () => {
	const { t } = useTranslation();
	const messagesList = useRef<HTMLUListElement>(null);

	const [messages, setMessages] = useState([
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

		if (message.trim() === "") return;

		// Add message to the list
		setMessages((prev) => [
			...prev,
			{
				id: Math.random(),
				sender: 1,
				content: message,
			},
		]);

		// Clear input
		form.reset();

		// Scroll to the bottom
		// We set timeout to wait for the DOM to update
		setTimeout(() => {
			messagesList.current?.scrollTo({
				top: messagesList.current.scrollHeight,
				behavior: "smooth",
			});
		}, 150);
	};

	return (
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
						<BubbleChat message={message} isMine={message.sender === 1} />
					</li>
				))}
			</ul>

			<form
				className="flex flex-row items-center gap-4 px-6 py-4 bg-white dark:bg-black dark:text-white"
				onSubmit={handleSubmit}
			>
				<input
					type="text"
					name="message"
					placeholder="Type a message..."
					className="flex-1 w-full p-2 border-2 border-solid rounded-lg bg-gray-50/50 border-gray-50/50 dark:hover:border-accent-dark dark:focus:border-accent-dark dark:bg-gray-900 dark:border-gray-900 hover:border-accent focus:border-accent focus:outline-none focus:shadow-none peer"
				/>

				<button className="peer-[:not(:placeholder-shown)]:text-accent dark:peer-[:not(:placeholder-shown)]:text-accent-dark text-gray-200 transition flex-shrink-0">
					<span className="sr-only">{t("Envoyer")}</span>

					<PaperplaneIcon className="w-6 h-auto" />
				</button>
			</form>
		</section>
	);
};

export default Message;

Message.title = "Message";
Message.icon = <MessageIcon />;
