const POST = async (request) => {
	try {
		const { url, query = {}, method = "GET" } = await request.json();

		if (!url) {
			return new Response("URL is required", {
				status: 400,
			});
		}

		const fetchedData = await fetch(url, {
			method,
			headers: {
				"Content-Type": "application/json",
			},
			body: method === "GET" ? null : JSON.stringify(query),
		})
			.then((res) => res.json())
			.catch((err) => {
				return { error: "Failed to fetch data", details: err };
			});

		return Response.json(fetchedData);
	} catch (err) {
		return Response.json(
			{ error: "Internal server error", details: err },

			{
				status: 500,
			}
		);
	}
};

export { POST };
