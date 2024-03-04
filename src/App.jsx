import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';
function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime="1" />
        <TimerChallenge title="NotEasy" targetTime="5" />
        <TimerChallenge title="Getting Thought" targetTime="15" />
        <TimerChallenge title="Hard" targetTime="30" />
      </div>
    </>
  );
}

export default App;
