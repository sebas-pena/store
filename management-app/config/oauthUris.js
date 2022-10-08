require("dotenv").config()

const oauthUris = {
  meli: process.env.MELI_AUTH_URL,
}

module.exports = oauthUris
