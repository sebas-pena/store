const days = [
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

  getDayMouthYear: (timestamp) => {
    const date = new Date(timestamp)
    const day = days[date.getDay()]
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return `${month} , ${year}`
  },
}
