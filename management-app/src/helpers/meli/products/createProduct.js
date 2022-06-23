import fetchMeli from "./fetchBase"

/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} token - User access token
 * @param {object} product - Product object
 * @returns {object} - API response
 */
const createProduct = async (accessToken, product) => {
	const result = (await fetchMeli(`items`, "POST", accessToken, product)).json()
	return result
}

export default createProduct
