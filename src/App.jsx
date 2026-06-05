import './App.css';
import Board from './components/Board'

const App = () => {

  return (
    <div className="App">
      <img className="banner" src="https://i.pinimg.com/originals/d9/5a/4f/d95a4ff74b8c961f857c5e57e6f793bb.gif" alt="Animated banner" />
      <h1>Superfan Central</h1>
      <h2>A nerd's guide to the most popular fandom-focused events in the United Arab Emirates!</h2>
      <Board />

    </div>
  )
}

export default App