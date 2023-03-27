import { useEffect, useState } from 'react'
import { getNumberOfMatchesWord } from '../functions'
import { MatchStickWord } from './MatchStickWord'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export function App() {
  const [currentWord, changeWord] = useState({ word: '', definition: '' })
  const [matchesLeft, changeMatchesLeft] = useState(0)

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
    changeMatchesLeft(() => getNumberOfMatchesWord(wordObj.word))
  }

  useEffect(() => {
    getWord()
  }, [])

  return (
    <div>
      <h1>App</h1>
      <MatchStickWord
        wordObj={currentWord}
        changeMatchesLeft={changeMatchesLeft}
        matchesLeft={matchesLeft}
      />
      <h2>{currentWord.word}</h2>
      <h3>Guesses left: {matchesLeft}</h3>
    </div>
  )
}

export default App
