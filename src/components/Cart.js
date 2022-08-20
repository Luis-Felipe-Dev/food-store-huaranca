import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
    const { cart, cartTotal, cartQuantity, removePlate, emptyCart } = useCart()
    // console.log(cart)
    return (
        cart.length > 0 ?
            <div>
                <div className='text-center'>
                    <button className="btn btn-danger m-2" onClick={emptyCart}>Vaciar carrito</button>
                </div>
                <table className="table table-bordered mt-4">
                    <thead>
                        <tr>
                            <th className='text-center bg-dark text-white' scope="col">Nombre</th>
                            <th className='text-center bg-dark text-white' scope="col">Precio Unidad</th>
                            <th className='text-center bg-dark text-white' scope="col">Cantidad</th>
                            <th className='text-center bg-dark text-white' scope="col">Precio Total</th>
                            <th className='text-center bg-dark text-white' scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((plate) =>
                            <tr key={plate.id}>
                                <td>{plate.title}</td>
                                <td className='text-center'>S/. {parseFloat(plate.price).toFixed(2)}</td>
                                <td className='text-center'>{plate.quantity}</td>
                                <td className='text-center'>S/. {parseFloat(plate.quantity * plate.price).toFixed(2)}</td>
                                <td className='text-center'>
                                    <button className="btn btn-danger" onClick={() => removePlate(plate.id)}>Eliminar</button>
                                </td>
                            </tr>
                        )}
                        <tr>
                            <th className='text-center bg-dark text-white' scope="col" colSpan={2}>TOTAL</th>
                            <th className='text-center bg-dark text-white' scope="col">{cartQuantity()}</th>
                            <th className='text-center bg-dark text-white' scope="col" colSpan={3}>S/. {parseFloat(cartTotal()).toFixed(2)}</th>
                        </tr>
                    </tbody>
                </table>
                <div className='text-center'>
                    <Link className="btn btn-success m-2" to="/">Seguir comprando</Link>
                    <a className="btn btn-primary m-2">Terminar Compra</a>
                </div>
            </div>
            :
            <div className='text-center'>
                <h1 className='text-center mt-5'>No hay platos agregados en el carrito</h1>
                <Link className="btn btn-success mt-5" to="/">Ir a compras</Link>
            </div>
    )
}

export default Cart;