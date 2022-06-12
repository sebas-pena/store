import { useRef } from "react"
import Modal from "../Modal"

import { ReactComponent as CloseIcon } from "../../../assets/svg/cross2.svg"
import { ReactComponent as ImagesIcon } from "../../../assets/svg/images.svg"
import "./NewProductModal.css"
import Input from "../../input/Input"
import Button from "../../button/Button"
import TextArea from "../../input/TextArea"

const NewProductModal = ({ handleClose }) => {
  const modalCtnRef = useRef(null)

  const handleCloseModal = () => {
    let modalCtn = modalCtnRef.current
    modalCtn.classList.add("close")
    setTimeout(() => {
      handleClose()
    }, 300)
  }

  return (
    <Modal>
      <div ref={modalCtnRef} className="new-product-modal__ctn">
        <button
          className="new-product-modal__close-btn"
          onClick={handleCloseModal}
        >
          <CloseIcon width="14" height="14" fill="#404043" />
        </button>
        <header className="new-product-modal__header">
          <h1>New Product</h1>
        </header>
        <form className="new-product-modal__form">
          <label className="new-product-modal__images-input">
            <ImagesIcon width="36" height="36" fill="#6799fb" />
            <p>Drag and drop images here or click to select images</p>
            <input type="file" name="images" />
          </label>
          <div className="new-product-modal__inputs-ctn">
            <Input type="text" placeholder="Product name" name="name" />
            <label className="new-product-modal__description">
              <TextArea placeholder="Description" />
            </label>
            <Input type="number" placeholder="Price" name="price" min="0" />
            <Input type="number" placeholder="Quantity" name="quantity" />
            <div className="new-product-modal__variants-ctn"></div>

            <Button color="primary" small onClick={handleClose}>
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  )
}

export default NewProductModal
