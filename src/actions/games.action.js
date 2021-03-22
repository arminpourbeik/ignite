import axios from 'axios'
import {
  popularGamesURL,
  upcomingGamesURL,
  newGamesURL,
  searchGameURL,
} from '../api'

export const loadGames = () => async (dispatch) => {
  dispatch({ type: 'GAMES_LOADING' })

  try {
    const popularResponse = await axios.get(popularGamesURL())
    const upcomingGamesResponse = await axios.get(upcomingGamesURL())
    const newGamesResponse = await axios.get(newGamesURL())

    dispatch({
      type: 'FETCH_GAMES',
      payload: {
        popular: popularResponse.data.results,
        upcoming: upcomingGamesResponse.data.results,
        newGames: newGamesResponse.data.results,
      },
    })
  } catch (err) {
    console.log(err)
  }
}

export const fetchSearched = (gameName) => async (dispatch) => {
  dispatch({ type: 'GAMES_LOADING' })
  try {
    const searchedGames = await axios.get(searchGameURL(gameName))
    dispatch({
      type: 'FETCH_SEARCHED',
      payload: { searched: searchedGames.data.results },
    })
  } catch (e) {
    console.log(e)
  }
}
