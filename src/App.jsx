import {React, useState} from 'react';
import './App.css';
import Calculator from './modules/calculator';

function App() {
  const [isMode, setMode] = useState(true);
  function handleChange(newValue) {
      setMode(newValue);
    }
  return (
    <div className={isMode?"App":"App App-dark"}  >
      <Calculator onChange={handleChange}/>
    </div>
  );
}

export default App;
