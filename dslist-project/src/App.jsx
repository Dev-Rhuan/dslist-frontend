import { Routes, Route } from 'react-router-dom'
import './App.css'
import GameLists from './components/GameLists'
import GameDetails from './components/GameDetails'
import GamesInList from './components/GamesInList'

export default function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<GameLists />} />
        <Route path="/lists/:listId" element={<GamesInList/>} />
        <Route path="/games/:gameId" element={<GameDetails />} />
      </Routes>
    </div>
  )
}