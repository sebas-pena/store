import fetchMeli from "../fetchBase"

/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} accessToken - User access token
 * @param {string} productId - Product id
 * @optional @param {string} status - Status of the question
 * @returns
 */
const getAllQuestions = async (accessToken, productId, status) => {
  const response = (
    await fetchMeli(
      `questions/search?item=${productId}${status ? `&status=${status}` : ""}`,
      "GET",
      accessToken
    )
  ).json()

  return response
}

export default getAllQuestions
