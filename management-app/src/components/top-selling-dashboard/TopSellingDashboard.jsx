import StarRating from "../star-rating/StarRating"
import "./topsellingdashboard.css"
const TopSellingDashboard = () => {
  return (
    <div>
      <StarRating rating={0} />
      <StarRating rating={0.5} />
      <StarRating rating={1} />
      <StarRating rating={1.5} />
      <StarRating rating={2} />
      <StarRating rating={2.5} />
      <StarRating rating={3} />
      <StarRating rating={3.5} />
      <StarRating rating={4} />
      <StarRating rating={4.5} />
      <StarRating rating={5} />
    </div>
  )
}

export default TopSellingDashboard
