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
  const [victory, changeVictory] = useState(0)

  splitWord.forEach((letter, index) => {
    const letterConfig = Number(getConfigFromLetter(letter))
    const configs = [...arrayOfConfigs.current]
    configs[index] = letterConfig
    arrayOfConfigs.current = configs
  })
  console.log('new Wins assigned to array: ', arrayofWins)

  function checkAnswer(evt: React.FormEvent<HTMLButtonElement>) {
    evt.preventDefault
    if (!arrayofWins.includes(false)) {
      changeVictory(() => 1)
      console.log('You Win')
    }
    else{
      changeVictory(() => 2)
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
                updateSubmits={props.updateSubmits}
                letter={letter}
                style={style}
                letterNumber={index}
                changeMatchesLeft={props.changeMatchesLeft}
                matchesLeft={props.matchesLeft}
                index={index}
                changeArrayOfWins={changeArrayOfWins}
                configFromParent={arrayOfConfigs.current[index]}
              />
            </div>
          )
        })}
        <button onClick={checkAnswer}>Submit</button>
        {victory ? <h3> You Win! </h3> : <h3>Kepp Trying</h3>}
      </div>
      {/* {console.log('definition ', props.wordObj.definition)} */}
      {/* <div className="definition">{props.wordObj.definition}</div> */}
    </>
  )
}
