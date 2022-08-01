import React, { useEffect, useState } from 'react';
import '../App.css';
import { getPlatesCategory, mock } from '../utils/api';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams()
    // console.log(categoryId)
    const [listPlates, setListPlates] = useState([])
    const [mensaje, setMensaje] = useState(false)

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    useEffect(() => {
        if (categoryId === undefined) {
            mock()
                .then((res) => setListPlates(res))
                .catch(() => setMensaje('Hubo un error, intente mas tarde'))
        } else {
            getPlatesCategory(categoryId)
                .then((data) => setListPlates(data.filter((listPlates) => listPlates.category === parseInt(categoryId))))
                .catch(() => setMensaje('Hubo un error, intente mas tarde'))
        }
    }, [categoryId])
    // console.log(listPlates)

    // useEffect(() => {
    //     getPlatesCategory(categoryId)
    //         .then((data) => setListPlates(data.filter((listPlates) => listPlates.category === parseInt(categoryId))))
    //         .catch(() => setMensaje('Hubo un error, intente mas tarde'))

    // }, [])
    // console.log(listPlates)

    return (
        <div className='container mt-4 mb-4'>
            <p>
                {greeting}
            </p>
            <ItemList listPlates={listPlates} />
        </div>
    );
}

export default ItemListContainer;