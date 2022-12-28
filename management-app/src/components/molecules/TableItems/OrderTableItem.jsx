import EditButton from "../Buttons/Edit/EditButton"
import DeleteButton from "../Buttons/Delete/DeleteButton"
import Container from "../../atoms/Container/Container"
import Text from "../../atoms/Text/Text"
import EyeButton from "../Buttons/EyeButton"
import FlexContainer from "../../atoms/Container/FlexContainer"

const statusColors = {
	completed: "#4caf50",
	pending: "#ffa726",
	cancelled: "#ec407a",
}

const ProductTableItem = ({ order }) => {
	return (
		<Container
			as="tr"
			height={60}
			focusable
			radius={5}
			role="button"
			onKeyDown={() => console.log("triggered")}
		>
			<Container as="td" padding="0 20px 0 10px">
				<Text size={16} bold color="#333">
					#{order.id}
				</Text>
			</Container>
			<Container as="td">
				<Text size={16} bold color="#333">
					{order.customer}
				</Text>
				<Text size={12} bold color="#333">
					#{order.customerId}
				</Text>
			</Container>
			<Container as="td">
				<Text size={16} color="#333">
					{order.paymentMethod}
				</Text>
			</Container>
			<Container as="td">
				<Text size={16} color="#333">
					{order.total}
				</Text>
			</Container>
			<Container as="td">
				<FlexContainer
					height={32}
					inline
					center
					padding="0 16px"
					background={statusColors[order.status]}
					radius={5}
				>
					<Text size={16} bold capitalize color="#fff">
						{order.status}
					</Text>
				</FlexContainer>
			</Container>
			<Container as="td" paddingL={5}>
				<EyeButton height={32} padding="0 16px" />
			</Container>
		</Container>
	)
}

export default ProductTableItem
