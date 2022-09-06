import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const { item: cart, loading, error, saveItem: saveItem } = useLocalStorage("Cart", [])

    const addToCart = (item) => {
        const itemInCart = cart.find((plate) => plate.id === item.id)
        if (itemInCart) {
            const updatedCart = cart.map((plate) => {
                if (plate.id === item.id) {
                    return { ...plate, quantity: plate.quantity + item.quantity }
                } else {
                    return plate
                }
            })
            saveItem(updatedCart)
        } else {
            saveItem([...cart, item])
        }
    }

    const isInCart = (id) => {
        return cart.some((plate) => plate.id === id)
    }

    const removePlate = (id) => {
        let newCart = cart.filter((plate) => plate.id !== id)
        saveItem(newCart)
    }

    const emptyCart = () => {
        saveItem([])
    }

    const cartQuantity = () => {
        return cart.reduce((acumulador, plate) => acumulador += plate.quantity, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acumulador, plate) => acumulador += plate.price * plate.quantity, 0)
    }


    return (
        <CartContext.Provider value={{ cart, addToCart, isInCart, emptyCart, removePlate, cartQuantity, cartTotal }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)
