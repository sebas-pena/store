/**
 * @description - This function is used to fetch the data from the meli api
 * @param {string} path - Api path
 * @param {string} method - Method to fetch the api
 * @param {string} token - User access token
 * @optional @param {object} body - Body to send to the api
 * @returns {object} - Response from the api
 */
const fetchMeli = async (path, method, token, body) => {
  let response = await (
    await fetch(`https://api.mercadolibre.com/${path}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method,
      body: JSON.stringify(body),
    })
  ).json()
  return response
}

export default fetchMeli
