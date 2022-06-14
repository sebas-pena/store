import SearchInput from "../SearchInput"
import "./ProductSearch.css"
const ProductSearch = ({ onChange, value }) => {
	return (
		<div className="product-search__ctn">
			<SearchInput onChange={onChange} value={value} />
		</div>
	)
}

export default ProductSearch
