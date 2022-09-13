import { ReactComponent as ImagesIcon } from "../../assets/svg/images.svg"
import "./FileInput.css"
const FileInput = ({ handleFiles, handleDropFiles, simple }) => {
	let handleDragOver = (e) => {
		e.preventDefault()
	}

	return (
		<label
			className={simple ? "file-input simple" : "file-input"}
			onDrop={handleDropFiles}
			onDragOver={handleDragOver}
		>
			<ImagesIcon
				width={simple ? "20" : "50"}
				height={simple ? "20" : "50"}
				fill="#6799fb"
			/>
			<input type="file" name="images" onChange={handleFiles} />
			{!simple && (
				<>
					<p>Drag and drop images here or click to select images</p>
				</>
			)}
		</label>
	)
}
export default FileInput
