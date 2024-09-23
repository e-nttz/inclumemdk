type AnyDetail = {
	[key: string]: any;
};

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
