import React, { useEffect, useState } from 'react';
import '../App.css';
import { getItem } from '../utils/api';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

function ItemDetailContainer({ greeting }) {
    const { plateId } = useParams()
    // console.log(plateId)
    const [plate, setPlate] = useState([])
    const [mensaje, setMensaje] = useState(false)

    const onAdd = (cantidad) => {
        setMensaje(`Agregaste ${cantidad} items en el carrito`)
    }

    useEffect(() => {
        getItem(plateId)
            .then((data) => setPlate(data.filter((plate) => plate.id === parseInt(plateId))[0]))
            .catch(() => setMensaje('Hubo un error, intente mas tarde'))
    }, [plateId])
    // console.log(plate)

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