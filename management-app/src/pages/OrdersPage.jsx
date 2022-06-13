import Input from "../components/input/Input"
import OrderList from "../components/order-list/OrderList"
import Pagination from "../components/pagination/Pagination"
import "./OrdersPage.css"

const OrdersPage = () => {
  return (
    <div className="orders-page__ctn">
      <div className="orders-page__search">
        <Input name="Order #" type="number" hideControls />
      </div>
      <div className="orders-page__body">
        <OrderList orders={[]} />
        <div className="orders-page__pagination">
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default OrdersPage
