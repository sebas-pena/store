const deleteProduct = async (productId) => {
	const res = await fetch(`/api/products/${productId}`, {
		method: "DELETE",
	})
	return res.json()
}
