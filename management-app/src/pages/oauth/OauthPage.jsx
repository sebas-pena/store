import { useState } from "react"
import AstroLogo from "../../assets/images/logo.png"
import MeliLogo from "../../assets/images/logos/meli-logo.png"
import { Link, useParams } from "react-router-dom"
import "./OauthPage.css"
import { ReactComponent as CableIcon } from "../../assets/svg/power-cable.svg"
import { ReactComponent as BrokenCableIcon } from "../../assets/svg/broken-power-cable.svg"
import { ReactComponent as PlugIcon } from "../../assets/svg/plug.svg"
import { ReactComponent as Spinner } from "../../assets/svg/loader.svg"
import StyledText from "../../components/styled-text/StyledText"

const OauthPage = () => {
	const { provider } = useParams()
	const code = new URLSearchParams(window.location.search).get("code")
	const [error, setError] = useState(true)
	const [loading, setLoading] = useState(true)
	console.log({ provider, code })

	return (
		<div className="oauth-page__ctn">
			<div className="oauth-page__message-ctn">
				<div
					className={`oauth-page__message-header ${
						loading ? "" : error ? "error" : "succesful"
					}`}
				>
					<img src={AstroLogo} alt="Astro logo" />
					{loading ? (
						<PlugIcon width="50" height="50" fill="#fff" />
					) : error ? (
						<BrokenCableIcon width="50px" height="50px" fill="#fff" />
					) : (
						<CableIcon width="50px" height="50px" fill="#fff" />
					)}
					<img src={MeliLogo} alt="Astro logo" />
				</div>

				<div className="oauth-page__message-body">
					{loading ? (
						<div class="oauth-page__spinner-ctn">
							<Spinner width="50" height="50" stroke="#0000002b" />
						</div>
					) : (
						<>
							<StyledText size="30px" bold>
								{error ? "Failed Integration" : "Successful Integration"}
							</StyledText>
							<StyledText size="20px">
								{error
									? "Something has gone wrong."
									: "Everything went well, explore and try the new possibilities."}
							</StyledText>
							<Link className="oauth-page__link" to="/">
								Go Home
							</Link>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default OauthPage
