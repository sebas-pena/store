import { useState, useContext, useEffect } from "react"
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import Pagination from "../../components/pagination/Pagination"
import { StoreContext } from "../../store/StoreProvider"
// svgs, css and images below
import "./OrdersPage.css"

// mocks below
import { ordersMock } from "../../mocks/orders"
import Table from "../../components/table/Table"

const OrdersPage = () => {
	const [statusFilter, setStatusFilter] = useState("")
	const [page, setPage] = useState(1)
	return (
		<div className="orders-page__ctn">
			<div className="orders-page__header">
				<p className="orders-page__status-filter">Status</p>
				<Button
					predefinedStyle={statusFilter ? "secondary" : "primary"}
					simple={statusFilter !== ""}
					onClick={() => {
						setStatusFilter("")
					}}
				>
					All
				</Button>
				<Button
					predefinedStyle={statusFilter === "pending" ? "primary" : "secondary"}
					simple={statusFilter !== "pending"}
					onClick={() => {
						setStatusFilter("pending")
					}}
				>
					Pending
				</Button>
				<Button
					predefinedStyle={
						statusFilter === "completed" ? "primary" : "secondary"
					}
					simple={statusFilter !== "completed"}
					onClick={() => {
						setStatusFilter("completed")
					}}
				>
					Completed
				</Button>
				<Button
					predefinedStyle={
						statusFilter === "cancelled" ? "primary" : "secondary"
					}
					simple={statusFilter !== "cancelled"}
					onClick={() => {
						setStatusFilter("cancelled")
					}}
				>
					Cancelled
				</Button>
				<div className="orders-page__search">
					<Input label="Order #" name="Order #" type="number" hideControls />
					<Input
						label="Customer #"
						name="Customer #"
						type="text"
						hideControls
					/>
				</div>
			</div>
			<div className="orders-page__body">
				<Table
					type="orders"
					rows={ordersMock.filter((order) =>
						statusFilter ? order.status == statusFilter : true
					)}
				/>
				<div className="orders-page__pagination">
					<Pagination onChange={setPage} />
				</div>
			</div>
		</div>
	)
}

export default OrdersPage
