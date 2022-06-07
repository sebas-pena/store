import AddButton from "../components/button/add-button/AddButton"
import ProductSearch from "../components/search-input/product-search/ProductSearch"
import "./ProductsPage.css"
const ProductsPage = () => {
  return (
    <div className="product-page__ctn">
      <div className="product-page__header">
        <ProductSearch />
        <div className="product-page__add-product">
          <AddButton>New Product</AddButton>
        </div>
      </div>
      <div className="product-page__body"></div>
    </div>
  )
}

export default ProductsPage
