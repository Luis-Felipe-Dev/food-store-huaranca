import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext'

function App() {

  const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} items al carrito`)
  }
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div className='container-fluid'>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/plate/:plateId" element={<ItemDetailContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/cart" element={<Cart stock={10} initial={1} onAdd={onAdd} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
