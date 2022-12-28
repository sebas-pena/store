import { useState, useContext } from "react"
import fetchAstro from "../../../helpers/fetchAstro"
import { StoreContext } from "../../../store/StoreProvider"
import ConfirmActionModal from "../../modals/confirm-action/ConfirmActionModal"
import NewSupplierModal from "../../modals/new-supplier/NewSupplierModal"
import ShowSupplierModal from "../../modals/show-supplier/ShowSupplierModal"
import DeleteButton from "../../molecules/Buttons/Delete/DeleteButton"
import EditButton from "../../molecules/Buttons/Edit/EditButton"
import StyledText from "../../styled-text/StyledText"
import "./SupplierItem.css"

const SupplierItem = ({ supplier, handleRefresh }) => {
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const [showSupplierInfo, setShowSupplierInfo] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const { store } = useContext(StoreContext)
	const { token } = store

	return (
		<>
			<tr
				className="supplier-item__ctn"
				onClick={() => setShowSupplierInfo(true)}
			>
				<td>
					<StyledText semiBold maxLines={1}>
						{supplier.name}
					</StyledText>
				</td>
				<td>
					<StyledText semiBold maxLines={1}>
						{supplier.email}
					</StyledText>
				</td>
				<td>
					<StyledText>{supplier.phone}</StyledText>
				</td>
				<td>
					<StyledText>{supplier.address}</StyledText>
				</td>
				<td>
					<StyledText>
						{supplier.min_order.currency}
						{supplier.min_order.value}
					</StyledText>
				</td>
				<td>
					<div className="supplier-item__actions-ctn">
						<EditButton
							onClick={(e) => {
								e.stopPropagation()
								setShowEditModal(true)
							}}
						/>
						<DeleteButton
							onClick={(e) => {
								e.stopPropagation()
								setShowDeleteModal(true)
							}}
						/>
					</div>
				</td>
			</tr>
			{showDeleteModal && (
				<ConfirmActionModal
					handleClose={() => setShowDeleteModal(false)}
					title="Are you sure you want to delete it ?"
					description="If you change your mind, you will not be able to recover it."
					confirmDanger
					confirmText="Delete"
					cancelText="Keep Contact"
					onConfirm={() => {
						fetchAstro(`supplier/${supplier._id}`, {
							method: "DELETE",
							headers: {
								authorization: `Bearer ${token}`,
							},
						})
						handleRefresh()
					}}
				/>
			)}
			{showEditModal && (
				<NewSupplierModal
					handleClose={() => {
						handleRefresh()
						setShowEditModal(false)
					}}
					initialValues={supplier}
				/>
			)}
			{showSupplierInfo && (
				<ShowSupplierModal
					values={supplier}
					handleClose={() => setShowSupplierInfo(false)}
				/>
			)}
		</>
	)
}

export default SupplierItem
