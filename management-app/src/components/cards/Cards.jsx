import "./Cards.css"

const backgrounds = [
	{
		backgroundImage: "linear-gradient(to top, #f77062 0%, #fe5196 100%)",
	},
	{
		backgroundColor: "#FBAB7E",
		backgroundImage: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
	},
	{
		backgroundImage: "linear-gradient(to top, #4481eb 0%, #04befe 100%)",
	},
	{
		backgroundImage: "linear-gradient(to top, #9be15d 0%, #00e3ae 100%)",
	},
]

const Cards = ({ background = 0, children }) => {
	let backgroundStyle = {
		backgroundRepeat: "no-repeat",
		...backgrounds[background],
	}

	return (
		<div className="cards__ctn" style={backgroundStyle}>
			{children}
		</div>
	)
}

export default Cards
