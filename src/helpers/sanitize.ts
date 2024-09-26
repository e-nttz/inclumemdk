/**
 * Set the class names dynamically
 *
 * @method
 *
 * @param {string[]} classes - The classes to set
 *
 * @return {string}
 */
export const classNames = (...classes: (string | boolean)[]): string => {
	return classes.filter(Boolean).join(" ");
};
