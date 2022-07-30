import React from "react";
import ItemCount from './ItemCount';

const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} items al carrito`)
}

const Item = ({ producto }) => {
    return (
        <div className="card col-sm-3 mt-1">
            <img src={producto.pictureUrl} className="card-img-top" alt="{producto.title}" />
            <div className="card-body">
                <p className="card-text">{producto.title}</p>
                <p className="card-text">{producto.description}</p>
                <p className="card-text">{producto.price}</p>
            </div>
            <ItemCount initial={1} stock={10} onAdd={onAdd} />
            {/* <button className="btn btn-primary">Ver más</button> */}
        </div>
    )
}

export default Item;