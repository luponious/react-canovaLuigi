import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/ShopingCartContext'



const ComponentA = () => {
    const { comision, cart, setCart } = useContext(CartContext)
    console.log(cart)
    return (
        <div>{comision}</div>
    )
}

export default ComponentA