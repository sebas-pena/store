import fetchMeli from "./fetchBase"

/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} userId - User id
 * @param {string} token - User access token
 * @returns {object} - API response
 */
const getSellerProducts = async (userId, accessToken) => {
	const result = await (
		await fetchMeli(`users/${userId}/items/search?`, "GET", accessToken)
	).json()
	return result
}

export default getSellerProducts
