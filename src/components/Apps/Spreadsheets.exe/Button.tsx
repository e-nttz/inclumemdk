import { memo } from "react";

const Button = memo(
	({
		children,
		className,
	}: {
		children: React.ReactNode;
		className: string;
	}) => {
		return <button className={className}>{children}</button>;
	}
);

export default Button;
