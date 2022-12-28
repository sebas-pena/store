import React from "react"
import { ReactComponent as LogoutIcon } from "../../../../assets/svg/logout-icon.svg"
import "./LogoutButton.css"

const LogoutButton = ({ onClick }) => {
	return (
		<button onClick={onClick} className="logout-btn">
			<LogoutIcon height="20px" fill="#ed0856" />
		</button>
	)
}

export default LogoutButton
