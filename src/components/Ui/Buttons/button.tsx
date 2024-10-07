import { classNames } from "@/helpers/sanitize";
import { ButtonHTMLAttributes } from "react";

const Button = ({
	children,
	...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			{...props}
			className={classNames(
				"flex items-center leading-tight justify-center gap-2 px-4 py-3 font-semibold text-white transition rounded-md bg-accent hover:bg-accent-600 outline-focus",
				props.className
			)}
		>
			{children}
		</button>
	);
};

export default Button;
