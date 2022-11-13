import React, { useContext, useEffect, useState } from "react"
import AddButton from "../../components/button/add-button/AddButton"
import SearchInput from "../../components/input/SearchInput"
import SuppliersList from "../../components/suppliers-list/SuppliersList"
import Table from "../../components/table/Table"
import { StoreContext } from "../../store/StoreProvider"
import "./SuppliersPage.css"
const SuppliersPage = () => {
	const [search, setSearch] = useState("")
	return (
		<div className="suppliers-page__ctn">
			<div className="product-page__header">
				<SearchInput
					onChange={setSearch}
					value={search}
					placeholder="Supplier Name"
					maxWidth={250}
				/>
				<div className="product-page__add-product">
					<AddButton onClick={() => {}}>Add Supplier</AddButton>
				</div>
			</div>
			<Table
				type="suppliers"
				rows={[
					{
						id: "123345123",
						name: "Paco",
						email: "algo@gmail.com",
						phone: "123456789",
						address: "Comestibles",
						minimumOrder: {
							currency: "$",
							value: 0,
						},
					},
				]}
			/>
		</div>
	)
}

export default SuppliersPage
