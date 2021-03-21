import Home from './pages/Home'
import GlobalStyle from './styles/Global'
import { Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Route path={['/game/:id', '/']}>
        <Home />
      </Route>
    </>
  )
}
