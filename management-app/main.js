require("dotenv").config()
const path = require("path")
const { app, BrowserWindow, ipcMain } = require("electron")
<<<<<<< HEAD

const createOauthWindow = (provider) => {
  console.log(provider)
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
  authWindow.loadURL(oauthUris(provider))
  authWindow.show()
  authWindow.webContents.on("did-navigate", (event, newUrl) => {
    if (newUrl.includes("code=")) {
      let token = getToken(provider, newUrl.split("code=")[1])
      console.log(token)
    }
  })
}
=======
const createOauthWindow = require("./windows/oauthWindow")
>>>>>>> 45641836d443a834d8a0531759c0324a175b2f98

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: path.join(__dirname, "preload.js"),
		},
	})
	/* win.loadFile(path.join(__dirname, "build", "index.html")) */
	win.loadURL("http://localhost:3000")
	win.maximize()
	ipcMain.on("closeApp", () => {
		app.quit()
	})
	ipcMain.on("maximize", () => {
		win.maximize()
	})
	ipcMain.on("minimize", () => {
		win.minimize()
	})
	ipcMain.on("unmaximize", () => {
		win.unmaximize()
	})
	ipcMain.on("startOauth", (event, provider) => {
		createOauthWindow(provider).then((token) => {
			win.webContents.send("oauth-callback", token)
		})
	})
}

require("electron-reload")(__dirname, {
	electron: require(path.join(__dirname, "..", "node_modules", "electron")),
})

app.whenReady().then(createWindow)
