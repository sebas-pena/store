const fetch = require("node-fetch")

const getToken = async (provider, code) => {
  /* let url = `https://meli-app-three.vercel.app/oauth/token/${provider}/${code}`
  let response = await (
    await fetch(url, {
      method: "POST",
    })
  ).json()
  return response */
  return 1
}

module.exports = getToken
