import {useState, createContext, useEffect} from "react"

export const CartContext = createContext(null)

// check storage por carrito > sino crea uno
const startingCart = JSON.parse(localStorage.getItem('cart')) || [];



export const ShoppingCartProvider = ({ children }) => {


// Arr carrito + count
    const [ cart, setCart ] = useState(startingCart);
    const [ cantidad, setCantidad ] = useState(1)
    const cantidadCarrito = () => {
        return cart.reduce((acc, prod) => acc += prod.cantidad, 0);
    } 
// calcular total
    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
        
    }

// Limpiar carrito
    const eliminarProducto = () => {
        setCart([])
    }

// memoria del carrito + eliminar itens
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))

    }, [cart])
    const deleteCartItem = (e, cart_id) => {
        e.preventDefault();
        const updatedCart = cart.map(item => {
            if (item.id === cart_id) {
                if (item.cantidad > 1) {
                    return { ...item, cantidad: item.cantidad - 1 };
                }
                return null;
            }
            return item;
        }).filter(Boolean);
        setCart(updatedCart);
    };

//popmodal
    const [ modal, setModal ] = useState(false);
    const toggleModal = ()=> {
        setModal(!modal)
    }



//provider!!!!!
    return (
        <CartContext.Provider value= { { cart, setCart, cantidad, setCantidad, cantidadCarrito, precioTotal, eliminarProducto, deleteCartItem, toggleModal, modal} } >

            {children}

        </CartContext.Provider>
    )
}

export default ShoppingCartProvider
