import axios from 'axios'
import { popularGamesURL, upcomingGamesURL, newGamesURL } from '../api'

export const loadGames = () => async (dispatch) => {
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
