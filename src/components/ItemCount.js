import React from "react";

const ItemCount = ({ stock, initial, cantidad, setCantidad, onAdd }) => {
    const addCount = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };
    const restCount = () => {
        if (cantidad > initial) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="container text-center">
            <div className="card-sm border">
                <div className="row">
                    <div className="col-5">
                        <button className="btn btn-dark m-2" onClick={restCount}> - </button>
                    </div>
                    <div className="col-2">
                        <p className="m-2">{cantidad}</p>
                    </div>
                    <div className="col-5">
                        <button className="btn btn-dark m-2" onClick={addCount}> + </button>
                    </div>
                </div>
                <button className="btn btn-dark m-2" onClick={onAdd}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;