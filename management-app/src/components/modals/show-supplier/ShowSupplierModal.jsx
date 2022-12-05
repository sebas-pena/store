import { useState } from "react"
import CopyButton from "../../button/copy-button/CopyButton"
import StyledText from "../../styled-text/StyledText"
import Modal from "../Modal"
import "./ShowSupplierModal.css"

const ShowSupplierModal = ({ handleClose, values }) => {
	const [isClosed, setIsClosed] = useState(false)
	const { name, phone, email, address, notes, min_order } = values
	console.log(values)
	const handleCloseModal = () => {
		setIsClosed(true)
		setTimeout(() => {
			handleClose()
		}, 300)
	}
	return (
		<Modal
			handleClose={handleCloseModal}
			isClosed={isClosed}
			setIsClosed={setIsClosed}
			maxWidth={450}
			height={550}
			showCross
		>
			<StyledText asHeader={2} align="center" semiBold size="24px">
				Supplier
			</StyledText>
			<div className="show-supplier-modal__ctn">
				<div className="show-supplier-modal_wrapper">
					<StyledText size="16px" semiBold>
						Name:
					</StyledText>
					<StyledText size="16px">{name}</StyledText>
					<CopyButton textToCopy={name} popup="Name copied" size={22} />
				</div>
				<div className="show-supplier-modal_wrapper">
					<StyledText size="16px" semiBold>
						Email:
					</StyledText>
					<StyledText size="16px">{email}</StyledText>
					<CopyButton textToCopy={email} popup="Email copied" size={22} />
				</div>
				<div className="show-supplier-modal_wrapper">
					<StyledText size="16px" semiBold>
						Phone:
					</StyledText>
					<StyledText size="16px">{phone}</StyledText>
					<CopyButton textToCopy={phone} popup="Phone copied" size={22} />
				</div>
				<div className="show-supplier-modal_wrapper">
					<StyledText size="16px" semiBold>
						Address:
					</StyledText>
					<StyledText size="16px">{address}</StyledText>
					<CopyButton textToCopy={address} popup="Address copied" size={22} />
				</div>
				<StyledText size="16px" semiBold>
					Notes:
				</StyledText>
				<ul className="new-supplier-modal__notes-ctn">
					{notes.map((note, index) => (
						<li key={index}>
							<StyledText>{note}</StyledText>
						</li>
					))}
				</ul>
			</div>
		</Modal>
	)
}

export default ShowSupplierModal
