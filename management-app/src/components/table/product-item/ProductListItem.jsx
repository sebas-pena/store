import { useState } from "react"
import StarRating from "../../star-rating/StarRating"
import "./ProductListItem.css"
import StyledText from "../../styled-text/StyledText"
import EditButton from "../../button/edit-button/EditButton"
import DeleteButton from "../../button/delete-button/DeleteButton"
import ConfirmActionModal from "../../modals/confirm-action/ConfirmActionModal"
import fetchAstro from "../../../helpers/fetchAstro"
import { useContext } from "react"
import { StoreContext } from "../../../store/StoreProvider"
const ProductListItem = ({ product, handleRefresh }) => {
	const {
		id,
		name,
		category,
		price,
		quantity,
		rate,
		imageUrl,
		description,
		reviewsCount,
	} = product
	const [showDeleteModal, setShowDeleteModal] = useState(false)
	const { store } = useContext(StoreContext)
	const { token } = store
	return (
		<>
			<tr className="product-list-item">
				<td className="product-list-item__product">
					<img src={imageUrl} alt="name" />
					<div className="product-list-item__product-description">
						<StyledText asHeader={3} size="16px" semiBold>
							{name}
						</StyledText>
						<StyledText maxLines={1} size="14px">
							{description}
						</StyledText>
					</div>
				</td>
				<td>
					<span className="product-list-item__category">{category}</span>
				</td>
				<td>
					<StyledText>${price}</StyledText>
				</td>
				<td>
					<StyledText>{quantity}</StyledText>
				</td>
				<td>
					<StarRating size="16" rating={rate} />
					<StyledText size="14px" semiBold noBreak>
						{reviewsCount} - Reviews
					</StyledText>
				</td>
				<td>
					<div className="product-list-item__actions-ctn">
						<EditButton onClick={() => {}} />
						<DeleteButton onClick={() => setShowDeleteModal(true)} />
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
					cancelText="Keep Product"
					onConfirm={() => {
						fetchAstro(`products/${product._id}`, {
							method: "DELETE",
							headers: {
								authorization: `Bearer ${token}`,
							},
						})
						handleRefresh()
					}}
				/>
			)}
		</>
	)
}

export default ProductListItem
