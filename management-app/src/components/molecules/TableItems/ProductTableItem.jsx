import EditButton from "../Buttons/Edit/EditButton"
import DeleteButton from "../Buttons/Delete/DeleteButton"
import Container from "../../atoms/Container/Container"
import Text from "../../atoms/Text/Text"
import FlexContainer from "../../atoms/Container/FlexContainer"
import StarRating from "../StartRating/StartRating"

const ProductTableItem = ({
	id,
	name,
	category,
	price,
	quantity,
	rate,
	imageUrl,
	description,
	reviewsCount,
}) => {
	return (
		<Container
			as="tr"
			height={75}
			focusable
			radius={5}
			role="link"
			onKeyDown={(e) => console.log("triggered")}
			onClick={(e) => console.log("triggered")}
			aria-label={`Product: ${name}`}
		>
			<FlexContainer
				inline
				as="td"
				gap={10}
				height={75}
				align="center"
				width="100%"
			>
				<Container width={75} height={75}>
					<img src={imageUrl} alt="name" />
				</Container>
				<Container maxWidth={400} flex={1}>
					<Text size={16} as="h3" bold>
						{name}
					</Text>
					<Text size={14} maxLines={1} wordBreak="all">
						{description}
					</Text>
				</Container>
			</FlexContainer>

			<Container as="td">
				<Container
					padding="5px 8px"
					radius={5}
					minWidth="max-content"
					background="#1976d2"
				>
					<Text as="span" color="#fff" size={15} bold>
						{category}
					</Text>
				</Container>
			</Container>

			<Container as="td">
				<Text>{price}</Text>
			</Container>

			<Container as="td">
				<Text>{quantity}</Text>
			</Container>

			<Container as="td">
				<StarRating size={16} rating={rate} />
				<Text as="p" size={14} bold>
					{reviewsCount} - Reviews
				</Text>
			</Container>

			<Container as="td" paddingL={5}>
				<FlexContainer justify="flex-end" gap={10}>
					<EditButton />
					<DeleteButton />
				</FlexContainer>
			</Container>
		</Container>
	)
}

export default ProductTableItem
