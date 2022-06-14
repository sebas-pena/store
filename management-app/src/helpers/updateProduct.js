const updateProduct = async (product, productId) => {
	const res = await fetch(`/api/products/${productId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	})
	return res.json()
}
