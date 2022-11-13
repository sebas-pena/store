import React from "react"
import "./OauthButton.css"
const OauthButton = ({ primary, secondary, icon, text, oauthUri }) => {
	const styles = {
		"--primary-color": primary,
		"--secondary-color": secondary,
	}
	return (
		<a
			className="oauth-button"
			style={styles}
			href={oauthUri}
			target="_blank"
			rel="noopener noreferrer"
		>
			{icon}
			<p>{text}</p>
		</a>
	)
}

export default OauthButton
