import React, { useEffect, useState } from 'react';
import '../App.css';
import { getPlatesCategory, mock } from '../utils/api';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { db } from "../firebase/Firebase";
import { query, where, collection, getDocs } from "firebase/firestore"

function ItemListContainer({ greeting }) {
    const { categoryId } = useParams()
    const [listPlates, setListPlates] = useState([])
    const [mensaje, setMensaje] = useState(false)

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    useEffect(() => {
        const q = categoryId
            ? query(collection(db, 'plates'), where("category", "==", categoryId))
            : collection(db, 'plates')

        getDocs(q)
            .then(result => {
                const lista = result.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setListPlates(lista)
            })
            .catch((error) => console.log(error))
    }, [categoryId])

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