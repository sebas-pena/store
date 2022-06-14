import { useEffect, useState } from "react"

const useOrders = () => {
	const [orders, setOrders] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const response = await fetch("/api/orders")
				const data = await response.json()
				setOrders(data)
				setLoading(false)
			} catch (error) {
				setError(error)
				setLoading(false)
			}
		}
		fetchOrders()
	}, [])

	return {
		orders,
		loading,
		error,
	}
}

export default useOrders
