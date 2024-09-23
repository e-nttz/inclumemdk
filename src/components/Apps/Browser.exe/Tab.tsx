import { classNames } from "@/helpers/sanitize";

import IconDismiss from "@/assets/icons/dismiss.svg?react";

interface TabProps {
	children: React.ReactNode;
	id: number;
	currentTab: number;
	setCurrentTab: (tab: number) => void;
}

const Tab = ({ children, id, currentTab, setCurrentTab }: TabProps) => {
	const handleTabChange = () => {
		setCurrentTab(id);
	};
	const handleTabClose = () => {
		alert("Fermer l'onglet");
	};

	return (
		<div
			className={classNames(
				"relative w-64 text-left py-2 px-4 rounded-t-md transition flex items-center justify-between group shadow",
				currentTab === id
					? "bg-[#F7F7F7]"
					: "bg-[#E8E8E8] hover:bg-[#F7F7F7] hover:bg-opacity-70"
			)}
		>
			<span
				className={classNames(
					"line-clamp-1 text-clip",
					currentTab === id
						? "cursor-default before:w-full before:h-full before:transition before:rounded-t-md before:absolute before:inset-0 before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_75%,rgba(247,247,247,1)_82%,rgba(247,247,247,1)_100%)]"
						: "before:w-full before:h-full before:transition before:bg-transparent before:rounded-t-md before:absolute before:inset-0 group-hover:before:bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0)_75%,rgba(240,240,240,1)_82%,rgba(240,240,240,1)_100%)]"
				)}
			>
				{children}
			</span>
			<button
				onClick={handleTabChange}
				className={classNames(
					"absolute inset-0",
					currentTab === id ? "pointer-events-none" : ""
				)}
			>
				<span className="sr-only">Activer cet onglet</span>
			</button>
			<button
				onClick={handleTabClose}
				className={classNames(
					"transition absolute top-0 bottom-0 my-auto right-4",
					currentTab === id
						? "opacity-100"
						: "opacity-0 group-hover:opacity-100"
				)}
			>
				<IconDismiss className="w-4 h-auto" />
				<span className="sr-only">Fermer cet onglet</span>
			</button>
		</div>
	);
};

export default Tab;
