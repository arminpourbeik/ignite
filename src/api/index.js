//Base URL
const base_url = 'https://api.rawg.io/api/'

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1
  if (month < 10) {
    return `0${month}`
  } else {
    return month
  }
}

// Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate()
  if (day < 10) {
    return `0${day}`
  } else {
    return day
  }
}

// Current day/month/year
const currentYear = new Date().getFullYear()
const currentMonth = getCurrentMonth()
const currentDay = getCurrentDay()
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10?key=${process.env.REACT_APP_RAWG_API_KEY}`
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10?key=${process.env.REACT_APP_RAWG_API_KEY}`
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10?key=${process.env.REACT_APP_RAWG_API_KEY}`

export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
export const newGamesURL = () => `${base_url}${newGames}`

// Game Details
export const gameDetailsURL = (gameId) =>
  `${base_url}games/${gameId}?key=${process.env.REACT_APP_RAWG_API_KEY}`

// Game Screenshots
export const gameScreenshotURL = (gameId) =>
  `${base_url}games/${gameId}/screenshots?key=${process.env.REACT_APP_RAWG_API_KEY}`

// Searched Game
export const searchGameURL = (gameName) =>
  `${base_url}games?search=${gameName}&page_size=9?key=${process.env.REACT_APP_RAWG_API_KEY}`
