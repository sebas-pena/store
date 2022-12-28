import { useState, useEffect, useContext } from "react"
import { useProducts } from "../../hooks/useProducts"
import { StoreContext } from "../../store/StoreProvider"
import AddButton from "../../components/molecules/Buttons/AddButton"
import Pagination from "../../components/pagination/Pagination"

// svgs, css and images below
import "./ProductsPage.css"
import FlexContainer from "../../components/atoms/Container/FlexContainer"
import SearchInput from "../../components/molecules/SearchInput/SearchInput"
import Text from "../../components/atoms/Text/Text"
import ProductsTable from "../../components/organisms/Tables/Products/ProductsTable"

const ProductsPage = () => {
	const [sort, setSort] = useState("")
	const [search, setSearch] = useState("")
	const [page, setPage] = useState(1)
	const { products, loading, error } = useProducts({
		query: search,
		page,
	})

	const { store, dispatch } = useContext(StoreContext)
	useEffect(() => {
		dispatch({ type: "SET_TITLE", payload: "Products" })
	}, [])

	useEffect(() => {}, [sort])

	useEffect(() => {}, [search])

	useEffect(() => {}, [page])

	useEffect(() => {}, [products, loading, error])
	return (
		<FlexContainer as="main" gap={20} padding="20px 10px" flex={1} vertical>
			<FlexContainer justify="space-between">
				<SearchInput placeholder="Name or Category" />
				<AddButton height={32} padding="0 16px" as="link" to="/new-product">
					<Text size={13}>Create Product</Text>
				</AddButton>
			</FlexContainer>
			<div className="product-page__body">
				<ProductsTable products={products} />
				<div className="product-page__pagination-ctn">
					<Pagination onChange={setPage} />
				</div>
			</div>
		</FlexContainer>
	)
}

export default ProductsPage
