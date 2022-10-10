import { useState, useContext, useEffect } from "react"
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import OrderList from "../../components/order-list/OrderList"
import Pagination from "../../components/pagination/Pagination"
import { StoreContext } from "../../store/StoreProvider"
// svgs, css and images below
import "./OrdersPage.css"

// mocks below
import { ordersMock } from "../../mocks/orders"

const OrdersPage = () => {
	const [statusFilter, setStatusFilter] = useState("")
	const [page, setPage] = useState(1)
	return (
		<div className="orders-page__ctn">
			<div className="orders-page__header">
				<p className="orders-page__status-filter">Status</p>
				<Button
					height="35px"
					predefinedStyle={statusFilter ? "grey" : "primary"}
					removeHover={statusFilter === ""}
					onClick={() => {
						setStatusFilter("")
					}}
				>
					All
				</Button>
				<Button
					height="35px"
					predefinedStyle={statusFilter === "pending" ? "primary" : "grey"}
					removeHover={statusFilter === "pending"}
					onClick={() => {
						setStatusFilter("pending")
					}}
				>
					Pending
				</Button>
				<Button
					height="35px"
					predefinedStyle={statusFilter === "completed" ? "primary" : "grey"}
					removeHover={statusFilter === "completed"}
					onClick={() => {
						setStatusFilter("completed")
					}}
				>
					Completed
				</Button>
				<Button
					height="35px"
					predefinedStyle={statusFilter === "cancelled" ? "primary" : "grey"}
					removeHover={statusFilter === "cancelled"}
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
				<OrderList
					orders={ordersMock.filter((order) =>
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
