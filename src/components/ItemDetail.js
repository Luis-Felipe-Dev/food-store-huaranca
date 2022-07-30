import React from 'react'

export default function ItemDetail({ producto }) {
    return (
        // <div>{producto.id} {producto.title} {producto.description} {producto.price}</div>
        // <img src={producto.pictureUrl}/>
        <div className="card mb-3 col-12 producto">
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={producto.pictureUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-7 producto-detalles-card">
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                        <p className="card-text">{producto.price}</p>
                        <p className="card-text"><small className="text-muted">Categoria - {producto.id}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
