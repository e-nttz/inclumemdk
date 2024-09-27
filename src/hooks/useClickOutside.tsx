import { RefObject, useEffect } from "react";

/**
 * A custom hook to handle click outside events.
 *
 * @interface useClickOutside
 *
 * @param {RefObject} ref - The reference to the element
 * @param {Function} callback - The callback function to run
 *
 * @returns {void}
 */
export const useClickOutside = (
	ref: RefObject<any>,
	callback: (e: MouseEvent) => void
) => {
	const handleClick = (e: MouseEvent) => {
		if (!ref?.current) return;

		if (ref.current && !ref.current.contains(e.target)) {
			callback(e);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	}, []);
};
