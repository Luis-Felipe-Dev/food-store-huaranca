import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useCart } from '../context/CartContext';

function CartWidget() {
    const { cartQuantity } = useCart()
    return (
        <li className="nav-item">
            <Link className="nav-link" to="/cart">
                <i className="bi bi-cart4"></i>
                <span className='text-white p-1'>{cartQuantity() || ''}</span>
            </Link>
        </li>
    );
}

export default CartWidget;