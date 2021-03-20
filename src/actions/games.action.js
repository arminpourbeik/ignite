import axios from 'axios'
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from '../api'

export const loadGames = function () {
  return async function (dispatch) {
    const popularResponse = await axios.get(popularGamesUrl())
    const upcomingGamesResponse = await axios.get(upcomingGamesUrl())
    const newGamesResponse = await axios.get(newGamesUrl())

    dispatch({
      type: 'FETCH_GAMES',
      payload: {
        popular: popularResponse.data.results,
        upcoming: upcomingGamesResponse.data.results,
        newGames: newGamesResponse.data.results,
      },
    })
  }
}
