import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="nav-link" href="#"><img src="https://us.123rf.com/450wm/andyadi/andyadi1812/andyadi181200053/114214111-plantilla-de-dise%C3%B1o-de-logotipo-de-icono-de-vector-de-restaurante-de-comida-de-sombrero-de-chef.jpg?ver=6" alt="" /></a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#nosotros">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#platos">Platos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#eventos">Eventos</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#login"><i className="bi bi-person-fill"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;