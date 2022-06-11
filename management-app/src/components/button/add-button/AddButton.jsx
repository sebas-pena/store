import Button from "../Button"
import { ReactComponent as AddIcon } from "../../../assets/svg/plus.svg"
import "./AddButton.css"
const AddButton = ({ children }) => {
	return (
		<Button big>
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
