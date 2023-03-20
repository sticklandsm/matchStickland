import SegmentTop from './SegmentTop'

function App() {
  return (
    <div>
      <h1>App</h1>

      <div className="segmented-digit">
        <SegmentTop />
        <div className="segment top-left"></div>
        <div className="segment top-right"></div>
        <div className="segment middle"></div>
        <div className="segment bottom-left"></div>
        <div className="segment bottom-right"></div>
        <div className="segment bottom"></div>
      </div>
    </div>
  )
}

export default App
