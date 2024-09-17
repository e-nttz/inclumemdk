import { useEffect, useState } from "react";

interface PositionProps {
	x: string | number;
	y: string | number;
}

export const useContextualMenu = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });

	const showMenu = (event) => {
		event.preventDefault();

		const screenWidth = window.innerWidth;
		const clickPositionX = event.pageX;

		// check if the click is on the right side of the screen to avoid getting the menu out of the screen
		const isRightSide = clickPositionX > screenWidth / 2;

		const xPosition = isRightSide
			? clickPositionX - 256 + "px"
			: clickPositionX + "px";

		setPosition({
			x: xPosition,
			y: event.pageY + "px",
		});
		setIsVisible(true);
	};

	const hideMenu = () => {
		setIsVisible(false);
	};

	useEffect(() => {
		document.addEventListener("click", hideMenu);
		document.addEventListener("contextmenu", showMenu);

		return () => {
			document.removeEventListener("click", hideMenu);
			document.removeEventListener("contextmenu", hideMenu);
		};
	}, []);

	return { isVisible, position, showMenu };
};
