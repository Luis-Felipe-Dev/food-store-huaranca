import React, { useEffect, useState } from 'react';
import '../App.css';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
    const [listaproductos, setListaProductos] = useState([])
    const [mensaje, setMensaje] = useState(false)

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    const productos = [
        { id: 1, title: 'Xiaomi', description: 'Redmi note 11 128GB Aluminio', price: 'S/ 909', pictureUrl: '/images/1.png' },
        { id: 2, title: 'Samsung', description: 'Samsung Galaxy A32 128GB Negro N + Audífonos - IT Fit', price: 'S/ 1089', pictureUrl: '/images/2.png' },
        { id: 3, title: 'ZTE', description: 'Blade A51 32GB Gris', price: 'S/ 409', pictureUrl: '/images/3.png' },
        { id: 4, title: 'Apple', description: 'iPhone 13 Pro 512GB Silver', price: 'S/ 6789', pictureUrl: '/images/4.png' },
        { id: 5, title: 'Apple', description: 'iPhone 13 128GB Rosa', price: 'S/ 4139', pictureUrl: '/images/5.png' },
        { id: 6, title: 'Samsung', description: 'Galaxy Z Fold 3 Negro 256GB 5G + Galaxy Tab Tab A7 Lite', price: 'S/ 6549', pictureUrl: '/images/6.png' }
    ]

    const data = new Promise((resolve, reject) => {
        let condition = true
        setTimeout(() => {
            if (condition) {
                resolve(productos)
            } else {
                reject('Salio mal, no hay sushi')
            }
        }, 1000)
    })
    // console.log(data)

    useEffect(() => {
        data
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