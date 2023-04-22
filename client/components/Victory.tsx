interface Props {
  changeCelebration: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export function Victory(props: Props) {
  const audio = new Audio('/YoureCorrectHorse.mp3')
  function goBackToGame() {
    audio.pause()
    props.changeCelebration(() => <></>)
  }
  audio.play()

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <img
      onClick={goBackToGame}
      className="horse"
      src="images/correctHorse.gif"
      alt="Correct Horse"
    />
  )
}
