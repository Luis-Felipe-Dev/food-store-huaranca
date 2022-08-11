import React from 'react';
import '../App.css';
import { useCart } from './CartContext';

function CartWidget() {
    const { cartQuantity } = useCart()
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">
                <i className="bi bi-cart4"></i>
                <span className='text-white'>{cartQuantity() || ''}</span>
            </a>
        </li>
    );
}

export default CartWidget;