import fetchMeli from "../../../../helpers/fetchBase"

/**
 * @description - Get the count of visits of a user.
 * @param {string} token - User access token
 * @param {object} product - Product object
 * @param {date} from - Date from
 * @param {date} to - Date to
 * @returns {object} - API response
 */
const getOrders = async (accessToken, userId, options) => {
  const { sort = "date_desc", status } = options
  const query = `?seller=${userId}&sort=${sort}${
    status ? `&order.status=${status}` : ""
  }`
  const result = (
    await fetchMeli(`orders/search${query}`, "GET", accessToken)
  ).json()
  return result
}

export default getOrders
