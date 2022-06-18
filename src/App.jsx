import './App.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink, Navigate } from 'react-router-dom'
import { useState } from 'react'
import Start from './components/Start'
import Search from "./components/Search"
import Team from './components/Team'

function App() {
  const [team, setTeam] = useState([])

  return (
    <Router>
      <div className='App'>
        <header className='header'>
          <nav className='nav'>
            <NavLink to="/start"> STARTSIDA </NavLink>
            <NavLink to="/search"> SÖKBAR LISTA MED POKEMON </NavLink>
            <NavLink to="/team"> LAGUPPSTÄLLNING </NavLink>        
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/start"  element={<Start />} />
            <Route path="/search" element={<Search setTeam={setTeam} />} />
            <Route path="/team"   element={<Team team={team} setTeam={setTeam} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
