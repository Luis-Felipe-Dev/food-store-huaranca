import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
import { db } from '../firebase/Firebase'

const Checkout = () => {
    const [comprador, setComprador] = useState({})
    const { cart, cartTotal, cartQuantity, removePlate, emptyCart } = useCart()

    const datosComprador = (e) => {
        setComprador({
            ...comprador,
            [e.target.name]: e.target.value
        })
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        if (Object.values(comprador).length !== 3) {
            alert("Todos los campos son obligatorios")
        } else {
            const ventasCollection = collection(db, "ventas")
            addDoc(ventasCollection, {
                comprador,
                items: cart,
                total: cartTotal(),
                date: serverTimestamp()
            })
                .then((res) => {
                    setOrderId(res.id)
                    emptyCart()
                })
                .catch((error) => console.log(error))
        }
    }

    return (
        <>
            {!orderId
                ?
                <div className='container'>
                    <form onSubmit={finalizarCompra}>
                        <h2 className='mt-4 mb-4'>Checkout</h2>
                        <div className="mb-3">
                            <label name='name' className="form-label"><b>Nombre Completo</b></label>
                            <input type="text" className="form-control" id="name" onChange={datosComprador} />
                        </div>
                        <div className="mb-3">
                            <label name='telefono' className="form-label"><b>Número de télefono</b></label>
                            <input type="number" className="form-control" id="telefono" onChange={datosComprador} />
                        </div>
                        <div className="mb-3">
                            <label name='email' className="form-label"><b>Correo Electrónico</b></label>
                            <input type="email" className="form-control" id="email" onChange={datosComprador} />
                        </div>
                        <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                    </form>
                </div>
                :
                <div>
                    <h2>Muchas gracias por su compra!</h2>
                    <h3>Su orden es: {orderId}</h3>
                    <button>Volver al la página principal</button>
                </div>
            }
        </>
    )
}

export default Checkout;