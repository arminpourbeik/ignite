import Home from './pages/Home'
import Nav from './components/Nav'
import GlobalStyle from './styles/Global'
import { Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </>
  )
}
