import axios from 'axios'
import { gameDetailsURL, gameScreenshotURL } from '../api'

export const loadDetail = (id) => async (dispatch) => {
  dispatch({ type: 'DETAIL_LOADING' })
  try {
    const detailData = await axios.get(gameDetailsURL(id))
    const screenShotData = await axios.get(gameScreenshotURL(id))
    dispatch({
      type: 'GET_DETAIL',
      payload: {
        game: detailData.data,
        screen: screenShotData.data,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
