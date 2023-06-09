import React, { useState } from 'react';
import './App.css';
import dataFrases from './data/dataFrases.json';
import Escena from './components/escena/Escena';
import Imagen1 from './img/1.jpg';
import Imagen2 from './img/2.jpg';
import Imagen3 from './img/3.jpg';
import Imagen4 from './img/4.jpg';


function App() {

  const [count, setCount] = useState(0);
  const [hiddeGame, setHiddeGame] = useState(true);
  const [hiddeMainPage, setHiddeMainPage] = useState(true);
  const imagenes = [Imagen1, Imagen2, Imagen3, Imagen4];


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

  const hiddeDisplayElements = () => {
    setHiddeGame(!hiddeGame);
    setHiddeMainPage(!hiddeMainPage)
  }

  return (
    <>
      {hiddeMainPage &&
        <div className='mainPage'>
          <p>Un/a client/a que té com a producte principal una web de gestió empresarial desenvolupada amb React. Ens ha demanat que desenvolupem un tutorial, en el qual mitjançant dos botons els nous usuaris puguin avançar i retrocedir en els consells, modificant-se el text d'ajuda i la imatge de fons.</p>
          <button onClick={hiddeDisplayElements} className='startButton'>START</button>
        </div>}
      {!hiddeGame &&
        <div style={{ backgroundImage: `url(${imagenes[count]})` }} className="game" >
          <div className='botones'>
            <button onClick={previous}>Anterior</button>
            <button onClick={next}>Següent</button>
          </div>
          {dataFrases.map((data, index) => (<Escena key={data} frase={data.text} changeColor={index === count}></Escena>))}
        </div>}
    </>
  );
}

export default App;
