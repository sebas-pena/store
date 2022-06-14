const createProduct = async (product) => {
	const res = await fetch("/api/products", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	})
	return res.json()
}
