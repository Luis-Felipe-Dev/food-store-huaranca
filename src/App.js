import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  // const contidion = true

  // if (contidion) {
  //   console.log('VERDADERO')
  // } else {
  //   console.log('FALSO')
  // }

  // contidion ? console.log('VERDADERO') : console.log('FALSO')

  // console.log(contidion ? 'VERDADERO' : 'FALSO')

  // // spread operator
  // const numeros = [1, 2, 3, 4, 5, 6]
  // const letras = ['a', 'b', 'c', 'd']

  // const alfanumericosVersionVieja = [...numeros].concat(letras)

  // const alfanumericosVersionNueva = [...numeros, ...letras]

  // console.log({ alfanumericosVersionVieja })

  // console.log({ alfanumericosVersionNueva })


  return (
    <>
      <div className='container-fluid'>
        <NavBar />
        
        <ItemListContainer greeting="Hola desde ItemListContainer" />
      </div>
    </>
  );
}

export default App;
