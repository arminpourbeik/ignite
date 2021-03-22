import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { loadDetail } from '../actions/details.action'
import { Link } from 'react-router-dom'
import { smallImage } from '../utils'
import { popUp } from '../animations'

export default function Game({ name, released, id, image }) {
  const dispatch = useDispatch()

  function loadDetailHandler() {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetail(id))
  }

  const strPathId = id.toString()

  return (
    <StyledGame
      layoutId={strPathId}
      onClick={loadDetailHandler}
      variants={popUp}
      initial='hidden'
      animate='show'
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${strPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${strPathId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`
