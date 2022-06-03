import { ReactComponent as StarIcon } from "../../assets/svg/star.svg"

import "./starrating.css"
const ratings = {
  0: "0%",
  0.5: "10%",
  1: "20%",
  1.5: "30%",
  2: "40%",
  2.5: "50%",
  3: "60%",
  3.5: "70%",
  4: "80%",
  4.5: "90%",
  5: "100%",
}

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating__ctn">
      <StarIcon width="25" fill="grey" className="star-rating__star" />
      <StarIcon width="25" fill="grey" className="star-rating__star" />
      <StarIcon width="25" fill="grey" className="star-rating__star" />
      <StarIcon width="25" fill="grey" className="star-rating__star" />
      <StarIcon width="25" fill="grey" className="star-rating__star" />
      <div className="star-rating__overlays">
        <div
          className="star-rating__overlay-yellow"
          style={{ width: ratings[rating] }}
        ></div>
        <div className="star-rating__overlay-gray"></div>
      </div>
    </div>
  )
}

export default StarRating
