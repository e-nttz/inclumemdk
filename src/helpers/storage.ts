/**
 * Use local storage to save data
 *
 * @method
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
 * @method
 *
 * @param {string} key
 *
 * @returns {string}
 */
export const getLocalStorage = (key: string): string => {
	if (typeof localStorage === "undefined") return "";

	return localStorage.getItem(key) || "";
};

/**
 * Save the session linked to the user like `key-sessionId`
 *
 * @method
 *
 * @param {string} sessionId
 * @param {string} key
 * @param {object | string} value
 *
 * @returns {void}
 */
export const storeSession = (
	sessionId: string,
	key: string,
	value: object | string
) => {
	if (typeof localStorage === "undefined") return;

	return localStorage.setItem(`${key}-${sessionId}`, JSON.stringify(value));
};

/**
 * Get the session linked to the user like `key-sessionId`
 *
 * @method
 *
 * @param {string} sessionId
 * @param {string} key
 *
 * @returns {object | string}
 *
 */
export const getSession = (sessionId: string, key: string): object | string => {
	if (typeof localStorage === "undefined") return "";

	return JSON.parse(localStorage.getItem(`${key}-${sessionId}`) || "");
};
