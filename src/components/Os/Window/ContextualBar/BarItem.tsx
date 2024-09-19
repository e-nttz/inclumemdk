import { classNames } from "@/helpers/sanitize";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef } from "react";

interface BarItemProps {
	name: string;
	openedItem: string;
	setOpenedItem: React.Dispatch<React.SetStateAction<string>>;
}

const BarItem = ({ name, openedItem, setOpenedItem }: BarItemProps) => {
	const handleOpening = () => {
		if (openedItem === name) {
			setOpenedItem("");
		} else {
			setOpenedItem(name);
		}
	};

	const isOpened = openedItem === name;

	const submenuRef = useRef<HTMLUListElement>(null);

	useClickOutside(submenuRef, (e: MouseEvent) => {
		// Check if e.target has the id of start-menu, or if it's a child of start-menu
		if ((e.target as HTMLElement).closest(".baritem-submenu-list")) {
			return;
		}

		setOpenedItem("");
	});

	return (
		<li className="relative baritem-submenu-list">
			<button
				className="px-2 py-1 text-sm transition hover:bg-black hover:bg-opacity-10 rounded-[3px]"
				onClick={handleOpening}
			>
				{name}
			</button>
			<ul
				className={classNames(
					"absolute left-0 bg-white bg-opacity-90 backdrop-blur-xl top-[calc(100%+6px)] w-52 rounded-md shadow-lg space-y-2 z-10 p-2 dark:bg-black transition",
					isOpened
						? "translate-y-0 opacity-100 visible"
						: "-translate-y-2 opacity-0 invisible"
				)}
				ref={submenuRef}
			>
				<li>
					<button className="w-full px-2 text-left hover:bg-black hover:bg-opacity-5 rounded-[4px] py-2 transition text-sm">
						Fermer l'application
					</button>
				</li>
			</ul>
		</li>
	);
};

export default BarItem;
