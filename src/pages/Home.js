import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../actions/games.action'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

import Game from '../components/Game'
import GameDetail from '../components/GameDetail'

export default function Home() {
  const dispatch = useDispatch()
  const { popular, newGames, upcoming } = useSelector((store) => store.games)

  const { pathname } = useLocation()
  const pathId = pathname.split('/')[2]

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  return (
    <>
      {pathId && <GameDetail />}
      <GameList>
        <h2>upcoming games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>popular games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
        <h2>new games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              key={game.id}
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
            />
          ))}
        </Games>
      </GameList>
    </>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`
