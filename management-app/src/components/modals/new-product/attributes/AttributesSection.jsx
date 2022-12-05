import React, { useContext } from "react"
import { NewProductContext } from "../../../../context/NewProductContext"
import DropDown from "../../../drop-down/DropDown"
import Input from "../../../input/Input"
import InputWithUnit from "../../../input/input-with-unit/InputWithUnit"
import SelectBox from "../../../input/select-box/SelectBox"
import StyledText from "../../../styled-text/StyledText"
import "./AttributesSection.css"

const AttributesSection = (S) => {
	const {
		attributesValues,
		handleChangeAttribute,
		attributesSelected,
		setAttributedSelected,
		attributes,
		setAttributes,
	} = useContext(NewProductContext)
	const inputs = {
		string: (attribute) => (
			<Input
				key={attribute.id}
				label={attribute.title}
				name={attribute.id}
				required
				hint={attribute.hint || null}
				width="200px"
				onChange={handleChangeAttribute}
				value={attributesValues[attribute.id]}
			/>
		),
		number: (attribute) => (
			<Input
				key={attribute.id}
				label={attribute.title}
				name={attribute.id}
				required
				hint={attribute.hint || null}
				width="200px"
				type="number"
				onChange={handleChangeAttribute}
				value={attributesValues[attribute.id]}
			/>
		),
		boolean: (attribute) => (
			<SelectBox
				key={attribute.id}
				label={attribute.title}
				placeholder="Seleccionar"
				name={attribute.id}
				callback={() => {}}
				width="200px"
				height="35px"
				options={attribute.values.map((value) => {
					return {
						value: value.id,
						name: value.name,
					}
				})}
				onChange={handleChangeAttribute}
				value={attributesValues[attribute.id]}
			/>
		),
		number_unit: (attribute) => (
			<InputWithUnit
				key={attribute.id}
				label={attribute.title}
				name={attribute.id}
				units={attribute.allowed_units}
				value={attributesValues[attribute.id]}
				onChange={handleChangeAttribute}
			/>
		),
		list: (attribute) => (
			<SelectBox
				key={attribute.id}
				label={attribute.title}
				placeholder="Seleccionar"
				name={attribute.id}
				width="200px"
				height="35px"
				options={attribute.values.map((value) => {
					return {
						value: value.id,
						name: value.name,
					}
				})}
				onChange={handleChangeAttribute}
				value={attributesValues[attribute.id]}
			/>
		),
	}

	const handleAddAttribute = (attribute, position) => {
		if (attribute.value_type === "number_unit") {
			handleChangeAttribute({
				name: attribute.id,
				value: {
					value: 0,
					unit: attribute.allowed_units[0],
				},
				custom: true,
			})
		}
		setAttributedSelected((oldValue) => [attribute, ...oldValue])
		setAttributes(({ required, optional }) => {
			const copyOfOptional = [...optional]
			copyOfOptional.splice(position, 1)
			return {
				required,
				optional: copyOfOptional,
			}
		})
	}

	return (
		<div className="new-product-modal__attribute-section">
			<div>
				<StyledText asHeader="3" size="20px" mb="10px">
					Required Attributes
				</StyledText>
				<div className="new-product-modal__attributes-ctn required">
					{attributes.required.map((attribute) =>
						inputs[attribute.value_type](attribute)
					)}
				</div>
			</div>
			<div>
				<StyledText asHeader="3" size="20px" mb="10px">
					Optional Attributes
				</StyledText>
				<div className="new-product-modal__attributes-ctn">
					<DropDown
						options={attributes.optional}
						placeholder="Add Attributes"
						width="200px"
						className="new-product-modal__dropdown-ctn"
						cb={handleAddAttribute}
					/>
					{attributesSelected.length > 0 &&
						attributesSelected.map((attribute) =>
							inputs[attribute.value_type](attribute)
						)}
				</div>
			</div>
		</div>
	)
}

export default AttributesSection
