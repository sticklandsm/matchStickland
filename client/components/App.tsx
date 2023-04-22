import { Route, Routes } from 'react-router-dom'
import Game from './Game'
import { Victory } from './Victory'

export function App() {
  return (
    <>
      <div></div>
      {/* This 'main' div is only for styling (so we can use flexbox) */}

      <div className="main">
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
      </div>
    </>
  )
}

export default App
