import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid bg-dark">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src='https://us.123rf.com/450wm/andyadi/andyadi1812/andyadi181200053/114214111-plantilla-de-dise%C3%B1o-de-logotipo-de-icono-de-vector-de-restaurante-de-comida-de-sombrero-de-chef.jpg?ver=6' />
                    </a>
                    <span className="text-white">© 2022 Todos los derechos reservados</span>
                </div>

                <ul className="nav">
                    <li className="ms-3"><a className="text-white" href="/"><i className="bi bi-facebook"></i></a></li>
                    <li className="ms-3"><a className="text-white" href="/"><i className="bi bi-instagram"></i></a></li>
                    <li className="ms-3"><a className="text-white" href="/"><i className="bi bi-whatsapp"></i></a></li>
                </ul>
            </footer>
        </div>
    )
}
