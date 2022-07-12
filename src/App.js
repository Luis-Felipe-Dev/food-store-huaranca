import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';

function App() {
  const contidion = true

  if (contidion) {
    console.log('VERDADERO')
  } else {
    console.log('FALSO')
  }

  contidion ? console.log('VERDADERO') : console.log('FALSO')

  console.log(contidion ? 'VERDADERO' : 'FALSO')

  // spread operator
  const numeros = [1, 2, 3, 4, 5, 6]
  const letras = ['a', 'b', 'c', 'd']

  const alfanumericosVersionVieja = [...numeros].concat(letras)

  const alfanumericosVersionNueva = [...numeros, ...letras]

  console.log({ alfanumericosVersionVieja })

  console.log({ alfanumericosVersionNueva })


  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <p>
          Tienda de comidas Huaranca
        </p>
      </header>
    </div>
  );
}

export default App;
