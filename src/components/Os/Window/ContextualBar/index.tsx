import BarItem, { BarItemProps } from "./BarItem";

const ContextualBar = ({ children }) => {
	return (
		<div className="flex items-center h-10 px-4 bg-slate-100 dark:bg-slate-700 dark:backdrop-blur-3xl">
			<ul className="flex items-center gap-1">{children}</ul>
		</div>
	);
};

ContextualBar.Menu = ({ name, children }: BarItemProps) => {
	return <BarItem name={name}>{children}</BarItem>;
};

ContextualBar.Item = ({ children, onClick }) => {
	return (
		<li>
			<button
				className="w-full px-2 text-left hover:bg-black hover:bg-opacity-5 rounded-[4px] py-2 transition text-sm"
				onClick={onClick}
			>
				{children}
			</button>
		</li>
	);
};

export default ContextualBar;
