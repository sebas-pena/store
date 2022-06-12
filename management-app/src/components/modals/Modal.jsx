import { useEffect, useMemo } from "react"
import ReactDOM from "react-dom"

import "./Modal.css"

const Modal = ({ children }) => {
  const portalNode = useMemo(() => document.createElement("div"), [])
  portalNode.id = "modal-root"
  useEffect(() => {
    document.body.appendChild(portalNode)
    return () => {
      document.body.removeChild(portalNode)
      console.log("se murio")
    }
  }, [])

  return ReactDOM.createPortal(children, portalNode)
}

export default Modal
