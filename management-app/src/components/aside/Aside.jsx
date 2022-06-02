import "./aside.css"
import AsideItem from "./AsideItem"
import AsideMarca from "./AsideMarca"

const Aside = () => {
  const routes = [
    {
      path: "/",
      icon: "dashboard",
      title: "Dashboard",
    },
    {
      path: "/products",
      icon: "product",
      title: "Products",
    },
    {
      path: "/orders",
      icon: "cart",
      title: "Orders",
    },
    {
      path: "/stock",
      icon: "stock",
      title: "Stock",
    },
  ]

  return (
    <aside className="aside__ctn">
      <AsideMarca />
      <ul className="aside__menu">
        {routes.map((route, index) => (
          <li key={index}>
            <AsideItem {...route} />
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Aside
