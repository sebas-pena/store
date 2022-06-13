import { ReactComponent as ShowIcon } from "../../assets/svg/eye.svg"
import Button from "../button/Button"
import OrderItem from "./order-item/OrderItem"
import "./OrderList.css"

const OrderList = ({ orders = [] }) => {
  orders = [
    {
      id: 1,
      orderId: "12345",
      customer: "John Doe",
      date: "2020-01-01",
      total: "$100.00",
      status: "pending",
      paymentMethod: "Credit Card",
      products: [1, 2, 3],
    },
    {
      id: 2,
      orderId: "12346",
      customer: "Johnnn Doe",
      date: "2020-01-01",
      total: "$100.00",
      status: "cancelled",
      paymentMethod: "Cash",
      products: [1, 2, 3],
    },
    {
      id: 3,
      orderId: "12347",
      customer: "Johnnn Doeee",
      date: "2020-01-01",
      total: "$100.00",
      status: "completed",
      paymentMethod: "Cash",
      products: [1, 2, 3],
    },
  ]

  return (
    <table className="order-list__ctn">
      <thead className="order-list__header">
        <tr>
          <th>Order #</th>
          <th>Customer</th>
          <th>Payment</th>
          <th>Total</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <OrderItem order={order} key={order.id} />
        ))}
      </tbody>
    </table>
  )
}

export default OrderList
