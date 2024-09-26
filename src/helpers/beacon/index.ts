type AnyDetail = {
	[key: string]: any;
};

/**
 * Dispatch a beacon event
 *
 * This method is used to dispatch an event that can be
 * listened to by other parts of the application.
 *
 * @method
 *
 * @param {string} type - The type of the event
 * @param {AnyDetail} detail - The detail of the event
 * @param {boolean} notify - Whether to notify the user
 * @param {Function} callback - A callback function to run after the event is dispatched
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
 * Listen for a beacon event
 *
 * @method
 *
 * @param {string} type - The type of the event
 * @param {Function} callback - The callback function to run when the event is dispatched
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
