/**
 * @module Storage
 */

/**
 * Use local storage to save data
 *
 * @method
 * @memberof module:Storage
 *
 * @param {string} key
 * @param {string} value
 * @param {boolean} [temporary=false]
 *
 * @returns {void}
 */
export const setLocalStorage = (
	key: string,
	value: string,
	temporary = false
) => {
	if (typeof localStorage === "undefined") return;

	if (temporary) {
		sessionStorage.setItem(key, value);

		return;
	}

	localStorage.setItem(key, value);
};

/**
 * Get data from local storage
 *
 * @method
 * @memberof module:Storage
 *
 * @param {string} key
 * @param {boolean} [temporary=false]
 *
 * @returns {string}
 */
export const getLocalStorage = (key: string, temporary = false): string => {
	if (typeof localStorage === "undefined") return "";

	if (temporary) {
		return sessionStorage.getItem(key) || "";
	}

	return localStorage.getItem(key) || "";
};

/**
 * Save the session linked to the user like `key-sessionId`
 *
 * @method
 * @memberof module:Storage
 *
 * @param {string} sessionId
 * @param {string} key
 * @param {object | string} value
 *
 * @returns {void}
 */
export const storeLocalSession = (
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
 * @memberof module:Storage
 *
 * @param {string} sessionId
 * @param {string} key
 *
 * @returns {object | string}
 *
 */
export const getLocalSession = (
	sessionId: string,
	key: string
): object | string => {
	if (typeof localStorage === "undefined") return "";

	return JSON.parse(localStorage.getItem(`${key}-${sessionId}`) || "");
};
