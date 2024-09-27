import { RefObject, useEffect } from "react";

/**
 * @module Hooks/useClickOutside
 * @namespace Hooks
 * @description A custom hook that triggers a callback when clicking outside a specified element.
 */

/**
 * A custom React hook that triggers a callback when a user clicks outside of the referenced element.
 * Useful for closing dropdowns, modals, or any other component when clicking outside.
 *
 * @function useClickOutside
 * @memberof Hooks
 *
 * @param {RefObject<HTMLElement>} ref - A reference to the target element.
 * @param {Function} callback - A function to execute when a click outside the target element occurs. Receives the MouseEvent as a parameter.
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
