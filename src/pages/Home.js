import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadGames } from '../actions/games.action'

export default function Home() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  return null
}
