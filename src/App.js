import logo from './logo.svg';
import './App.css';
import WorldClock from './customComponent/WorldClock';
import StopWatch from './customComponent/StopWatch';

function App() {

  return (
    <div>
  <header className="App-header">
  <StopWatch/>
  <WorldClock/>
</header>
</div>
  )

}

export default App;


//export default CountdownTimer;
