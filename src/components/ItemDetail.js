import React from 'react'

function ItemDetail({ plate }) {

    // console.log({ plate })
    return (
        <div className="card mb-3 col-12 producto">
            <div className="row g-0">
                <div className="col-md-5">
                    <img src={plate.pictureUrl} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-7 producto-detalles-card">
                    <div className="card-body">
                        <h5 className="card-title">{plate.title}</h5>
                        <p className="card-text">{plate.description}</p>
                        <p className="card-text">{plate.price}</p>
                        <p className="card-text"><small className="text-muted">Categoria - {plate.category}</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;