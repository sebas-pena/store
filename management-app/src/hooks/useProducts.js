import { useState, useEffect } from "react"
import { productsMock } from "../mocks/products"

export const useProducts = ({ page, query }) => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	console.log("useProducts", { page, query })

	useEffect(() => {
		setLoading(false)
		setProducts(productsMock)
	}, [page, query])
	/* useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch("/api/products")
				const data = await response.json()
				setProducts(data)
				setLoading(false)
			} catch (error) {
				setError(error)
				setLoading(false)
			}
		}
		fetchProducts()
	}, [])
 */
	return {
		products,
		loading,
		error,
	}
}
