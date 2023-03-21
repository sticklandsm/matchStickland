import MatchStickLetter from './MatchStickLetter'

interface Props {
  wordObj: { word: string; definition: string }
}

export function MatchStickWord(props: Props) {
  console.log(props.wordObj)
  const splitWord = props.wordObj.word.split('')

  return (
    <>
      <div>
        {splitWord.map((letter, index) => {
          const style = { left: `${(index + 1) * 10}%` }
          return (
            <div key={index}>
              <MatchStickLetter letter={letter} style={style} />
            </div>
          )
        })}
      </div>
      <div className="definition">{props.wordObj.definition}</div>
    </>
  )
}
