import { RefObject, useEffect } from "react";

export const useClickOutside = (ref: RefObject<any>, callback: Function) => {
	const handleClick = (e: MouseEvent) => {
		if (!ref?.current) return;

		if (ref.current && !ref.current.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClick);

		return () => {
			document.removeEventListener("click", handleClick);
		};
	});
};
