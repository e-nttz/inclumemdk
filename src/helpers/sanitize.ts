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

export const slugify = (str: string) => {
	return str
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^a-z0-9-]/g, "");
};
