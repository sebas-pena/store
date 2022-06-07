import Button from "../components/button/Button"
import SearchInput from "../components/search-input/SearchInput"
import "./ProductsPage.css"
const ProductsPage = () => {
  return (
    <div className="product-page__ctn">
      <div className="product-page__header">
        <div className="product-page__search">
          <SearchInput />
        </div>
        <div className="product-page__add-product">
          <Button>Add Product</Button>
        </div>
      </div>
      <div className="product-page__body"></div>
    </div>
  )
}

export default ProductsPage
