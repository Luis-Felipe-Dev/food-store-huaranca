import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ plates }) => {
    return (
        <div className="card col-sm-3 mt-1">
            <img src={plates.pictureUrl} className="card-img-top" alt="{plates.title}" />
            <div className="card-body">
                <p className="card-text">{plates.title}</p>
                <p className="card-text">{plates.description}</p>
                <p className="card-text">S/. {parseFloat(plates.price).toFixed(2)}</p>
                <Link className="btn btn-dark" to={`/plate/${plates.id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Item;