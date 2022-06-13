import { useState } from "react"
import Input from "../../../input/Input"
import { ReactComponent as AddIcon } from "../../../../assets/svg/plus2.svg"
import "./VariantsInput.css"

const VariantsInput = () => {
	const [variants, setVariants] = useState([])
	const [newVariant, setNewVariant] = useState("")
	const handleCreateVariant = () => {
		if (newVariant.length) {
			setVariants([...variants, newVariant])
			setNewVariant("")
		}
	}
	return (
		<div className="variants-input__ctn">
			<div className="variants-input__new-variant-input">
				<Input
					name="New Variant"
					placeholder="new variant"
					value={newVariant}
					onChange={(e) => setNewVariant(e.target.value)}
				/>
				<button
					className="variants-input__btn"
					type="button"
					onClick={handleCreateVariant}
				>
					<AddIcon width="18" height="18" fill="#9d9d9e" />
				</button>
			</div>
			<div className="variants-input__list">
				<p>Variant list:</p>
				<div className="variants-input__list-ctn">
					{variants.map((variant, index) => (
						<div className="variants-input__item" key={index}>
							{variant}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default VariantsInput
