import fetchMeli from "../../../../helpers/fetchBase"

/**
 * @description - Get the count of visits of a user.
 * @param {string} token - User access token
 * @param {object} product - Product object
 * @param {date} dateFrom - Date from
 * @param {date} dateTo - Date to
 * @returns {object} - API response
 */
const getUserVisits = async (accessToken, userId, dateFrom, dateTo) => {
  const result = (
    await fetchMeli(
      `users/${userId}/items_visits?date_from=${dateFrom}&date_to=${dateTo}`,
      "POST",
      accessToken
    )
  ).json()
  return result
}

export default getUserVisits
