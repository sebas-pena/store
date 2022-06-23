import fetchMeli from "./fetchBase"

/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} token - User access token
 * @param {string} questionId - Question id
 * @param {string} answer - User answer
 * @returns
 */
const getMeliUser = async (accessToken, questionId, answer) => {
	const user = await fetchMeli(`answers`, "POST", accessToken, {
		question_id: questionId,
		text: answer,
	})

	return user
}

export default getMeliUser
