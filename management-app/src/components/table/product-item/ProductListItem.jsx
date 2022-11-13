import StarRating from "../../star-rating/StarRating"

import { ReactComponent as ElipsisIcon } from "../../../assets/svg/elipsis.svg"
import "./ProductListItem.css"
import Button from "../../button/Button"
import StyledText from "../../styled-text/StyledText"
const ProductListItem = ({ product }) => {
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
	return (
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
				<button>
					<Button predefinedStyle="grey" height="35px">
						<ElipsisIcon width="20" fill="#7f7f81" />
					</Button>
				</button>
			</td>
		</tr>
	)
}

export default ProductListItem
