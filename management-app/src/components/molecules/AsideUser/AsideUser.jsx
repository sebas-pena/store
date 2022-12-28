import React from "react"
import LogoutButton from "../../molecules/Buttons/Logout/LogoutButton"
import DivContainer from "../../atoms/Container/DivContainer"
import FlexContainer from "../../atoms/Container/FlexContainer"
import Avatar from "../../atoms/Images/Avatar/Avatar"
import Text from "../../atoms/Text/Text"

const AsideUser = () => {
	return (
		<FlexContainer
			gap={10}
			padding="0 0 0 10px"
			height={55}
			align="center"
			background="#e3e5e8"
		>
			<Avatar
				src="https://cdn.discordapp.com/attachments/1030536038462013510/1053425871387631637/undefined.png"
				size={36}
			/>
			<DivContainer overflow="hidden" flex="1">
				<Text size={14} bold>
					Username
				</Text>
				<Text size={14} addEllipsis color="#757575">
					#numerosrandom
				</Text>
			</DivContainer>
			<LogoutButton onClick={() => {}} />
		</FlexContainer>
	)
}

export default AsideUser
