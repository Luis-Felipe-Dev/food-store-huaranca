import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const addCount = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const restCount = () => {
        if (count > initial) {
            setCount(count - 1);
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
                        <p className="m-2">{count}</p>
                    </div>
                    <div className="col-5">
                        <button className="btn btn-dark m-2" onClick={addCount}> + </button>
                    </div>
                </div>
                <button className="btn btn-dark m-2" onClick={() => onAdd(count)}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;