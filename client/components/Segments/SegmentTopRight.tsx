import { useState } from 'react'

interface Props {
  changeConfig: React.Dispatch<React.SetStateAction<number>>
}

export function SegmentTopRight(props: Props) {
  const [opacity, setOpacity] = useState({ opacity: 0.3 })

  function clickHandler() {
    console.log('Clicked segment Top Right')
    opacity.opacity === 0.3
      ? props.changeConfig((config) => config + 10000)
      : props.changeConfig((config) => config - 10000)
    const newOpacity = opacity.opacity === 1 ? { opacity: 0.3 } : { opacity: 1 }
    setOpacity(() => newOpacity)
  }

  return (
    <div
      onClick={clickHandler}
      className="segment top-right"
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
      style={opacity}
    ></div>
  )
}

export default SegmentTopRight
