import React, { useEffect, useState } from 'react';
import '../App.css';
import { getItem } from '../utils/api';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
    const [producto, setProducto] = useState([])
    const [mensaje, setMensaje] = useState(false)

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    useEffect(() => {
        getItem()
            .then((res) => setProducto(res))
            .catch(() => setMensaje('Hubo un errror, intente mas tarde'))
    }, [])
    console.log(producto)

    return (
        <div className='container mt-4'>
            <ItemDetail producto={producto} />
        </div>
    );
}

export default ItemDetailContainer;