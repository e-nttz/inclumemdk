import { classNames } from "@/helpers/sanitize";

const Input = ({ indexRow, indexCol }) => {
	return (
		<input
			type="text"
			className={classNames(
				`w-full h-8 text-sm text-left border-b border-r bg-white dark:bg-gray-800 border-gray-50 last:border-b-0 px-1 outline-none`
			)}
			style={{
				gridColumn: `${indexRow + 2} / ${indexRow + 3}`,
				gridRow: `${indexCol + 2} / ${indexCol + 3}`,
			}}
		/>
	);
};

export default Input;
