import { useEffect, useMemo } from "react"
import ReactDOM from "react-dom"
import { ReactComponent as CloseIcon } from "../../assets/svg/cross2.svg"

import "./Modal.css"

const ModalPortal = ({ children, handleClose }) => {
	const portalNode = useMemo(() => document.createElement("div"), [])
	portalNode.id = "modal-root"
	useEffect(() => {
		document.body.appendChild(portalNode)
		const handlePressESC = (e) => e.key === "Escape" && handleClose()
		window.addEventListener("keydown", handlePressESC)
		portalNode.addEventListener("click", (e) => {
			if (e.target.id === "modal-root") handleClose()
		})
		return () => {
			document.body.removeChild(portalNode)
			window.removeEventListener("keydown", handlePressESC)
			console.log("se murio")
		}
	}, [])

	return ReactDOM.createPortal(children, portalNode)
}

const Modal = ({
	isClosed,
	setIsClosed,
	showCross,
	children,
	handleClose,
	width = 900,
	height = 420,
}) => {
	const handleCloseModal = () => {
		setIsClosed(true)
		setTimeout(() => {
			handleClose()
		}, 300)
	}

	return (
		<ModalPortal handleClose={handleCloseModal}>
			<div
				style={{ width, height }}
				className={`modal__ctn animated ${isClosed ? "zoomOut" : "zoomIn"}`}
			>
				{showCross && (
					<button className="modal__close-btn" onClick={handleCloseModal}>
						<CloseIcon width="14" height="14" fill="#404043" />
					</button>
				)}
				{children}
			</div>
		</ModalPortal>
	)
}

export default Modal
