import { classNames } from "@/helpers/sanitize";
import { useState } from "react";

const Radio = ({
	type = "radio",
	name,
	question,
	image = "",
	value,
	selectedValues = [],
	onChange,
	style = "vertical",
}) => {
	const checked = selectedValues.includes(value + "");
	const [isZoomed, setIsZoomed] = useState(false);
	const handleChange = (e) => {
		if (onChange) {
			onChange(e);
		}
	};

	return (
		<label
			className={classNames(
				"group transition",
				style !== "image" &&
					"bg-white dark:bg-white/5 dark:border-accent-dark dark:border-opacity-10 border-[2px] border-accent border-opacity-10 p-6 gap-6 items-center rounded-[12px] flex shadow-[0px_6px_20px_0px_#005FB814] hover:border-opacity-25 peer-checked:border-opacity-100 hover:scale-105",
				checked && "!border-opacity-100",
				style === "icon" && "flex-col-reverse h-full flex-1 ",
				style === "image" &&
					"h-full flex flex-col-reverse items-center gap-4"
			)}
		>
			<div className="relative">
				<input
					className="absolute inset-0 opacity-0 peer cursor-pointer" 
					type={type}
					name={name}
					value={value}
					checked={checked}
					onChange={handleChange}
				/>
				<span
					className={classNames(
						"relative flex items-center justif-center w-9 h-9 bg-accent dark:bg-accent-dark opacity-15 peer-checked:opacity-100 group-hover:opacity-30 transition peer-checked:[&>span]:border-accent peer-checked:[&>svg]:opacity-100 dark:peer-checked:[&>span]:border-accent-dark cursor-pointer",
						type === "radio" ? "rounded-full" : "rounded-[12px]"
					)}
				>
					<span
						className={classNames(
							"absolute w-7 h-7 -translate-x-1/2 border-[3px] transition border-white border-solid -translate-y-1/2 bg-accent dark:bg-accent-dark top-1/2 left-1/2",
							type === "radio" ? "rounded-full" : "rounded-[8px]"
						)}
					/>

					<svg
						width="23"
						height="23"
						viewBox="0 0 23 23"
						fill="none"
						className="relative z-10 mx-auto transition opacity-0 peer-checked:opacity-100"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M11.3821 15.5397C10.9105 16.0132 10.2768 16.25 9.65789 16.25C9.03895 16.25 8.40526 16.0132 7.91895 15.5249L4.5 12.2103L6.20947 10.4346L9.64316 13.7788L16.7758 6.75L18.5 8.5109L11.3821 15.5545V15.5397Z"
							fill="white"
						/>
					</svg>
				</span>
			</div>

			{style === "vertical" && <span>{question}</span>}

			{style === "icon" && (
				<figure className="aspect-square w-[120px] overflow-hidden">
					<img src={image} alt={question} className="object-cover" />
				</figure>
			)}

			{style === "image" && (
			<>
				<figure
				className={classNames(
					"max-w-[400px] rounded-[12px] overflow-hidden shadow-[0px_6px_20px_0px_#005FB814] border-2 border-accent/10 group-hover:-translate-y-2 transition cursor-zoom-in",
					checked && "border-accent/100"
				)}
				onClick={() => setIsZoomed(true)} // Ouvre l'image au clic
				>
				<img src={image} alt={question} className="object-cover w-full h-auto" />
				</figure>

				{isZoomed && (
					<div 
						className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50" 
						onClick={() => setIsZoomed(false)} // Ferme au clic
					>
						<img src={image} alt={question} className="h-[80%] max-w-full max-h-full rounded-lg" />
					</div>
				)}
			</>
			)}
		</label>
	);
};

export default Radio;