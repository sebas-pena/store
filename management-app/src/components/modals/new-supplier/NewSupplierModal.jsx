import { useContext, useState } from "react"
import Modal from "../Modal"
import Button from "../../button/Button"
import StyledText from "../../styled-text/StyledText"
import "./NewSupplierModal.css"
import Input from "../../input/Input"
import { useForm } from "../../../hooks/useForm"
import { ReactComponent as AddIcon } from "../../../assets/svg/plus.svg"
import { ReactComponent as CrossIcon } from "../../../assets/svg/cross1.svg"
import fetchAstro from "../../../helpers/fetchAstro"
import { StoreContext } from "../../../store/StoreProvider"

const NewSupplierModal = ({ handleClose, initialValues }) => {
	const { store } = useContext(StoreContext)
	const { token } = store
	const [isClosed, setIsClosed] = useState(false)
	const [notes, setNotes] = useState(initialValues?.notes || [])
	const { values, handleChange } = useForm(
		initialValues || {
			name: "Nombre",
			phone: "+598 12 123 123",
			email: "example@mail.com",
			address: "Street 123",
			note: "",
			minOrder: "",
		}
	)
	const { name, phone, email, address, note, minOrder } = values
	const handleCloseModal = () => {
		setIsClosed(true)
		setTimeout(() => {
			handleClose()
		}, 300)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		const body = {
			name,
			phone,
			email,
			address,
			notes,
			min_order: {
				currency: "UYU",
				value: 12000,
			},
		}
		if (!initialValues) {
			fetchAstro("supplier", {
				method: "POST",
				headers: {
					authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...body,
				}),
			}).then((res) => {
				handleCloseModal()
			})
		} else {
			fetchAstro(`supplier/${initialValues._id}`, {
				method: "PUT",
				headers: {
					authorization: `Bearer ${token}`,
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					...body,
				}),
			}).then((res) => {
				handleCloseModal()
			})
		}
	}
	const handleAddNote = () => {
		if (note === "") return
		handleChange({
			name: "note",
			custom: true,
			value: "",
		})
		setNotes([note, ...notes])
	}
	const handleRemoveNote = (index) => {
		const newNotes = [...notes]
		newNotes.splice(index, 1)
		setNotes(newNotes)
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
			<form className="new-supplier-modal__ctn" onSubmit={handleSubmit}>
				<StyledText asHeader={2} align="center" semiBold size="24px">
					{initialValues ? "Edit Supplier" : "New Supplier"}
				</StyledText>
				<Input
					label="Name"
					name="name"
					placeholder="Company Name"
					value={name}
					onChange={handleChange}
					width="100%"
				/>
				<div className="new-supplier-modal__form-group">
					<Input
						label="Phone"
						name="phone"
						placeholder="+598 12 456 789"
						value={phone}
						onChange={handleChange}
						width="100%"
					/>
					<Input
						label="Email"
						name="email"
						type="email"
						placeholder="example@domain.com"
						value={email}
						onChange={handleChange}
						width="100%"
					/>
				</div>
				<div className="new-supplier-modal__form-group">
					<Input
						label="Address"
						name="address"
						placeholder="Street Address"
						value={address}
						onChange={handleChange}
						width="100%"
					/>
					<Input
						label="Min. Order Ammount"
						name="minOrder"
						placeholder="0"
						value={minOrder}
						onChange={handleChange}
						width="100%"
					/>
				</div>
				<div className="new-supplier-modal__add-notes-ctn">
					<Input
						label="Add Note"
						name="note"
						value={note}
						onChange={handleChange}
						width="100%"
						radius="5px 0 0 5px"
						placeholder="e.g: samsung spare parts."
					/>
					<Button onClick={handleAddNote} radius="0 5px 5px 0">
						<AddIcon height="16" fill="#fff" />
					</Button>
				</div>
				<ul className="new-supplier-modal__notes-ctn">
					{notes.map((note, index) => (
						<li key={index}>
							<Button
								simple
								predefinedStyle="danger"
								padding="0 5px"
								height="18px"
								onClick={() => {
									handleRemoveNote(index)
								}}
							>
								<CrossIcon fill="red" height="10" />
							</Button>
							<StyledText>{note}</StyledText>
						</li>
					))}
				</ul>
				<Button type="submit">
					{initialValues ? "Save Changes" : "Create"}
				</Button>
			</form>
		</Modal>
	)
}

export default NewSupplierModal
