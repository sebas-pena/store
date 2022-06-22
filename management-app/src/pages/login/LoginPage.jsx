import { useEffect, useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { StoreContext } from "../../store/StoreProvider"

// svgs, images and css below
import AppLogo from "../../assets/images/logo.png"
import MeliLogo from "../../assets/images/logos/meli-logo.png"
import ButtonWithImage from "../../components/button/button-with-image/ButtonWithImage"
import "./LoginPage.css"
import getMeliUser from "../../helpers/meli/user"

const LoginPage = () => {
  const { startOauth, addEventListener, removeEventListener } = window.electron
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const { dispatch } = useContext(StoreContext)

  useEffect(() => {
    const handleOauthResponse = async (event, response) => {
      setIsLoading(false)
      if (response.error) {
        setError(response.error)
        return
      }
      const { user_id: userId, access_token: accessToken } = response
      const user = await getMeliUser(userId, accessToken)
      dispatch({ type: "SET_USER", payload: user })
      dispatch({ type: "SET_TOKEN", payload: response })
      navigate("/")
    }

    addEventListener("oauth-callback", handleOauthResponse)
    return () => {
      removeEventListener("oauth-callback", handleOauthResponse)
    }
  }, [])

  const handleStartOauth = (provider) => {
    setIsLoading(true)
    startOauth(provider)
  }

  return (
    <div className="login-page">
      <div className="login-page__ctn">
        <figure className="login-page__logo-ctn">
          <img src={AppLogo} alt="logo" className="app logo" />
          <figcaption>AstroShop</figcaption>
        </figure>
        <p className="login-page__oauth-title">Continue with</p>
        <ButtonWithImage
          onClick={() => {
            handleStartOauth("meli")
          }}
        >
          <img src={MeliLogo} alt="logo de mercado libre" />
          <span>Mercado Libre</span>
        </ButtonWithImage>
      </div>
    </div>
  )
}

export default LoginPage
