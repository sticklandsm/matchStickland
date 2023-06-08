import { useEffect, useState } from 'react'
import { getNumberOfMatchesWord } from '../functions'
import { getWordInfo, postGpt } from './apiClient'
import { MatchStickWord } from './MatchStickWord'
import Modal from './Modal'

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
  const [showRules, setShowRules] = useState(false)

  const rulesModalContent = (
    <div>
      <div>
        {`This game was my personal project during Dev Academy. I worked on it in my very small amount of spare time, which is why it's a bit messy with it's styling. It's a little similar to Wordle, in that the game will pick a random word from the dictionary. Your job is to guess the word by making letters out of matchsticks, kind of similar to in school how everyone used to try to make dirty words on the 7 segment displays of old calculators. If you don't guess the word correctly, the matchsticks that are in the right place will burn out giving you a hint on what letters are in the word. I've also implemented a Hint button which uses the ChatGPT API to help you guess the word. Have Fun 
        - Sean`}
      </div>{' '}
      <br />
      <button className="gotItButton" onClick={hasReadRules}>
        I got it
      </button>
    </div>
  )

  function hasReadRules() {
    setShowRules(() => true)
    localStorage.setItem('showRules', 'true')
  }

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

  async function clickHandler() {
    const newHint = await postGpt(currentWord.word)
    changeHint(() => newHint.choices[0].message.content)
  }

  useEffect(() => {
    getWord()
    setShowRules(() => Boolean(localStorage.getItem('showRules')))
  }, [])
  console.log(currentWord.word)

  return (
    <>
      <div>
        <Modal
          content={rulesModalContent}
          isOpen={showRules}
          setIsOpen={setShowRules}
        />
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
