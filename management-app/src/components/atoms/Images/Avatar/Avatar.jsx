import React from "react"
import "./Avatar.css"

const Avatar = ({ src, size }) => {
	return <img src={src} height={size} alt="user avatar" className="avatar" />
}

export default Avatar
