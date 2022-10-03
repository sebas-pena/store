export const ordersMock = [
  {
    id: 1,
    orderId: "12345",
    customer: "John Doe",
    customerId: 2,
    date: "2020-01-01",
    total: "$90.00",
    status: "pending",
    paymentMethod: "Credit Card",
    products: [
      { id: 1, quantity: 1, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", },
      { id: 2, quantity: 2, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", },
      { id: 3, quantity: 3, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", }
    ],
    customerEmail: "algo@gmail.com",
    customerPhone: "123456789"
  },
  {
    id: 2,
    orderId: "12346",
    customer: "Johnnn Doe",
    customerId: 1,
    date: "2020-01-01",
    total: "$90.00",
    status: "cancelled",
    paymentMethod: "Cash",
    products: [
      { id: 1, quantity: 1, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", },
      { id: 2, quantity: 2, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", },
      { id: 3, quantity: 3, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", }
    ],
    customerEmail: "algo@gmail.com",
    customerPhone: "123456789"
  },
  {
    id: 3,
    orderId: "12347",
    customer: "Johnnn Doeee",
    customerId: 3,
    date: "2020-01-01",
    total: "$90.00",
    status: "completed",
    paymentMethod: "Cash",
    products: [
      { id: 1, quantity: 1, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", },
      { id: 2, quantity: 2, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", },
      { id: 3, quantity: 3, name: "Product-Name", imgUrl: "https://via.placeholder.com/75x75", unitPrice: 10, currency: "$", }
    ],
    customerEmail: "algo@gmail.com",
    customerPhone: "123456789"
  },
]
