import fetchMeli from "./fetchBase"

/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} questionId - Question id
 * @param {string} answer - User answer
 * @param {string} token - User access token
 * @returns
 */
const getMeliUser = async (questionId, answer, accessToken) => {
	const user = await fetchMeli(`answers`, "POST", accessToken, {
		question_id: questionId,
		text: answer,
	})

	return user
}

export default getMeliUser
