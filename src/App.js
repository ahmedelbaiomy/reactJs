import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Seconds from './components/Seconds';


const App = (props)=> {
  const [minutes, setMinutes] = useState(0);
  const increaseMinutes = () => {
    if (minutes < 5) setMinutes(minutes + 1);
  };

  const decreaseMinutes = () => {
    if (minutes > 0) setMinutes(minutes - 1);
  };

  return (
    <div className="container">
      <div className="controllers">
        <button className="button" onClick={decreaseMinutes}>-</button>
        
        <h1>{`${minutes}`} <span>Minute</span></h1>

         <button className="button" onClick={increaseMinutes}>+</button>
      </div>
        {minutes > 0 && <Seconds minutes={minutes} setMinutes= {setMinutes}/>}
    </div>
  );
};

export default App;
