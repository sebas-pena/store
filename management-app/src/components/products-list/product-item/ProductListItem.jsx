import StarRating from "../../star-rating/StarRating"

import { ReactComponent as MoreIcon } from "../../../assets/svg/more.svg"
import "./ProductListItem.css"
const ProductListItem = ({ product }) => {
  const {
    id,
    name,
    category,
    variants,
    price,
    quantity,
    rate,
    imageUrl,
    description,
    reviewsCount,
  } = product
  return (
    <tr className="product-list-item__ctn">
      <td className="product-list-item__product">
        <img src={imageUrl} alt="name" />
        <div className="product-list-item__product-description">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
      </td>
      <td>
        <span className="product-list-item__category">{category}</span>
      </td>
      <td>algo</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td className="product-list-item__rate">
        <StarRating size="16" rating={rate} />
        <span>({reviewsCount})</span>
      </td>
      <td>
        <button className="product-list-item__btn-edit">Edit</button>
      </td>
      <td>
        <button className="product-list-item__btn-more">
          <MoreIcon width="20" fill="#7f7f81" />
        </button>
      </td>
    </tr>
  )
}

export default ProductListItem
