import React, { useEffect, useState } from 'react';
import '../App.css';
import { getItem } from '../utils/api';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/Firebase";

function ItemDetailContainer({ greeting }) {
    const { plateId } = useParams()
    const [plate, setPlate] = useState([])
    const [mensaje, setMensaje] = useState(false)

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    useEffect(() => {
        const collecionProductos = collection(db, 'plates')
        const referenciaDoc = doc(collecionProductos, plateId)
        getDoc(referenciaDoc)
            .then(result => {
                setPlate({
                    id: result.id,
                    ...result.data()
                })
            })
            .catch(error => {
                console.log({ error })
            })
    }, [plateId])

    return (
        <div className='container mt-4 mb-4'>
            <p>
                {greeting}
            </p>
            <ItemDetail plate={plate} />
        </div>
    );
}

export default ItemDetailContainer;