import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import logo from '../img/logo.svg'
import { useDispatch } from 'react-redux'
import { fetchSearched } from '../actions/games.action'
import { fadeIn } from '../animations'

export default function Nav() {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')

  function inputHandler(e) {
    setTextInput(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    dispatch(fetchSearched(textInput))
    setTextInput('')
  }

  function clearSearch() {
    dispatch({ type: 'CLEAR_SEARCHED' })
  }

  return (
    <StyledNav variants={fadeIn} initial='hidden' animate='show'>
      <Logo onClick={clearSearch}>
        <img src={logo} alt='logo' />
        <h1>ignite</h1>
      </Logo>
      <form className='search'>
        <input type='text' onChange={inputHandler} value={textInput} />
        <button type='submit' onClick={onSubmit}>
          Search
        </button>
      </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  h1 {
    text-transform: capitalize;
  }
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  @media only screen and (max-width: 800px) {
    form {
      display: flex;
      flex-direction: column;
      input {
        margin: 1rem 0rem;
        width: 100%;
      }
    }
  }
`
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 2rem;
    height: 2rem;
  }
`
