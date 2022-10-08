import Button from "../Button"
import { ReactComponent as AddIcon } from "../../../assets/svg/plus.svg"
import "./AddButton.css"
const AddButton = ({ children, onClick }) => {
	return (
		<Button height="45px" onClick={onClick}>
			<AddIcon
				width="16"
				height="16"
				className="add-button__icon"
				fill="#fff"
			/>
			{children}
		</Button>
	)
}

export default AddButton
