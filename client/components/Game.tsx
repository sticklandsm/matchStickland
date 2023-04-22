import { useEffect, useState } from 'react'
import { getNumberOfMatchesWord } from '../functions'
import { getWordInfo, postGpt } from './apiClient'
import { MatchStickWord } from './MatchStickWord'

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max)
}

export default function Game() {
  //This is the actual word that is loaded from the JSON
  const [currentWord, changeWord] = useState({ word: '', definition: '' })
  //This is the amount of match sticks you have left to use.
  const [matchesLeft, changeMatchesLeft] = useState(0)
  const [hint, changeHint] = useState('')

  const [amountOfSubmits, updateSubmits] = useState(0)

  //function for fetching the word from the Json.
  async function getWord() {
    //fetch the data
    const data = await fetch('./data/SimpleFourDef.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })

    //get random number and use it to make a word obj
    const allWords = await data.json()
    const length = Object.keys(allWords).length

    const ranNumber = getRandomInt(length - 1)
    const wordObj = {
      word: Object.keys(allWords)[ranNumber],
      definition: '',
    }

    //change the word to be the word object, change matchsticks when used
    changeWord(() => wordObj)
    changeMatchesLeft(() => getNumberOfMatchesWord(wordObj.word))
  }

  async function clickHandler(evt: React.MouseEvent<HTMLButtonElement>) {
    const newHint = await postGpt(currentWord.word)
    changeHint(() => newHint.choices[0].message.content)
  }

  useEffect(() => {
    getWord()
  }, [])
  console.log(currentWord.word)

  return (
    <>
      <div>
        <h1>Match Stick Land!</h1>
        <div>
          <MatchStickWord
            updateSubmits={updateSubmits}
            wordObj={currentWord}
            changeMatchesLeft={changeMatchesLeft}
            matchesLeft={matchesLeft}
          />
        </div>

        <h4>Matches left: {matchesLeft}</h4>
        <div>Turns: {amountOfSubmits}</div>
        <div>
          <button className="hintButton" onClick={clickHandler}>
            Get a Hint
          </button>

          <label className="hint">{hint}</label>
        </div>
      </div>
    </>
  )
}
