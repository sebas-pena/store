import { useState } from "react"

const usePagination = () => {
  const [pagination, setPagination] = useState({
    currentPage: undefined,
    totalPages: undefined
  })

  const { currentPage, totalPages } = pagination

  const changePage = (page) => {
    setPagination({
      ...pagination,
      currentPage: page
    })
  }

  return {
    currentPage,
    changePage,
    totalPages,
    setPagination
  }
}

export default usePagination