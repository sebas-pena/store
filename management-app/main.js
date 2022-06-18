const path = require("path")
const { app, BrowserWindow, ipcMain } = require("electron")

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
		console.log(provider)
	})
}

require("electron-reload")(__dirname, {
	electron: require(path.join(__dirname, "..", "node_modules", "electron")),
})

app.whenReady().then(createWindow)
