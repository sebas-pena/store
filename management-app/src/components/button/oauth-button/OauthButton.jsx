import React from "react"
import "./OauthButton.css"
const OauthButton = ({ primary, secondary, icon, text }) => {
	const handleHover = (e) => {
		console.log(e)
	}
	const styles = {
		"--primary-color": primary,
		"--secondary-color": secondary,
	}
	return (
		<button
			className="oauth-button"
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}
			style={styles}
		>
			{icon}
			<p>{text}</p>
		</button>
	)
}

export default OauthButton
