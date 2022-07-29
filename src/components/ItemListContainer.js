import React, { useEffect, useState } from 'react';
import '../App.css';
import { mock } from '../utils/api';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
    const [listaproductos, setListaProductos] = useState([])
    const [mensaje, setMensaje] = useState(false)

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    useEffect(() => {
        mock()
            .then((res) => setListaProductos(res))
            .catch(() => setMensaje('Hubo un errror, intente mas tarde'))
    }, [])
    console.log(listaproductos)

    return (
        <div className='container mt-4'>
            <p>
                {greeting}
            </p>
            <ItemList listaProductos={listaproductos} />
        </div>
    );
}

export default ItemListContainer;