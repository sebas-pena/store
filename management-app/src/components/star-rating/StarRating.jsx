import Star from "./Star"

const StarRating = ({
  rating = 2.5,
  size = 15,
  max = 5,
  primary = "#ffc800",
  secondary = "#fffcad",
}) => {
  return (
    <div className="star-rating__ctn">
      {Array(Number(max))
        .fill(1)
        .map((_, i) => {
          let percentage
          if (rating - (i + 1) >= 1) percentage = 100
          else if (rating - (i + 1) > 0) percentage = (rating - (i + 1)) * 100
          else percentage = 0
          return (
            <Star
              primary={primary}
              size={size}
              secondary={secondary}
              key={i}
              percentage={percentage}
            />
          )
        })}
    </div>
  )
}

export default StarRating
