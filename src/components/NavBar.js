import React from 'react';
import '../App.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><img src="https://us.123rf.com/450wm/andyadi/andyadi1812/andyadi181200053/114214111-plantilla-de-dise%C3%B1o-de-logotipo-de-icono-de-vector-de-restaurante-de-comida-de-sombrero-de-chef.jpg?ver=6" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        {/* <li className="nav-item">
                            <Link to="/">Nosotros</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/category/1">Carnes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/2">Ensaladas</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/3">Pastas</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <CartWidget />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;