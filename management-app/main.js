const path = require("path")
require("dotenv").config({
  path: path.join(__dirname, ".env"),
})

const { app, BrowserWindow, ipcMain } = require("electron")

const createOauthWindow = () => {
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
  authWindow.loadURL(process.env.MELI_AUTH_URL)
  authWindow.show()
  authWindow.webContents.on("did-navigate", (event, newUrl) => {
    if (newUrl.includes("code=")) {
      var code = newUrl.split("code=")[1]
      console.log(code)
      authWindow.close()
    }
  })
}

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
    createOauthWindow()
  })
}

require("electron-reload")(__dirname, {
  electron: require(path.join(__dirname, "..", "node_modules", "electron")),
})

app.whenReady().then(createWindow)
