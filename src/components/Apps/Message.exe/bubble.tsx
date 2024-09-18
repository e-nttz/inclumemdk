import { classNames } from "@/helpers/sanitize";

const BubbleChat = ({ message, isMine }) => {
	return (
		<div
			className={classNames(
				"flex flex-row items-center space-x-2 max-w-[620px]",
				isMine ? "ml-auto pl-8 pr-2" : "pr-8 pl-2"
			)}
		>
			<div
				className={classNames(
					"rounded-xl px-4 py-3 relative",
					isMine ? "bg-[#2897FD] text-white" : "bg-[#E9E9EB] text-black"
				)}
			>
				<p>{message.content}</p>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 22 20"
					className={classNames(
						"absolute bottom-0 w-3 h-auto",
						isMine ? "-right-1.5" : "-left-1.5 -scale-x-100"
					)}
				>
					<path
						fill={classNames(isMine ? "#2897FD" : "#E9E9EB")}
						fill-rule="evenodd"
						d="M9 0H0v15l.232.097-.166.25c4.37 2.911 11.385 5.683 19.861 4.142l1.667-.303-1.557-.667c-1.067-.457-3.78-2.123-6.182-5.125-2.392-2.99-4.464-7.291-4.305-13.04L9.045.342 9 0Z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
};

export default BubbleChat;
