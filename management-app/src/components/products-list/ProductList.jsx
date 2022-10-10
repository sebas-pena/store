import ProductListItem from "./product-item/ProductListItem"
import "./ProductList.css"
const ProductList = ({ products }) => {
	return (
		<table className="product-list__ctn">
			<thead className="product-list__head">
				<tr>
					<th>Product</th>
					<th>Category</th>
					<th>Price</th>
					<th>Quantity</th>
					<th>Rate</th>
					<th></th>
				</tr>
			</thead>
			<tbody className="product-list__body">
				{products.map((product) => (
					<ProductListItem product={product} key={product.id} />
				))}
			</tbody>
		</table>
	)
}

export default ProductList
