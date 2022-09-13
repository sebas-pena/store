import { useState, useEffect, useContext } from "react"
import { useProducts } from "../../hooks/useProducts"
import { StoreContext } from "../../store/StoreProvider"
import AddButton from "../../components/button/add-button/AddButton"
import NewProductModal from "../../components/modals/new-product/NewProductModal"
import Pagination from "../../components/pagination/Pagination"
import ProductList from "../../components/products-list/ProductList"
import ProductSearch from "../../components/search-input/product-search/ProductSearch"
import SelectBox from "../../components/select-box/SelectBox"

// svgs, css and images below
import "./ProductsPage.css"

const ProductsPage = () => {
	const [sort, setSort] = useState("")
	const [search, setSearch] = useState("")
	const [page, setPage] = useState(1)
	const { products, loading, error } = useProducts({
		query: search,
		page,
	})

	const [showNewProductModal, setShowNewProductModal] = useState(false)

	const { dispatch } = useContext(StoreContext)

	useEffect(() => {
		dispatch({ type: "SET_TITLE", payload: "Products" })
	}, [])

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
	const handleAddProduct = (product) => {
		product.imageUrl = product.images[0]
		product.rate = 0
		product.reviewsCount = 0
		products.unshift({
			...product,
		})
	}
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
					<ProductList products={products} />
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
					submitCallback={handleAddProduct}
				>
					Modal
				</NewProductModal>
			)}
		</>
	)
}

export default ProductsPage
