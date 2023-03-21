import { useState } from 'react'

interface Props {
  changeConfig: React.Dispatch<React.SetStateAction<number>>
}

export function SegmentTopLeft(props: Props) {
  const [opacity, setOpacity] = useState({ opacity: 0.3 })

  function clickHandler() {
    console.log('Clicked segment Top Left')
    opacity.opacity === 0.3
      ? props.changeConfig((config) => config + 1000)
      : props.changeConfig((config) => config - 1000)
    const newOpacity = opacity.opacity === 1 ? { opacity: 0.3 } : { opacity: 1 }
    setOpacity(() => newOpacity)
  }

  return (
    <div
      onClick={clickHandler}
      className="segment top-left"
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
      style={opacity}
    ></div>
  )
}

export default SegmentTopLeft
