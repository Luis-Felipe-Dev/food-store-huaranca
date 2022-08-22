import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({ plate }) {
    const [cantidad, setCantidad] = useState(1);
    const { addToCart } = useCart()
    const [compra, setCompra] = useState(false);
    const { id, category, title, description, price, pictureUrl, stock } = plate

    const onAdd = () => {
        let plateAComprar = {
            id,
            title,
            pictureUrl,
            stock,
            price,
            quantity: cantidad
        }
        setCompra(true)
        addToCart(plateAComprar)
    }

    useEffect(() => {
    }, [cantidad])

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
                        <p className="card-text">S/. {parseFloat(plate.price).toFixed(2)}</p>
                        <p className="card-text"><small className="text-muted">Categoria - {plate.category}</small></p>
                    </div>
                </div>
                {
                    compra
                        ?
                        <div className='text-center'>
                            <Link className="btn btn-success m-2" to="/">Seguir comprando</Link>
                            <Link className="btn btn-primary m-2" to="/cart">Ir a Carrito</Link>
                        </div>
                        :
                        <ItemCount initial={1} stock={plate.stock} cantidad={cantidad} setCantidad={setCantidad} onAdd={onAdd} />
                }
            </div>
        </div>
    )
}
export default ItemDetail;