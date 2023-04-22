import { useRef, useState } from 'react'
import MatchStickLetter from './MatchStickLetter'
import { getConfigFromLetter } from '../functions'
import { Navigate } from 'react-router-dom'
import * as React from 'react'
import { Victory } from './Victory'

interface Props {
  wordObj: { word: string; definition: string }
  changeMatchesLeft: React.Dispatch<React.SetStateAction<number>>
  matchesLeft: number
  updateSubmits: React.Dispatch<React.SetStateAction<number>>
}

export function MatchStickWord(props: Props) {
  const [victoryStatus, changeVictory] = useState('')
  const [victoryCelebration, changeCelebration] = useState(<></>)
  const splitWord = props.wordObj.word.split('')
  const arrayOfConfigs = useRef([] as number[])
  const [arrayofWins, changeArrayOfWins] = useState([
    false,
    false,
    false,
    false,
  ])
  const wordLength = props.wordObj.word.length

  splitWord.forEach((letter, index) => {
    const letterConfig = Number(getConfigFromLetter(letter))
    const configs = [...arrayOfConfigs.current]
    configs[index] = letterConfig
    arrayOfConfigs.current = configs
  })

  function checkAnswer(evt: React.FormEvent<HTMLButtonElement>) {
    props.updateSubmits((submits) => submits + 1)
    evt.preventDefault
    if (!arrayofWins.includes(false)) {
      changeVictory(() => 'Correct!')
      console.log('You Win')
      changeCelebration(() => <Victory changeCelebration={changeCelebration} />)
    } else {
      changeVictory(() => 'Try Again')
    }
  }

  return (
    <>
      <div>
        {victoryCelebration}
        {splitWord.map((letter, index) => {
          const style = {
            left: `${(index + wordLength / 18) * (100 / wordLength)}%`,
          }
          return (
            <div key={index}>
              <MatchStickLetter
                letter={letter}
                style={style}
                changeMatchesLeft={props.changeMatchesLeft}
                matchesLeft={props.matchesLeft}
                index={index}
                changeArrayOfWins={changeArrayOfWins}
                configFromParent={arrayOfConfigs.current[index]}
                victoryStatus={victoryStatus}
                changeVictory={changeVictory}
              />
            </div>
          )
        })}
        <button onClick={checkAnswer}>Submit</button>
        <div>{victoryStatus}</div>
      </div>
    </>
  )
}
