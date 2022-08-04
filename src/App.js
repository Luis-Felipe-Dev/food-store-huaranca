import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';

function App() {

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
            <Route path="/plate/:plateId" element={<ItemDetailContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart stock={10} initial={1} onAdd={onAdd} />} />
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
