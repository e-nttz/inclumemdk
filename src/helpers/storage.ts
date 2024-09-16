/**
 * Use local storage to save data
 *
 * @param {string} key
 * @param {string} value
 *
 * @returns {void}
 */
export const setLocalStorage = (key: string, value: string) => {
	if (typeof localStorage === "undefined") return;

	localStorage.setItem(key, value);
};

/**
 * Get data from local storage
 *
 * @param {string} key
 *
 * @returns {string}
 */
export const getLocalStorage = (key: string): string => {
	if (typeof localStorage === "undefined") return "";

	return localStorage.getItem(key) || "";
};
