import { useEffect } from "react"
import ReactDOM from "react-dom"

import "./Modal.css"

const Modal = ({ children }) => {
	const portalNode = document.createElement("div")
	portalNode.id = "modal-root"
	useEffect(() => {
		document.body.appendChild(portalNode)
		return () => {
			document.body.removeChild(portalNode)
		}
	})

	return ReactDOM.createPortal(children, portalNode)
}

export default Modal
