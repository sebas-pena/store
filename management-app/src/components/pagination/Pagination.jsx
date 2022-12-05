import { useState, useEffect } from "react"
import { ReactComponent as ArrowIcon } from "../../assets/svg/arrow.svg"
import { ReactComponent as ElipsisIcon } from "../../assets/svg/elipsis.svg"
import "./Pagination.css"
const Pagination = ({ total = 1, setPage, currentPage = 1 }) => {
	return (
		<div className="pagination__ctn">
			<div className="pagination__buttons">
				{currentPage > 1 && (
					<>
						<button
							className="pagination__button"
							onClick={() => {
								setPage(currentPage - 1)
							}}
						>
							<ArrowIcon width="10" style={{ transform: "rotate(-90deg)" }} />
						</button>
						<button
							className="pagination__button"
							onClick={() => {
								setPage(1)
							}}
						>
							1
						</button>
					</>
				)}
				{currentPage > 3 && total > 3 && (
					<ElipsisIcon
						className="pagination__elipsis"
						width="20"
						fill="#7f7f81"
					/>
				)}
				{currentPage > 2 && (
					<button
						className="pagination__button"
						onClick={() => {
							setPage(currentPage - 1)
						}}
					>
						{currentPage - 1}
					</button>
				)}
				<p className="pagination__actual">{currentPage}</p>
				{currentPage < total - 1 && (
					<button
						className="pagination__button"
						onClick={() => {
							setPage(currentPage + 1)
						}}
					>
						{currentPage + 1}
					</button>
				)}
				{currentPage < total - 2 && (
					<ElipsisIcon
						className="pagination__elipsis"
						width="20"
						fill="#7f7f81"
					/>
				)}
				{currentPage < total && (
					<>
						<button
							className="pagination__button"
							onClick={() => {
								setPage(total)
							}}
						>
							{total}
						</button>
						<button
							className="pagination__button"
							onClick={() => {
								setPage(currentPage + 1)
							}}
						>
							<ArrowIcon width="10" style={{ transform: "rotate(90deg)" }} />
						</button>
					</>
				)}
			</div>
		</div>
	)
}

export default Pagination
