const { contextBridge, ipcRenderer } = require("electron")

contextBridge.exposeInMainWorld("electron", {
	closeApp: () => ipcRenderer.send("closeApp"),
	minimize: () => ipcRenderer.send("minimize"),
	maximize: () => ipcRenderer.send("maximize"),
	unmaximize: () => ipcRenderer.send("unmaximize"),
	startOauth: (provider) => ipcRenderer.send("startOauth", provider),
	addEventListener: (event, cb) => ipcRenderer.on(event, cb),
	removeEventListener: (event, cb) => ipcRenderer.removeListener(event, cb),
})
