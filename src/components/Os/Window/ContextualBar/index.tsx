import { useState } from "react";
import BarItem from "./BarItem";

const ContextualBar = () => {
	const [openedItem, setOpenedItem] = useState<string>("");

	return (
		<div className="flex items-center h-10 px-4 bg-slate-100 dark:bg-slate-700 dark:backdrop-blur-3xl">
			<ul className="flex items-center gap-1">
				<BarItem
					name="Fichier"
					openedItem={openedItem}
					setOpenedItem={setOpenedItem}
				/>
			</ul>
		</div>
	);
};

export default ContextualBar;
