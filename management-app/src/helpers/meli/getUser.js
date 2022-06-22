import fetchMeli from "./fetchBase"

/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} userId - User id
 * @param {string} token - User access token
 * @returns
 */
const getMeliUser = async (userId, accessToken) => {
  const user = await fetchMeli(`/users/${userId}`, "GET", accessToken)

  return user
}

export default getMeliUser
