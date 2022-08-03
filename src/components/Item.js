import React from "react";
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} items al carrito`)
}

const Item = ({ plates }) => {
    return (
        <div className="card col-sm-3 mt-1">
            <img src={plates.pictureUrl} className="card-img-top" alt="{plates.title}" />
            <div className="card-body">
                <p className="card-text">{plates.title}</p>
                <p className="card-text">{plates.description}</p>
                <p className="card-text">{plates.price}</p>
                <Link className="btn btn-dark" to={`/plate/${plates.id}`}>Ver detalles</Link>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
        </div>
    )
}

export default Item;