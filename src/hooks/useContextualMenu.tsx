// // import { useEffect, useState } from "react";

// // interface PositionProps {
// // 	x: string | number;
// // 	y: string | number;
// // }

// // export const useContextualMenu = () => {
// // 	const [isVisible, setIsVisible] = useState(false);
// // 	const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });

// // 	const showMenu = (event) => {
// // 		event.preventDefault();

// // 		const screenWidth = window.innerWidth;
// // 		const clickPositionX = event.pageX;

// // 		// check if the click is on the right side of the screen to avoid getting the menu out of the screen
// // 		const isRightSide = clickPositionX > screenWidth / 2;

// // 		const xPosition = isRightSide
// // 			? clickPositionX - 256 + "px"
// // 			: clickPositionX + "px";

// // 		setPosition({
// // 			x: xPosition,
// // 			y: event.pageY + "px",
// // 		});
// // 		setIsVisible(true);
// // 	};

// // 	const hideMenu = () => {
// // 		setIsVisible(false);
// // 	};

// // 	useEffect(() => {
// // 		document.addEventListener("click", hideMenu);
// // 		document.addEventListener("contextmenu", showMenu);

// // 		return () => {
// // 			document.removeEventListener("click", hideMenu);
// // 			document.removeEventListener("contextmenu", hideMenu);
// // 		};
// // 	}, []);

// // 	return { isVisible, position, showMenu };
// // };

// import { useEffect, useState } from "react";

// interface PositionProps {
// 	x: string | number;
// 	y: string | number;
// }

// interface MenuItem {
// 	label: string;
// 	action: () => void;
// }

// export const useContextualMenu = () => {
// 	const [isVisible, setIsVisible] = useState(false);
// 	const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });
// 	const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

// 	// const getMenuItems = (target: HTMLElement): MenuItem[] => {
// 	// 	console.log(target);

// 	// 	return [
// 	// 		{
// 	// 			name: "Coller",
// 	// 			onClick: () => {
// 	// 				// Paste selected content to target
// 	// 				navigator.clipboard.readText().then((text) => {
// 	// 					if (
// 	// 						target.tagName === "TEXTAREA" ||
// 	// 						target.tagName === "INPUT"
// 	// 					) {
// 	// 						target.value = text;
// 	// 					} else if (target.classList.contains("message")) {
// 	// 						// Add the text to the message
// 	// 						const message = target.querySelector("p");
// 	// 						message.textContent += text;
// 	// 					} else if (
// 	// 						target.tagName === "P" ||
// 	// 						target.tagName === "SPAN"
// 	// 					) {
// 	// 						target.textContent += text;
// 	// 					}
// 	// 				});
// 	// 			},
// 	// 		},
// 	// 		{ name: "Copier", action: () => document.execCommand("copy") },
// 	// 	];

// 	// 	if (target.tagName === "TEXTAREA" || target.tagName === "INPUT") {
// 	// 		return [
// 	// 			{ label: "Coller", action: () => document.execCommand("paste") },
// 	// 			{ label: "Copier", action: () => document.execCommand("copy") },
// 	// 		];
// 	// 	} else if (target.classList.contains("message")) {
// 	// 		return [
// 	// 			{
// 	// 				label: "Répondre",
// 	// 				action: () => console.log("Répondre au message"),
// 	// 			},
// 	// 			{
// 	// 				label: "Supprimer",
// 	// 				action: () => console.log("Message supprimé"),
// 	// 			},
// 	// 		];
// 	// 	} else if (target.tagName === "P" || target.tagName === "SPAN") {
// 	// 		return [
// 	// 			{
// 	// 				label: "Copier le texte",
// 	// 				action: () => document.execCommand("copy"),
// 	// 			},
// 	// 		];
// 	// 	}
// 	// 	return [
// 	// 		{
// 	// 			label: "Action par défaut",
// 	// 			action: () => console.log("Action par défaut"),
// 	// 		},
// 	// 	];
// 	// };

// 	const showMenu = (event: MouseEvent) => {
// 		event.preventDefault();
// 		const target = event.target as HTMLElement;

// 		const screenWidth = window.innerWidth;
// 		const clickPositionX = event.pageX;

// 		// check if the click is on the right side of the screen to avoid getting the menu out of the screen
// 		const isRightSide = clickPositionX > screenWidth / 2;

// 		const xPosition = isRightSide
// 			? clickPositionX - 256 + "px"
// 			: clickPositionX + "px";

// 		setPosition({
// 			x: xPosition,
// 			y: event.pageY + "px",
// 		});

// 		// Set menu items based on the target clicked
// 		const items = getMenuItems(target);
// 		setMenuItems(items);

// 		setIsVisible(true);
// 	};

// 	const hideMenu = () => {
// 		setIsVisible(false);
// 	};

// 	useEffect(() => {
// 		document.addEventListener("click", hideMenu);
// 		document.addEventListener("contextmenu", showMenu);

// 		return () => {
// 			document.removeEventListener("click", hideMenu);
// 			document.removeEventListener("contextmenu", showMenu);
// 		};
// 	}, []);

// 	return { isVisible, position, menuItems };
// };
