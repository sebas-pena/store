import AddButton from "../components/button/add-button/AddButton"
import ProductSearch from "../components/search-input/product-search/ProductSearch"
import SelectBox from "../components/select-box/SelectBox"
import "./ProductsPage.css"
const ProductsPage = () => {
	return (
		<div className="product-page__ctn">
			<div className="product-page__header">
				<ProductSearch />
				<SelectBox placeholder="Sort By" options={["hola", "chaukaspian"]} />
				<div className="product-page__add-product">
					<AddButton>New Product</AddButton>
				</div>
			</div>
			<div className="product-page__body"></div>
		</div>
	)
}

export default ProductsPage
