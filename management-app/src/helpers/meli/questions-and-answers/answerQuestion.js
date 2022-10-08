import fetchMeli from "./fetchBase"

/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} token - User access token
 * @param {string} questionId - Question id
 * @param {string} answer - User answer
 * @returns
 */
const answeQuestion = async (accessToken, questionId, answer) => {
	const response = (
		await fetchMeli(`answers`, "POST", accessToken, {
			question_id: questionId,
			text: answer,
		})
	).json()

	return response
}

export default answeQuestion
