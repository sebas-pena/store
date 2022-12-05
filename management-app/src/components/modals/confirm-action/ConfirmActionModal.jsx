import { useState } from "react"
import Modal from "../Modal"
import { ReactComponent as AlertIcon } from "../../../assets/svg/alert.svg"
import Button from "../../button/Button"
import StyledText from "../../styled-text/StyledText"
import "./ConfirmActionModal.css"
const ConfirmActionModal = ({
	handleClose,
	title = "Are you sure delete this file?",
	description = "If you delete the file you can't recover it.",
	confirmText = "Confirm",
	cancelText = "Cancel",
	confirmDanger,
	onConfirm,
}) => {
	const [isClosed, setIsClosed] = useState(false)

	const handleCloseModal = () => {
		setIsClosed(true)
		setTimeout(() => {
			handleClose()
		}, 300)
	}
	const handleConfirm = () => {
		onConfirm()
		handleCloseModal()
	}
	return (
		<Modal
			handleClose={handleCloseModal}
			isClosed={isClosed}
			setIsClosed={setIsClosed}
			maxWidth={600}
			style={{
				borderTop: "7px solid #f62447",
				borderRadius: 5,
				padding: 0,
			}}
		>
			<div className="confrim-action-modal__ctn">
				<AlertIcon height="55" fill="#f62447" />
				<div>
					<StyledText asHeader={2} size="18px" mb={5} semiBold>
						{title}
					</StyledText>
					<StyledText>{description}</StyledText>
				</div>
			</div>
			<div className="confirm-action-modal__buttons">
				{confirmDanger ? (
					<>
						<Button simple predefinedStyle="danger" onClick={handleConfirm}>
							{confirmText}
						</Button>
						<Button onClick={handleCloseModal}>{cancelText}</Button>
					</>
				) : (
					<>
						<Button simple onClick={handleCloseModal}>
							{cancelText}
						</Button>
						<Button onClick={handleConfirm}>{confirmText}</Button>
					</>
				)}
			</div>
		</Modal>
	)
}

export default ConfirmActionModal
