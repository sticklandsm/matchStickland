export function SegmentTop() {
  function clickHandler() {
    console.log('Clicked segment Top')
  }

  return <button onClick={clickHandler} className="segment top"></button>
}

export default SegmentTop
