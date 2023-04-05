import { useState } from 'react'

interface Props {
  changeConfig: React.Dispatch<React.SetStateAction<number>>
  changeMatchesLeft: React.Dispatch<React.SetStateAction<number>>
  matchesLeft: number
  segmentSection: string
  configNumberForEachSegment: number
  correctMatches: string[]
}

export function Segment(props: Props) {
  const [opacity, setOpacity] = useState({ opacity: 0.05 })

  function clickHandler() {
    let newOpacity = { opacity: 0.05 }
    if (opacity.opacity === 1) {
      newOpacity = { opacity: 0.05 }
      props.changeMatchesLeft((points) => points + 1)
      props.changeConfig((config) => config - props.configNumberForEachSegment)
    } else if (opacity.opacity === 0.05 && props.matchesLeft !== 0) {
      props.changeConfig((config) => config + props.configNumberForEachSegment)
      newOpacity = { opacity: 1 }
      props.changeMatchesLeft((points) => points - 1)
    }

    setOpacity(() => newOpacity)
    
  }

  return (
    <div
      onClick={clickHandler}
      className={`segment ${props.segmentSection}`}
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
      style={opacity}
    ></div>
  )
}

export default Segment
