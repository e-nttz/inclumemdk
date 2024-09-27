/**
 * @module Beacon
 * @description A module to dispatch and listen to events.
 */

/**
 * @typedef {Object} AnyDetail
 * @property {any} [key] - Any additional detail for the event.
 */

/**
 * Dispatch a beacon event.
 *
 * This method allows dispatching an event that other parts of the application can listen to.
 *
 * @function beacon
 * @memberof module:Beacon
 *
 * @param {string} type - The type of the event
 * @param {AnyDetail} detail - The details of the event
 * @param {boolean} [notify=false] - Whether the user should be notified
 * @param {Function} [callback] - A callback function to run after the event is dispatched
 *
 * @returns {void}
 */
export const beacon = (
	type: string,
	detail: AnyDetail,
	notify: boolean = false,
	callback = () => {}
) => {
	window.dispatchEvent(
		new CustomEvent("beacon", {
			detail: {
				type,
				notify,
				...detail,
			},
		})
	);

	callback();
};

/**
 * Listen for a beacon event.
 *
 * This method allows listening for an event of type "beacon."
 *
 * @function listenBeacon
 * @memberof module:Beacon
 *
 * @param {string} type - The type of event to listen for
 * @param {Function} callback - The callback function to execute when the event is received
 *
 * @returns {Function} - A function to remove the event listener
 */
export const listenBeacon = (type: string, callback: (e: any) => void) => {
	const listener = (e: any) => {
		if (e.detail && e.detail.type === type) {
			callback(e);
		}
	};

	window.addEventListener("beacon", listener);

	return () => {
		window.removeEventListener("beacon", listener);
	};
};
