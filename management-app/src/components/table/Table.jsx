import React from "react"
import ProductTableItem from "../molecules/TableItems/ProductTableItem"
import SupplierItem from "./supplier-item/SupplierItem"
import "./Table.css"
const items = {
	suppliers: (data, i, handleRefresh) => (
		<SupplierItem supplier={data} key={i} handleRefresh={handleRefresh} />
	),
	products: (data, i) => <ProductTableItem product={data} key={i} />,
}
const headers = {
	suppliers: ["Name", "Email", "Phone", "Address", "Min. Order", ""],
	products: ["Product", "Category", "Price", "Quantity", "Rate", ""],
	orders: ["Order #", "Customer", "Payment", "Total", "Status", ""],
}
const Table = ({ rows, type, handleRefresh }) => {
	return (
		<table className="table__ctn">
			<thead className="table__head">
				<tr>
					{headers[type].map((header, i) => (
						<th key={header}>{header}</th>
					))}
				</tr>
			</thead>
			<tbody className="table__body">
				{rows.map((data, i) => items[type](data, i, handleRefresh))}
			</tbody>
		</table>
	)
}

export default Table
