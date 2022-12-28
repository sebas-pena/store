import React from "react"
import Logo from "../../../../assets/images/logo.png"

const AstroLogo = ({ height }) => {
	return (
		<img
			src={Logo}
			height={height}
			alt="logotipo de astro."
			className="astro-logo"
		/>
	)
}

export default AstroLogo
