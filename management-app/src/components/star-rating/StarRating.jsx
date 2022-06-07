import { ReactComponent as StarIcon } from "../../assets/svg/star.svg"

import "./StarRating.css"

const StarRating = ({
  rating = 2.5,
  size = 15,
  max = 5,
  primary = "#ffc800",
  secondary = "#fffcad",
}) => {
  const fillStyle = {
    width: size * rating,
    backgroundColor: primary,
  }
  const emptyStyle = {
    flex: 1,
    backgroundColor: secondary,
  }

  return (
    <div className="star-rating__ctn">
      {Array(Number(max))
        .fill(1)
        .map((_, i) => (
          <StarIcon
            width={size}
            fill="#888888"
            className="star-rating__star"
            key={i}
          />
        ))}
      <div className="star-rating__overlays">
        <div className="star-rating__overlay-yellow" style={fillStyle}></div>
        <div className="star-rating__overlay-gray" style={emptyStyle}></div>
      </div>
    </div>
  )
}

export default StarRating
