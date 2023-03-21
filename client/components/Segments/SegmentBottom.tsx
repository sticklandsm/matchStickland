import { useState } from 'react'

interface Props {
  changeConfig: React.Dispatch<React.SetStateAction<number>>
}

export function SegmentBottom(props: Props) {
  const [opacity, setOpacity] = useState({ opacity: 0.3 })

  function clickHandler() {
    console.log('Clicked segment Bottom')
    opacity.opacity === 0.3
      ? props.changeConfig((config) => config + 100)
      : props.changeConfig((config) => config - 100)
    const newOpacity = opacity.opacity === 1 ? { opacity: 0.3 } : { opacity: 1 }
    setOpacity(() => newOpacity)
  }

  return (
    <div
      onClick={clickHandler}
      className="segment bottom"
      onKeyDown={clickHandler}
      role="button"
      tabIndex={0}
      style={opacity}
    ></div>
  )
}

export default SegmentBottom
