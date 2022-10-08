require("dotenv").config()
const path = require("path")
const { app, BrowserWindow, ipcMain, session } = require("electron")
const createOauthWindow = require("./windows/oauthWindow")

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

	win.webContents.session.clearStorageData().then(() => {
		win.loadURL("http://localhost:3000")
	})

	/* win.loadFile(path.join(__dirname, "build", "index.html")) */
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
		createOauthWindow(provider).then((response) => {
			const sendResponse = (response) =>
				win.webContents.send("oauth-callback", response)

			response === "closed"
				? sendResponse({ error: "window closed" })
				: sendResponse(response)
		})
	})
}

require("electron-reload")(__dirname, {
	electron: require(path.join(__dirname, "..", "node_modules", "electron")),
})

app.whenReady().then(createWindow)
