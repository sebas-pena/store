import fetchMeli from "../fetchBase"

/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} token - User access token
 * @optional @param {string} status - Status of the question
 * @returns
 */
const getAllQuestions = async (accessToken, status) => {
  const response = (
    await fetchMeli(
      `my/received_questions/search${status ? `?status=${status}` : ""}`,
      "GET",
      accessToken
    )
  ).json()

  return response
}

export default getAllQuestions
