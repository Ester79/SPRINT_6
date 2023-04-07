import React, { useEffect, useState } from 'react';
import './App.css';
import Escena from './components/escena/Escena';
import dataFrases from './data/dataFrases.json'

function App() {


  return (
    <>
      {dataFrases.map(data => (<Escena frase={data}></Escena>))}
    </>
  );
}

export default App;
