import { classNames } from "@/helpers/sanitize";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	size?: "sm" | "md";
	theme?: "primary" | "secondary";
}

const Button = ({
	children,
	size = "md",
	theme = "primary",
	...props
}: ButtonProps) => {
	const getSize = () => {
		switch (size) {
			case "sm":
				return "px-3 py-2 text-sm";
			case "md":
			default:
				return "px-5 py-2.5 text-base";
		}
	};

	const getTheme = () => {
		switch (theme) {
			case "secondary":
				return "bg-gray-50/50 dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-50 border-gray-300 text-black dark:text-white";
			case "primary":
			default:
				return "text-white bg-accent hover:bg-accent-600 border-accent";
		}
	};

	return (
		<button
			{...props}
			className={classNames(
				"flex items-center leading-tight justify-center gap-2 font-semibold transition rounded-md outline-focus disabled:opacity-15 border outline-focus",
				getSize(),
				getTheme(),
				props.className
			)}
		>
			{children}
		</button>
	);
};

export default Button;
