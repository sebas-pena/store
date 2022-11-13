import React from "react"
import OrderItem from "./order-item/OrderItem"
import ProductListItem from "./product-item/ProductListItem"
import SupplierItem from "./supplier-item/SupplierItem"
import "./Table.css"
const items = {
	suppliers: (data, i) => <SupplierItem supplier={data} key={i} />,
	orders: (data, i) => <OrderItem order={data} key={i} />,
	products: (data, i) => <ProductListItem product={data} key={i} />,
}
const headers = {
	suppliers: ["Name", "Email", "Phone", "Address", "Min. Order Ammount", ""],
	products: ["Product", "Category", "Price", "Quantity", "Rate", ""],
	orders: ["Order #", "Customer", "Payment", "Total", "Status", ""],
}
const Table = ({ rows, type }) => {
	return (
		<table className="table__ctn">
			<thead className="table__head">
				<tr>
					{headers[type].map((header) => (
						<th>{header}</th>
					))}
				</tr>
			</thead>
			<tbody className="table__body">
				{rows.map((data, i) => items[type](data, i))}
			</tbody>
		</table>
	)
}

export default Table
