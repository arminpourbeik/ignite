const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  isLoading: false,
}

export default function gamesReducer(state = initState, action) {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
        isLoading: false,
      }
    case 'GAMES_LOADING':
      return { ...state, isLoading: true }
    default:
      return { ...state }
  }
}
