import ContextualMenu from "@/components/Ui/Menus/ContextualMenu";
import { useEffect, useState } from "react";

export const useContextualMenu = () => {
	const [contextualMenuActive, setContextualMenuActive] = useState(false);

	useEffect(() => {
		document.addEventListener("contextmenu", (e: MouseEvent) => {
			e.preventDefault();
			setContextualMenuActive(true);
		});
	}, [contextualMenuActive]);
};
