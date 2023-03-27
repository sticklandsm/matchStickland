import { useEffect, useState } from 'react'
import MatchStickLetter from './MatchStickLetter'

interface Props {
  wordObj: { word: string; definition: string }
  changeMatchesLeft: React.Dispatch<React.SetStateAction<number>>
  matchesLeft: number
}

export function MatchStickWord(props: Props) {
  // console.log(props.wordObj)
  const splitWord = props.wordObj.word.split('')
  const [matchedWord, addToMatchedWord] = useState('')

  return (
    <>
      <div>
        <h2>{matchedWord}</h2>

        {splitWord.map((letter, index) => {
          const style = { left: `${(index + 1) * 10}%` }
          return (
            <div key={index}>
              <MatchStickLetter
                letter={letter}
                style={style}
                addToMatchedWord={addToMatchedWord}
                letterNumber={index}
                changeMatchesLeft={props.changeMatchesLeft}
                matchesLeft={props.matchesLeft}
              />
            </div>
          )
        })}
      </div>
      {console.log('definition ', props.wordObj.definition)}
      <div className="definition">{props.wordObj.definition}</div>
    </>
  )
}
