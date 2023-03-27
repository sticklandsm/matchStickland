import { useState } from 'react'

interface Props {
  changeConfig: React.Dispatch<React.SetStateAction<number>>
  changeMatchesLeft: React.Dispatch<React.SetStateAction<number>>
  segmentSection: string
  changeConfigNum: number
  matchesLeft: number
}

export function Segment(props: Props) {
  const [opacity, setOpacity] = useState({ opacity: 0.05 })

  function clickHandler() {
    // if (props.matchesLeft === 0) {
    //   return
    // }

    opacity.opacity === 0.05
      ? props.changeConfig((config) => config + props.changeConfigNum)
      : props.changeConfig((config) => config - props.changeConfigNum)
    let newOpacity = { opacity: 0.05 }
    if (opacity.opacity === 1) {
      newOpacity = { opacity: 0.05 }
      props.changeMatchesLeft((points) => points + 1)
    } else if (opacity.opacity === 0.05 && props.matchesLeft !== 0) {
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
