import './App.css';
import {useState} from 'react';


function App() {
  const[leftDiceNumber,setLeftDiceNumber]=useState(2);
    const [rightDiceNumber, setRightDiceNumber] = useState(3);

  const onRightBallClicked = () =>{
    setRightDiceNumber(Math.floor(Math.random()*5)+1);
  }
  const onLeftBallClicked = () =>{
    setLeftDiceNumber(Math.floor(Math.random()*5)+1);
  }
  return (
    <div className="App">
      <header>Ball</header>
      <main>
        <button onClick={onLeftBallClicked}><img src={require(`./assets/ball${leftDiceNumber}.png`)}/></button>
        <button onClick={onRightBallClicked}><img src={require(`./assets/ball${rightDiceNumber}.png`)}/></button>
      </main>
    </div>
  );
}



export default App;
