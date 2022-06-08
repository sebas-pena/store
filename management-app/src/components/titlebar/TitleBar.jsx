import { useState } from "react"

import { ReactComponent as MinimizeIcon } from "../../assets/svg/minimize.svg"
import { ReactComponent as MaximizeIcon } from "../../assets/svg/maximize.svg"
import { ReactComponent as CloseIcon } from "../../assets/svg/cross2.svg"
import "./titlebar.css"

const TitleBar = () => {
  const electron = window.electron

  const [isMaximized, setIsMaximized] = useState(true)

  const handleUnmaximize = () => {
    setIsMaximized(false)
    electron.unmaximize()
  }

  const handleClose = () => {
    electron.closeApp()
  }
  const handleMinimize = () => {
    electron.minimize()
  }
  const handleMaximize = () => {
    electron.maximize()
    setIsMaximized(true)
  }

  return (
    <header className="titlebar">
      <div className="titlebar__drag-area">{<p>Dashboard</p>}</div>
      <div className="titlebar__controls">
        <button className="titlebar__button" onClick={handleMinimize}>
          <MinimizeIcon width="10" height="10" />
        </button>
        {isMaximized ? (
          <button className="titlebar__button" onClick={handleUnmaximize}>
            <MaximizeIcon width="11" height="11" />
          </button>
        ) : (
          <button className="titlebar__button" onClick={handleMaximize}>
            <MaximizeIcon width="11" height="11" />
          </button>
        )}
        <button className="titlebar__button close" onClick={handleClose}>
          <CloseIcon width="10" height="10" />
        </button>
      </div>
    </header>
  )
}

export default TitleBar
