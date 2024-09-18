import MessageIcon from "@/assets/icons/app-message.svg?react";
import { FormEvent, useEffect, useState } from "react";
import BubbleChat from "./bubble";
import { useTranslation } from "react-i18next";

const Message = () => {
	const { t } = useTranslation();

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
		// Create custom event listener
		const listener = async (e: CustomEvent) => {
			const { type, data } = e.detail;

			if (type === "beaconMessage") {
				setMessages((prev) => [...prev, data]);
			}
		};

		// Add event listener
		window.addEventListener("beaconMessage", listener);

		// Remove event listener
		return () => {
			window.removeEventListener("beaconMessage", listener);
		};
	}, []);

	return (
		<div className="flex flex-col w-full h-full text-black bg-white/90 backdrop-blur dark:bg-black/50">
			<ul className="flex flex-col flex-1 gap-4 px-4">
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
				className="flex flex-row gap-4 p-4 bg-white dark:bg-black dark:text-white"
				onSubmit={(e: FormEvent) => {
					// Add message to the list
					e.preventDefault();

					const form = e.target as HTMLFormElement;

					const message = form.message.value;

					if (message.trim() === "") return;

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
				}}
			>
				<input
					type="text"
					name="message"
					placeholder="Type a message..."
					className="flex-1 w-full p-2 border-2 border-solid rounded-lg bg-gray-50/50 border-gray-50/50 dark:hover:border-accent-dark dark:focus:border-accent-dark dark:bg-gray-900 dark:border-gray-900 hover:border-accent focus:border-accent focus:outline-none focus:shadow-none peer"
				/>

				<button className="peer-[:not(:placeholder-shown)]:text-accent dark:peer-[:not(:placeholder-shown)]:text-accent-dark text-gray-200 transition flex-shrink-0">
					<span className="sr-only">{t("Envoyer")}</span>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="w-6 h-auto"
					>
						<path
							fill="currentColor"
							d="M1.79.772 22.86 10.85a1.25 1.25 0 0 1 0 2.255L1.79 23.183a1.25 1.25 0 0 1-1.746-1.457l2.108-7.728a.5.5 0 0 1 .415-.364l10.21-1.387a.25.25 0 0 0 .195-.149l.018-.063a.25.25 0 0 0-.157-.268l-.055-.015-10.2-1.386a.5.5 0 0 1-.414-.364L.044 2.229A1.25 1.25 0 0 1 1.79.772Z"
						/>
					</svg>
				</button>
			</form>
		</div>
	);
};

export default Message;

Message.title = () => "Message";
Message.icon = () => <MessageIcon />;
