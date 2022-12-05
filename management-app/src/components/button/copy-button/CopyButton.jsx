import React, { useState } from "react"
import Button from "../Button"
import { ReactComponent as CopyIcon } from "../../../assets/svg/copy.svg"
import "./CopyButton.css"
const CopyButton = ({ textToCopy, popup = "copied", size = 25 }) => {
	const [showPopup, setShowPopup] = useState(false)

	return (
		<div className="copy-button__ctn">
			<p className={showPopup ? "show" : ""}>{popup}</p>
			<Button
				height={size}
				padding="5px"
				onClick={() => {
					if (showPopup) return
					setShowPopup(true)
					setTimeout(() => {
						setShowPopup(false)
					}, 1000)
					navigator.clipboard.writeText(textToCopy)
				}}
			>
				<CopyIcon fill="#fff" height={size - 10} />
			</Button>
		</div>
	)
}

export default CopyButton
