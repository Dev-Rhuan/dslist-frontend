import { Routes, Route } from 'react-router-dom'
import './App.css'
import GameLists from './components/GameLists'
import GameDetails from './components/GameDetails'

export default function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<GameLists />} />
        <Route path="/games/:gameId" element={<GameDetails />} />
      </Routes>
    </div>
  )
}