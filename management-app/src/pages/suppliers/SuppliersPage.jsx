import React, { useContext, useEffect, useState } from "react"
import AddButton from "../../components/button/add-button/AddButton"
import SearchInput from "../../components/input/SearchInput"
import NewSupplierModal from "../../components/modals/new-supplier/NewSupplierModal"
import Pagination from "../../components/pagination/Pagination"
import Table from "../../components/table/Table"
import fetchAstro from "../../helpers/fetchAstro"
import usePagination from "../../hooks/usePagination"
import { StoreContext } from "../../store/StoreProvider"
import "./SuppliersPage.css"
const SuppliersPage = () => {
	const [search, setSearch] = useState("")
	const [suppliers, setSuppliers] = useState([])
	const { currentPage, changePage, totalPages, setPagination } = usePagination()
	const { store } = useContext(StoreContext)
	const { token } = store
	const [showNewSupplierModal, setShowNewSupplierModal] = useState(false)

	const getSuppliers = () => {
		return fetchAstro(`supplier?page=${currentPage || 1}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		}).then((data) => {
			setSuppliers(data.suppliers)
			return data
		})
	}

	useEffect(() => {
		getSuppliers().then((data) => {
			setPagination({
				currentPage: data.currentPage,
				totalPages: data.totalPages,
			})
		})
	}, [])

	useEffect(() => {
		getSuppliers()
	}, [currentPage])
	console.log(currentPage)
	return (
		<>
			<div className="suppliers-page__ctn">
				<div className="product-page__header">
					<SearchInput
						onChange={setSearch}
						value={search}
						placeholder="Supplier Name"
						maxWidth={250}
					/>
					<div className="product-page__add-product">
						<AddButton
							onClick={() => {
								setShowNewSupplierModal(true)
							}}
						>
							Add Supplier
						</AddButton>
					</div>
				</div>
				<Table type="suppliers" handleRefresh={getSuppliers} rows={suppliers} />
				{currentPage && (
					<div className="suppliers-page__pagination-ctn">
						<Pagination
							setPage={changePage}
							currentPage={currentPage}
							total={totalPages}
						/>
					</div>
				)}
			</div>
			{showNewSupplierModal && (
				<NewSupplierModal
					handleClose={() => {
						getSuppliers()
						setShowNewSupplierModal(false)
					}}
				/>
			)}
		</>
	)
}

export default SuppliersPage
