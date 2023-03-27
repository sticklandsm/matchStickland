import { useState } from 'react'
import Segment from './Segments/Segment'
import { getLetterFromConfig } from '../functions'

interface Props {
  letter: string
  style: { left: string }
  addToMatchedWord: React.Dispatch<React.SetStateAction<string>>
  letterNumber: number
  changeMatchesLeft: React.Dispatch<React.SetStateAction<number>>
  matchesLeft: number
}

export function MatchStickLetter(props: Props) {
  const [matchStickConfig, changeConfig] = useState(0)
  const [wrongOrRight, checkIfWrongOrRight] = useState('')

  function submitHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault

    if (getLetterFromConfig(matchStickConfig) === props.letter.toUpperCase()) {
      props.addToMatchedWord((word) => {
        const newWord = word.slice().split('')
        newWord[props.letterNumber] = props.letter
        console.log(newWord)
        return newWord.join('')
      })
      checkIfWrongOrRight(() => 'Letter Correct!')
    } else {
      console.log('No match')
      checkIfWrongOrRight(() => 'Letter Wrong!')
    }
  }

  return (
    <>
      <div className="letters">
        <div className="segmented-digit" style={props.style}>
          <Segment
            changeConfig={changeConfig}
            changeMatchesLeft={props.changeMatchesLeft}
            segmentSection="top"
            changeConfigNum={1}
            matchesLeft={props.matchesLeft}
          />
          <Segment
            changeConfig={changeConfig}
            changeMatchesLeft={props.changeMatchesLeft}
            segmentSection="top-left"
            changeConfigNum={1000}
            matchesLeft={props.matchesLeft}
          />
          <Segment
            changeConfig={changeConfig}
            changeMatchesLeft={props.changeMatchesLeft}
            segmentSection="top-right"
            changeConfigNum={10000}
            matchesLeft={props.matchesLeft}
          />
          <Segment
            changeConfig={changeConfig}
            changeMatchesLeft={props.changeMatchesLeft}
            segmentSection="middle"
            changeConfigNum={10}
            matchesLeft={props.matchesLeft}
          />
          <Segment
            changeConfig={changeConfig}
            changeMatchesLeft={props.changeMatchesLeft}
            segmentSection="bottom-left"
            changeConfigNum={100000}
            matchesLeft={props.matchesLeft}
          />
          <Segment
            changeConfig={changeConfig}
            changeMatchesLeft={props.changeMatchesLeft}
            segmentSection="bottom-right"
            changeConfigNum={1000000}
            matchesLeft={props.matchesLeft}
          />
          <Segment
            changeConfig={changeConfig}
            changeMatchesLeft={props.changeMatchesLeft}
            segmentSection="bottom"
            changeConfigNum={100}
            matchesLeft={props.matchesLeft}
          />
        </div>
        <div>
          <div></div>
          <button
            onClick={submitHandler}
            className="submitButton"
            style={props.style}
          >
            Button
          </button>
          <div className="wrongOrRight" style={props.style}>
            {wrongOrRight}
          </div>
        </div>
      </div>
    </>
  )
}

export default MatchStickLetter
