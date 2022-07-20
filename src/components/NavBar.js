import React from 'react';
import '../App.css';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="https://us.123rf.com/450wm/andyadi/andyadi1812/andyadi181200053/114214111-plantilla-de-dise%C3%B1o-de-logotipo-de-icono-de-vector-de-restaurante-de-comida-de-sombrero-de-chef.jpg?ver=6" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Platos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Eventos</a>
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