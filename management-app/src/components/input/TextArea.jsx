import "./TextArea.css"
const TextArea = (props) => {
  const { name } = props
  console.log(props)
  return (
    <label className="textarea__ctn">
      <p>{name}</p>
      <textarea {...props} className="textarea" spellCheck="false"></textarea>
    </label>
  )
}

export default TextArea
