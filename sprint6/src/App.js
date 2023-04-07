import React, { useState } from 'react';
import './App.css';
import dataFrases from './data/dataFrases.json';
import Escena from './components/escena/Escena';

function App() {

  const [count, setCount] = useState(0);

  const next = () => {
    if (count === dataFrases.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  const previous = () => {
    if (count === 0) {
      setCount(dataFrases.length - 1)
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className='botones'>
        <button onClick={previous}>Anterior</button>
        <button onClick={next}>Següent</button>
      </div>
      {dataFrases.map((data, index) => (<Escena key={data} frase={data} changeColor={index === count}></Escena>))}

    </div>
  );
}

export default App;
