import StarRating from "../star-rating/StarRating"
import productImage from "../../assets/images/product-test.png"
import "./bestseller.css"
const BestSeller = () => {
  return (
    <div className="best-seller-dashboard">
      <div className="best-seller-dashboard-header">
        <h3>Best Seller</h3>
        <p className="best-seller-dashboard__name">Product Name</p>
      </div>
      <figure className="best-seller-dashboard__img">
        <img src={productImage} alt="product" />
      </figure>
      <StarRating rating={4.3} size="15" max="5" />
      <p className="best-seller-dashboard__price">$100</p>
      <p className="best-seller-dashboard__description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, nam
        soluta? Eius ut velit minima, doloremque amet ipsa pariatur, labore,
        totam facilis ullam adipisci explicabo eaque a recusandae laborum et.
      </p>
    </div>
  )
}

export default BestSeller
