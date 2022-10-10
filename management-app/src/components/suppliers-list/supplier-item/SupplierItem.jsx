import { useState } from "react"
import Button from "../../button/Button"
import "./SupplierItem.css"

const SupplierItem = ({ supplier }) => {
	return (
		<tr className="supplier-item" key={supplier.id}>
			<td>{supplier.name}</td>
			<td>{supplier.email}</td>
			<td>{supplier.phone}</td>
			<td>{supplier.tag}</td>
			<td>
				<Button height="35px" predefinedStyle="danger" onClick={""}>
					Eliminar
				</Button>
			</td>
		</tr>
	)
}

export default SupplierItem
