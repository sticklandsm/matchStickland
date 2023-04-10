import { useRef, useState } from 'react'
import MatchStickLetter from './MatchStickLetter'
import { getConfigFromLetter } from '../functions'

interface Props {
  wordObj: { word: string; definition: string }
  changeMatchesLeft: React.Dispatch<React.SetStateAction<number>>
  matchesLeft: number
  updateSubmits: React.Dispatch<React.SetStateAction<number>>
}

export function MatchStickWord(props: Props) {
  // console.log(props.wordObj)
  const splitWord = props.wordObj.word.split('')
  const arrayOfConfigs = useRef([] as number[])
  const [arrayofWins, changeArrayOfWins] = useState([
    false,
    false,
    false,
    false,
  ])
  const [victoryStatus, changeVictory] = useState('')

  splitWord.forEach((letter, index) => {
    const letterConfig = Number(getConfigFromLetter(letter))
    const configs = [...arrayOfConfigs.current]
    configs[index] = letterConfig
    arrayOfConfigs.current = configs
  })
  console.log('new Wins assigned to array: ', arrayofWins)

  function checkAnswer(evt: React.FormEvent<HTMLButtonElement>) {
    props.updateSubmits((submits) => submits + 1)
    evt.preventDefault
    if (!arrayofWins.includes(false)) {
      changeVictory(() => 'Correct!')
      console.log('You Win')
    } else {
      changeVictory(() => 'Try Again')
    }
  }
  return (
    <>
      <div>
        {splitWord.map((letter, index) => {
          const style = { left: `${(index + 1) * 20}%` }
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
              />
            </div>
          )
        })}
        <button onClick={checkAnswer}>Submit</button>
        <div>{victoryStatus}</div>
      </div>
      {/* {console.log('definition ', props.wordObj.definition)} */}
      {/* <div className="definition">{props.wordObj.definition}</div> */}
    </>
  )
}
