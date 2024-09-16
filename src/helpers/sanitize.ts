/**
 * Set the class names dynamically
 *
 * @param  {...any} classes
 *
 * @return {string}
 */
export const classNames = (...classes: (string | boolean)[]): string => {
	return classes.filter(Boolean).join(" ");
};
