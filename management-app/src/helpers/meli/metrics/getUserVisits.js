import fetchMeli from "../../../../helpers/fetchBase"

/**
 * @description - Get the count of visits of a user.
 * @param {string} token - User access token
 * @param {object} product - Product object
 * @param {date} from - Date from
 * @param {date} to - Date to
 * @returns {object} - API response
 */
const getUserVisits = async (accessToken, userId, from, to) => {
  const result = (
    await fetchMeli(
      `users/${userId}/items_visits?date_from=${from}&date_to=${to}`,
      "GET",
      accessToken
    )
  ).json()
  return result
}

export default getUserVisits
