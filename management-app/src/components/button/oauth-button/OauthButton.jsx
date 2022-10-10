import React from "react"
import "./OauthButton.css"
const OauthButton = ({ primary, secondary, icon, text }) => {
	const styles = {
		"--primary-color": primary,
		"--secondary-color": secondary,
	}
	return (
		<button className="oauth-button" style={styles}>
			{icon}
			<p>{text}</p>
		</button>
	)
}

export default OauthButton
