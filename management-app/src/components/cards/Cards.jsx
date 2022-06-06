import CardBG1 from "../../assets/images/cards/card-background1.webp"
import CardBG2 from "../../assets/images/cards/card-background2.webp"
import CardBG3 from "../../assets/images/cards/card-background3.webp"
import CardBG4 from "../../assets/images/cards/card-background4.webp"
import CardBG5 from "../../assets/images/cards/card-background5.webp"
import CardBG6 from "../../assets/images/cards/card-background6.webp"

import "./cards.css"

const backgrounds = [CardBG1, CardBG2, CardBG3, CardBG4, CardBG5, CardBG6]

const Cards = ({ background = 0 }) => {
  background = backgrounds[background]

  let backgroundStyle = {
    backgroundImage: `url(${background})`,
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
  }

  return (
    <div className="cards__ctn">
      <div className="card__background" style={backgroundStyle}></div>
    </div>
  )
}

export default Cards
