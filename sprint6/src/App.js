import React from 'react';
import './App.css';
import dataFrases from './data/dataFrases.json';
import Escena from './components/escena/Escena';

function App() {
  return (
    <div>
      {dataFrases.map(data => (<Escena key={data} frase={data}></Escena>))}

    </div>
  );
}

export default App;
