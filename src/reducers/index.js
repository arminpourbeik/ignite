import { combineReducers } from 'redux'
import gamesReducer from './games.reducer'
import detailReducer from './detail.reducer'

const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
})

export default rootReducer
