import React, { useContext, useEffect } from "react"
import SuppliersList from "../../components/suppliers-list/SuppliersList"
import { StoreContext } from "../../store/StoreProvider"
import "./SuppliersPage.css"
const SuppliersPage = () => {
	const { dispatch } = useContext(StoreContext)

	useEffect(() => {
		dispatch({ type: "SET_TITLE", payload: "Suppliers" })
	}, [])

	return (
		<div className="suppliers-page__ctn">
			<SuppliersList
				suppliers={[
					{
						id: "123345123",
						name: "Paco",
						email: "algo@gmail.com",
						phone: "123456789",
						tag: "Comestibles",
					},
				]}
			/>
		</div>
	)
}

export default SuppliersPage
