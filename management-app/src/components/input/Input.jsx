import "./Input.css"

const Input = (props) => {
	const { name = "" } = props
	return (
		<label className="input__label">
			{<p>{name}</p>}
			<input className="input" {...props} />
		</label>
	)
}

export default Input
