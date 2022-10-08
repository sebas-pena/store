import fetchMeli from "../../../../helpers/fetchBase"

/**
 * @description - Get the count of visits of a user.
 * @param {string} token - User access token
 * @param {string} expirationDate - Date yyyy-mm-dd
 * @returns {object} - API response
 */
const getBillingInfo = async (accessToken, expirationDate) => {
  const result = (
    await fetchMeli(
      `billing/integration/periods/${expirationDate}/group/ML/details`,
      "GET",
      accessToken
    )
  ).json()
  return result
}

export default getBillingInfo
