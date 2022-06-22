import { useState, useContext, useEffect } from "react"
import Input from "../../components/input/Input"
import Button from "../../components/button/Button"
import OrderList from "../../components/order-list/OrderList"
import Pagination from "../../components/pagination/Pagination"
import { StoreContext } from "../../store/StoreProvider"
// svgs, css and images below
import "./OrdersPage.css"

const OrdersPage = () => {
  const [statusFilter, setStatusFilter] = useState("")
  const [page, setPage] = useState(1)
  const { dispatch } = useContext(StoreContext)

  useEffect(() => {
    dispatch({ type: "SET_TITLE", payload: "Orders" })
  }, [])

  return (
    <div className="orders-page__ctn">
      <div className="orders-page__header">
        <p className="orders-page__status-filter">Status</p>
        <Button
          small
          color={statusFilter ? "light-gray" : "primary"}
          removeHover={statusFilter === ""}
          onClick={() => {
            setStatusFilter("")
          }}
        >
          All
        </Button>
        <Button
          small
          color={statusFilter === "pending" ? "primary" : "light-gray"}
          removeHover={statusFilter === "pending"}
          onClick={() => {
            setStatusFilter("pending")
          }}
        >
          Pending
        </Button>
        <Button
          small
          color={statusFilter === "completed" ? "primary" : "light-gray"}
          removeHover={statusFilter === "completed"}
          onClick={() => {
            setStatusFilter("completed")
          }}
        >
          Completed
        </Button>
        <Button
          small
          color={statusFilter === "cancelled" ? "primary" : "light-gray"}
          removeHover={statusFilter === "cancelled"}
          onClick={() => {
            setStatusFilter("cancelled")
          }}
        >
          Cancelled
        </Button>
        <div className="orders-page__search">
          <Input name="Order #" type="number" hideControls />
        </div>
      </div>
      <div className="orders-page__body">
        <OrderList orders={[]} />
        <div className="orders-page__pagination">
          <Pagination onChange={setPage} />
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
