const fetch = require("node-fetch")
const { BrowserWindow } = require("electron")

const MELI_APP_ID = process.env.MELI_APP_ID
const MELI_REDIRECT_URI = "https://meli-app-three.vercel.app/"
const BACKEND_URI = process.env.BACKEND_URI

const oauthUris = {
  meli: `https://auth.mercadolibre.com.uy/authorization?response_type=code&client_id=${MELI_APP_ID}&redirect_uri=${MELI_REDIRECT_URI}`,
}

const createOauthWindow = (provider) =>
  new Promise((resolve, reject) => {
    let authWindow = new BrowserWindow({
      width: 800,
      height: 600,
      show: false,
      "node-integration": false,
      "web-security": false,
    })
    authWindow.on("closed", function () {
      authWindow = null
    })
    authWindow.loadURL(oauthUris[provider])

    const handleClose = () => {
      resolve("closed")
    }
    authWindow.on("closed", handleClose)
    authWindow.show()

    authWindow.webContents.on("did-navigate", (event, newUrl) => {
      if (newUrl.includes("code=")) {
        const code = new URLSearchParams(newUrl.split("/").pop()).get("code")
        authWindow.removeListener("closed", handleClose)
        authWindow.close()
        authWindow = null
        const uri = `${BACKEND_URI}/auth/token/${provider}?code=${code}`
        fetch(uri, {
          method: "POST",
        })
          .then((res) => {
            return res.json()
          })
          .then((res) => {
            resolve(res)
          })
      }
    })
  })

module.exports = createOauthWindow
