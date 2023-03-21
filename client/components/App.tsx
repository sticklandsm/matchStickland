import { useEffect, useState } from 'react'
import { MatchStickWord } from './MatchStickWord'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export function App() {
  const [currentWord, changeWord] = useState({ word: '', definition: '' })

  async function getWord() {
    const data = await fetch('./data/SimpleFourDef.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    const allWords = await data.json()
    const length = Object.keys(allWords).length
    const ranNumber = getRandomInt(length - 1)

    const wordObj = {
      word: Object.keys(allWords)[ranNumber],
      definition: String(Object.values(allWords)[ranNumber]),
    }

    changeWord(() => wordObj)
  }

  useEffect(() => {
    getWord()
  }, [])

  return (
    <div>
      <h1>App</h1>
      <MatchStickWord wordObj={currentWord} />
    </div>
  )
}

export default App
