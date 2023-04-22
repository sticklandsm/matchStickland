import { useEffect, useState } from 'react'
import Segment from './Segments/Segment'
import { getLetterFromConfig, getConfigFromLetter } from '../functions'

interface Props {
  letter: string
  style: { left: string }
  changeMatchesLeft: React.Dispatch<React.SetStateAction<number>>
  matchesLeft: number
  index: number
  changeArrayOfWins: React.Dispatch<React.SetStateAction<boolean[]>>
  configFromParent: number
  victoryStatus: string
  changeVictory: React.Dispatch<React.SetStateAction<string>>
}

export interface MatchStickLetterRef {
  submitHandler: () => void
}

const emptyClasses = [
  'bottom-right',
  'bottom-left',
  'top-right',
  'top-left',
  'bottom',
  'middle',
  'top',
]

export function MatchStickLetter(props: Props) {
  const [matchStickConfig, changeConfig] = useState(0)
  const [correctMatches, changeCorrectMatches] = useState([...emptyClasses])

  function submitHandler() {
    //increase the submits

    if (props.victoryStatus === 'Try Again') {
      //checkes if any of the individual matches are in the right place and changes their class name as such in order to make them gray 
      const newCorrectMatches = emptyClasses.map((match, index) => {
        const configForInput = String(matchStickConfig)
          .padStart(7, '0')
          .split('')
        const configForRealAnswer = String(
          getConfigFromLetter(props.letter.toUpperCase())
        )
          .padStart(7, '0')
          .split('')
        if (
          configForInput[index] === configForRealAnswer[index] &&
          configForInput[index] === '1'
        ) {
          return match + ' correct'
        }
        return match
      })
      changeCorrectMatches(() => newCorrectMatches)
      props.changeVictory(() => 'Try Again!')
    }

    if (getLetterFromConfig(matchStickConfig) === props.letter.toUpperCase()) {
      props.changeArrayOfWins((wins) => {
        const newWins = [...wins]
        newWins[props.index] = true
        return newWins
      })
    }

    // Use the updated state values
    props.changeMatchesLeft((points) => points)
    changeConfig((config) => config)
  }

  //submit ends

  useEffect(() => {
    submitHandler()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchStickConfig, props.victoryStatus])

  return (
    <>
      <div className="letters">
        <div className={'segmented-digit'} style={props.style}>
          {correctMatches.map((match, index) => {
            const configNumber = 10 ** (6 - index)
            return (
              <Segment
                key={index}
                changeConfig={changeConfig}
                changeMatchesLeft={props.changeMatchesLeft}
                segmentSection={match}
                configNumberForEachSegment={configNumber}
                matchesLeft={props.matchesLeft}
                correctMatches={correctMatches}
              />
            )
          })}
        </div>
        <div>
          {/* <div className="container">
            <button
              onClick={submitHandler}
              className="submitButton"
              style={submitStyle}
            >
              Submit
            </button>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default MatchStickLetter
