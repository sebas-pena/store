import React from "react"
import Container from "../../../atoms/Container/Container"
import TableContainer from "../../../atoms/Container/TableContainer"
import Text from "../../../atoms/Text/Text"
import ProductTableItem from "../../../molecules/TableItems/ProductTableItem"
import "./ProductsTable.css"

const ProductsTable = ({ products = [] }) => {
	console.log(products)
	return (
		<TableContainer className="products-table">
			<thead>
				<Container as="tr" align="left">
					<th>
						<Text bold>Product</Text>
					</th>
					<th>
						<Text bold>Category</Text>
					</th>
					<th>
						<Text bold>Price</Text>
					</th>
					<th>
						<Text bold>Quantity</Text>
					</th>
					<th>
						<Text bold>Rate</Text>
					</th>
					<th></th>
				</Container>
			</thead>
			<tbody>
				{products.map((product) => (
					<ProductTableItem key={product.id} {...product} />
				))}
			</tbody>
		</TableContainer>
	)
}

export default ProductsTable
