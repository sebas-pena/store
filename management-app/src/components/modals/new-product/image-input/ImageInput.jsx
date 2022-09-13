import React, { useState } from "react"
import FileInput from "../../../input/FileInput"
import "./ImageInput.css"

const ImageInput = ({ images, setImages }) => {
	const [imageOnFocus, setImageOnFocus] = useState(0)
	const handleDropFiles = (e) => {
		e.preventDefault()
		const files = [...e.dataTransfer.files]
		files.forEach((file) => {
			const reader = new FileReader()
			reader.readAsDataURL(file)
			reader.addEventListener("load", (e) => {
				setImages((state) => [...state, e.target.result])
			})
		})
	}

	const handleFiles = (e) => {}

	return (
		<div className="new-product-modal__images">
			{images.length != 0 ? (
				<>
					<img
						className="new-product-modal__image-display"
						src={images[imageOnFocus]}
					/>
					<div className="new-product-modal__image-ctn">
						{images.map((imageUrl, index) => (
							<img
								className="new-product-modal__image"
								src={imageUrl}
								key={imageUrl}
								onClick={() => {
									setImageOnFocus(index)
								}}
							/>
						))}
						<FileInput
							simple
							handleFiles={handleFiles}
							handleDropFiles={handleDropFiles}
						/>
					</div>
				</>
			) : (
				<FileInput
					handleFiles={handleFiles}
					handleDropFiles={handleDropFiles}
				/>
			)}
		</div>
	)
}

export default ImageInput
