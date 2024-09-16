import { classNames } from "@/helpers/sanitize";
import ArrowRight from "@/assets/icons/arrow-right.svg?react";
import { useTranslation } from "react-i18next";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	hideLabel?: boolean;
	handleSubmitButton?: (e: React.MouseEvent<HTMLButtonElement>) => void;
	wrapperClassName?: string;
}

const Input = ({
	label,
	hideLabel = false,
	handleSubmitButton,
	wrapperClassName,
	...props
}: InputProps) => {
	const { t } = useTranslation();

	return (
		<label className={classNames(wrapperClassName)}>
			<span
				className={classNames(
					hideLabel && "sr-only",
					"text-gray dark:text-white mb-2 font-medium ml-0.5"
				)}
			>
				{label}
			</span>

			<span className="relative block">
				<input
					{...props}
					className={classNames(
						"block w-full px-3 py-3 border-2 border-black/5 rounded-md sm:text-sm focus:outline-none backdrop-blur bg-white/75 dark:bg-gray/75 text-gray dark:text-white dark:border-white/5 focus:border-accent dark:focus:border-accent-dark transition-all focus-visible:border-accent focus:ring-transparent focus:!ring-0 outline-transparent focus:shadow-none",
						handleSubmitButton && "pr-10",
						props.className
					)}
				/>

				{handleSubmitButton && (
					<button
						type="submit"
						className="absolute z-20 -translate-y-1/2 top-1/2 right-2"
						onClick={handleSubmitButton}
					>
						<span className="sr-only">{t("Envoyer")}</span>
						<ArrowRight className="w-6 h-auto text-gray dark:text-white" />
					</button>
				)}
			</span>
		</label>
	);
};

export default Input;
