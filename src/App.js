import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cart from './components/Cart';
import { CartContext, CartProvider, useCart } from './context/CartContext';
import Checkout from './components/Checkout';

function App() {

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
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
