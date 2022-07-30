import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

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

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} items al carrito`)
  }
  return (
    <>
      <BrowserRouter>
        <div className='container-fluid'>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="*" element={<ItemDetailContainer greeting="Hola desde ItemListContainer" />} />
            <Route path="*" element={<ItemCount stock={10} initial={1} onAdd={onAdd} />} />
          </Routes>
          {/* <ItemListContainer greeting="Hola desde ItemListContainer" /> */}
          {/* <ItemDetailContainer greeting="Hola desde ItemListContainer" /> */}
          {/* <ItemCount stock={10} initial={1} onAdd={onAdd} /> */}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
