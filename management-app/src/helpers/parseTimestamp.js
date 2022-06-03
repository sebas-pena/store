const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]

const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]

export const parseTimestamp = {
	getHour: (timestamp) => {
		const date = new Date(timestamp)
		return date.getHours()
	},

	getMouthDayYear: (timestamp) => {
		const date = new Date(timestamp)
		const day = date.getDate()
		const month = monthNames[date.getMonth()]
		const year = date.getFullYear()
		return ` ${month} ${day}, ${year}`
	},

	getDay: (timestamp) => {
		const date = new Date(timestamp)
		const day = dayNames[date.getDay()]
		return day
	},
}
