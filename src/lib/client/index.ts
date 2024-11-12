/**
 * Middleware client.
 *
 * @return {*}
 */
export const database = () => {
	const endpoint = import.meta.env.VITE_APP_API_ENDPOINT;

	/**
	 * Create a fetch client.
	 * Support "error" and "success" responses.
	 *
	 * @param {string} path
	 * @param {object} query
	 * @param {string} method - The request method (GET, POST, PUT, DELETE)
	 *
	 * @returns {object} response
	 */
	const fetchClient = async (
		path: string,
		query: { [key: string]: string },
		method = "GET"
	) => {
		try {
			const queryParams = new URLSearchParams(query)?.toString();

			if (queryParams) path = path + "?" + queryParams;

			const response = await fetch("/api/client", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					url: endpoint + path,
					method,
					query,
				}),
			})
				.then((res) => res.json())
				.catch((error) => {
					console.error("An error has been thrown: ", error);
				});

			return response;
		} catch (error) {
			console.error(error);
		}
	};

	/**
	 * Get data from the middleware.
	 *
	 * @param {string} path
	 * @param {{ [key: string]: string }} query
	 * @param {string} model
	 *
	 * @return {*} {Promise<any>}
	 */
	const get = async (path: string, query?: { [key: string]: string }) => {
		return await fetchClient(path, query || {});
	};

	/**
	 * Post data to the middleware.
	 *
	 * @param {string} path
	 * @param {object} query
	 *
	 * @return {*} {Promise<any>}
	 */
	const post = async (path: string, query?: { [key: string]: string }) => {
		return await fetchClient(path, query || {}, "POST");
	};

	return { get, post };
};
