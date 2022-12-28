import productImage from "../../../assets/images/product-test.png"
import FlexContainer from "../../atoms/Container/FlexContainer"
import DivContainer from "../../atoms/Container/DivContainer"
import Text from "../../atoms/Text/Text"
import StarRating from "../../molecules/StartRating/StartRating"

const BestSelling = () => {
	return (
		<FlexContainer
			vertical
			width="100%"
			maxWidth={300}
			background="#fff"
			padding={20}
			radius={20}
		>
			<Text as="h3" size={18} color="#404043" regular>
				Best Selling
			</Text>
			<Text heavy size={25} color="#404043">
				Product Name
			</Text>
			<DivContainer flex={1} height="0px" align="center" padding={10}>
				<img src={productImage} alt="product" height="100%" />
			</DivContainer>
			<StarRating rating={4.3} color="#404043" />
			<Text size={18} heavy>
				$100
			</Text>
			<Text maxLines={3} addEllipsis color="#404043">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, nam
				soluta? Eius ut velit minima, doloremque amet ipsa pariatur, labore,
				totam facilis ullam adipisci explicabo eaque a recusandae laborum et.
			</Text>
		</FlexContainer>
	)
}

export default BestSelling
