import { useState, useEffect } from "react"

import AddButton from "../components/button/add-button/AddButton"
import NewProductModal from "../components/modals/new-product/NewProductModal"
import Pagination from "../components/pagination/Pagination"
import ProductList from "../components/products-list/ProductList"
import ProductSearch from "../components/search-input/product-search/ProductSearch"
import SelectBox from "../components/select-box/SelectBox"
import { useProducts } from "../hooks/useProducts"
import "./ProductsPage.css"

const ProductsPage = () => {
	const [sort, setSort] = useState("")
	const [search, setSearch] = useState("")
	const [page, setPage] = useState(1)
	const { products, loading, error } = useProducts({
		query: search,
		page,
	})
	const [showNewProductModal, setShowNewProductModal] = useState(true)

	useEffect(() => {
		console.log(sort)
	}, [sort])

	useEffect(() => {
		console.log(search)
	}, [search])

	useEffect(() => {
		console.log(page)
	}, [page])

	useEffect(() => {
		console.log(products)
		console.log(loading)
		console.log(error)
	}, [products, loading, error])

	return (
		<>
			<div className="product-page__ctn">
				<div className="product-page__header">
					<ProductSearch onChange={setSearch} value={search} />
					<SelectBox
						placeholder="Sort By"
						options={["Name", "Price", "Rating", "Stock", "Category"]}
						handleChange={setSort}
					/>
					<div className="product-page__add-product">
						<AddButton
							onClick={() => {
								setShowNewProductModal(true)
							}}
						>
							New Product
						</AddButton>
					</div>
				</div>
				<div className="product-page__body">
					<ProductList />
					<div className="product-page__pagination-ctn">
						<Pagination onChange={setPage} />
					</div>
				</div>
			</div>
			{showNewProductModal && (
				<NewProductModal
					handleClose={() => {
						setShowNewProductModal(false)
					}}
					handleSubmit={() => {}}
				>
					Modal
				</NewProductModal>
			)}
		</>
	)
}

export default ProductsPage
