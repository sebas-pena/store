import SupplierItem from "./supplier-item/SupplierItem"
import "./SuppliersList.css"

const SuppliersList = ({ suppliers = [] }) => {
	return (
		<table className="suppliers-list__ctn">
			<thead className="suppliers-list__header">
				<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Address</th>
					<th>Min. Order Ammount</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{suppliers.map((supplier) => (
					<SupplierItem supplier={supplier} key={supplier.id} />
				))}
			</tbody>
		</table>
	)
}

export default SuppliersList
