type AnyDetail = {
	[key: string]: any;
};

export const beacon = (
	type: string,
	detail: AnyDetail,
	notify: boolean = false,
	callback = () => {}
) => {
	console.log("Hello");

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
