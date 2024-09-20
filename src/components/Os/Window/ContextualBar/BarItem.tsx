import { classNames } from "@/helpers/sanitize";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useRef, useState } from "react";

export interface BarItemProps {
	name: string;
	children?: React.ReactNode;
}

const BarItem = ({ name, children }: BarItemProps) => {
	const submenuRef = useRef<HTMLButtonElement>(null);

	const [openedItem, setOpenedItem] = useState<boolean>(false);

	useClickOutside(submenuRef, () => {
		setOpenedItem(false);
	});

	return (
		<li className="relative baritem-submenu-list">
			<button
				className="px-2 py-1 text-sm transition hover:bg-black hover:bg-opacity-10 rounded-[3px]"
				onClick={() => setOpenedItem((prev) => !prev)}
				ref={submenuRef}
			>
				{name}
			</button>

			<ul
				className={classNames(
					"absolute left-0 bg-white bg-opacity-90 backdrop-blur-xl top-[calc(100%+6px)] w-52 rounded-md shadow-lg space-y-2 z-10 p-2 dark:bg-black transition",
					openedItem
						? "translate-y-0 opacity-100 visible"
						: "-translate-y-2 opacity-0 invisible"
				)}
			>
				{children}
			</ul>
		</li>
	);
};

export default BarItem;
