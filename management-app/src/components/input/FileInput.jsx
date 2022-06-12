import { ReactComponent as ImagesIcon } from "../../assets/svg/images.svg"
import "./FileInput.css"
const FileInput = () => {
  return (
    <label className="file-input">
      <ImagesIcon width="50" height="50" fill="#6799fb" />
      <p>Drag and drop images here or click to select images</p>
      <input type="file" name="images" />
    </label>
  )
}

export default FileInput
