import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom'
import Team from './components/Team'
import Search from './components/Search'
import Start from './components/Start'
// import {data} from '../data'

function App() {


  return (

<Router>
<div className='App'>
  <header className='header'>
    <nav className='nav'>
      <Link to="/"> STARTSIDA </Link>
      <Link to="/search"> SÖKBAR LISTA MED POKEMON </Link>
      <Link to="/team"> LAGUPPSTÄLLNING </Link>
    </nav>
  </header>
  <main className='main'>
    <Routes>
      <Route path='/team'   element={<Team />} />
      <Route path='/search' element={<Search />} />
      <Route path=''        element={<Start /> } />
    </Routes>
  </main>
</div>
</Router>
  )
}

export default App
