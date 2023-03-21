import { useState } from 'react'
import SegmentBottom from './Segments/SegmentBottom'
import SegmentBottomLeft from './Segments/SegmentBottomLeft'
import SegmentBottomRight from './Segments/SegmentBottomRight'
import SegmentMiddle from './Segments/SegmentMiddle'
import SegmentTop from './Segments/SegmentTop'
import SegmentTopLeft from './Segments/SegmentTopLeft'
import SegmentTopRight from './Segments/SegmentTopRight'

interface Props {
  letter: string
  style: { left: string }
}

export function MatchStickLetter(props: Props) {
  const [matchStickConfig, changeConfig] = useState(0)
  return (
    <>
      <div className="letters">
        <div className="segmented-digit" style={props.style}>
          <SegmentTop changeConfig={changeConfig} />
          <SegmentTopLeft changeConfig={changeConfig} />
          <SegmentTopRight changeConfig={changeConfig} />
          <SegmentMiddle changeConfig={changeConfig} />
          <SegmentBottomLeft changeConfig={changeConfig} />
          <SegmentBottomRight changeConfig={changeConfig} />
          <SegmentBottom changeConfig={changeConfig} />
        </div>
        <button>Button</button>
        <div>{getLetterFromConfig(matchStickConfig)}</div>
        <div>{matchStickConfig}</div>
      </div>
    </>
  )
}

function getLetterFromConfig(config: number) {
  switch (config) {
    case 1111011:
      return 'A'
    case 1111111:
      return 'B'
    case 101101:
      return 'C'
    case 101111:
      return 'E'
    case 101011:
      return 'F'
    case 1101111:
      return 'G'
    case 1111010:
      return 'H'
    case 101000:
      return 'I'
    case 1010000:
      return 'I'
    case 1110100:
      return 'J'
    case 101100:
      return 'L'
    case 1111101:
      return 'O'
    case 111011:
      return 'P'
    case 1001111:
      return 'S'
    case 1111100:
      return 'U'
    case 1011110:
      return 'Y'
    case 110111:
      return 'Z'

    default:
      return
  }
}

export default MatchStickLetter

1101111
