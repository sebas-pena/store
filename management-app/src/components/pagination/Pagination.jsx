import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow.svg"
import { ReactComponent as ElipsisIcon } from "../../assets/svg/elipsis.svg"
import "./Pagination.css"
const Pagination = () => {
	return (
		<div className="pagination__ctn">
			<div className="pagination__buttons">
				<button className="pagination__button">
					<ArrowIcon width="10" style={{ transform: "rotate(-90deg)" }} />
				</button>
				<button className="pagination__button">1</button>
				<ElipsisIcon
					className="pagination__elipsis"
					width="20"
					fill="#7f7f81"
				/>
				<button className="pagination__button">40</button>
				<p className="pagination__actual">41</p>
				<button className="pagination__button">42</button>
				<ElipsisIcon
					className="pagination__elipsis"
					width="20"
					fill="#7f7f81"
				/>
				<button className="pagination__button">100</button>
				<button className="pagination__button">
					<ArrowIcon width="10" style={{ transform: "rotate(90deg)" }} />
				</button>
			</div>
		</div>
	)
}

export default Pagination
