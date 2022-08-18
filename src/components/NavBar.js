import React, { useState, useEffect } from 'react';
import '../App.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { db } from "../firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";

function NavBar() {
    const { cartQuantity } = useCart()
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const q = collection(db, 'categories')
        getDocs(q)
            .then(result => {
                const lista = result.docs.map((category) => {
                    return {
                        id: category.id,
                        ...category.data()
                    }
                })
                setCategories(lista)
            })
            .catch((error) => console.log(error))
    }, []);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="https://us.123rf.com/450wm/andyadi/andyadi1812/andyadi181200053/114214111-plantilla-de-dise%C3%B1o-de-logotipo-de-icono-de-vector-de-restaurante-de-comida-de-sombrero-de-chef.jpg?ver=6" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        {
                            categories.map(category => (
                                <li className="nav-item" key={category.id}>
                                    <Link to={`/category/${category.nombre}`}>{category.nombre}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    {
                        cartQuantity() > 0 ? (
                            <ul className="navbar-nav">
                                <CartWidget />
                            </ul>
                        ) : (
                            <span></span>
                        )
                    }

                </div>
            </div>
        </nav>
    );
}

export default NavBar;