import { useState, useEffect } from "react"

export const useProducts = () => {
	const [products, setProducts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
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

	return {
		products,
		loading,
		error,
	}
}
