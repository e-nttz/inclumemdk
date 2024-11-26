import { useEffect } from "react";

export const useKeyboardEvent = (key: string, callback: () => void) => {
	const handleKeyPress = (e: KeyboardEvent) => {
		if (e.key === key) {
			e.preventDefault();
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", handleKeyPress);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	});
};
