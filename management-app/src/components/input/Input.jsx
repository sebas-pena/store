import "./Input.css"

const Input = (props) => {
  const { name = "" } = props
  const inputProps = { ...props }
  inputProps.hideControls && delete inputProps.hideControls
  return (
    <label className="input__label">
      {<p>{name}</p>}
      <input
        className={`input ${props.hideControls ? "hide-controls" : ""}`}
        {...inputProps}
        spellCheck="false"
      />
    </label>
  )
}

export default Input
