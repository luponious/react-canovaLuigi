import { useContext } from 'react'
import { CartContext } from '../../context/ShopingCartContext'
import { useNavigate } from 'react-router-dom';


const Carrito = ({ setOpen }) => {

    const { cart, precioTotal, eliminarProducto, deleteCartItem } = useContext(CartContext);
    const navegar = useNavigate()

    return (
        <div className="isolate bg-white px-6 py-24 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true">
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-left">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Carrito</h2>

                {/* Comprueba si hay productos en el carrito */}

                {cart.length === 0
                    ? <p className='mt-1'>No hay productos en el carrito.</p>
                    : (
                        cart.length < 2
                            ? <p className='mt-1'>Tu carrito: </p>
                            : <p className="mt-2 text-lg leading-8 text-gray-600">
                                Tu carrito:
                            </p>
                    )
                }

                <div className='my-5 '>
                    {cart.length === 0
                        ? <h1></h1>
                        : (cart.cantidad < 2
                            ? <h1 className=' text-slate-950 font-bold pb-3 text-xl'>Producto: </h1>
                            : <h1 className=' text-slate-950 font-bold pb-3 text-xl'>Productos: </h1>)
                    }

                    {/* Mapea de productos en el carrito */}

                    {cart.map((prod) => (
                        <div key={prod.id} className='mb-2 p-2 h-full w-full bg-slate-200 rounded-lg text-slate-950 flex-col justify-around gap-6'>
                            <div className='text-left'>
                                <h2 className='font-bold'> {prod.titulo} </h2>
                            </div>
                            <div className='flex gap-3 justify-around text-center'>
                                <div className=''>
                                    <small className=''>Cantidad</small>
                                    <p className='font-bold'>{prod.cantidad}</p>
                                </div>
                                <div className=''>
                                    <small className=''>Precio</small>
                                    <p className='font-bold'>{prod.precio} €</p>
                                </div>
                                <div className=''>
                                    <small className=''>Subtotal</small>
                                    <p className='font-bold'>{prod.precio * prod.cantidad} €</p>
                                </div>
                                <div>
                                    <svg onClick={(e) => deleteCartItem(e, prod.id)} xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {cart.length === 0
                    ? <small onClick={() => setOpen(false)} className='cursor-pointer py-3 px-4 bg-slate-500 text-slate-50 rounded-full'>Seguir comprando</small>
                    :
                    <>
                        <div className='flex justify-between'>

                            <h1 className=' text-slate-950 font-bold pb-3 text-xl'>
                                Precio Total:
                            </h1>
                            <h1 className=' text-slate-950 font-bold pb-3 text-xl'>
                                {precioTotal()} €
                            </h1>
                        </div>
                        <div className='mb-7'>
                            <small onClick={() => eliminarProducto()} className=' cursor-pointer py-3 px-4 bg-slate-500 text-slate-50 rounded-full'>Eliminar Todo</small>
                            <small onClick={() => setOpen(false)} className=' cursor-pointer ml-3 py-3 px-4 bg-slate-500 text-slate-50 rounded-full'>Volver</small>
                        </div>
                        <button onClick={() => {
                            navegar('/checkout');
                            setOpen(false);
                        }
                        }
                            className='cursor-pointer py-3 px-4 bg-slate-700 font-bold text-slate-50 rounded-full'>
                            Ir a Checkout
                        </button>
                    </>

                }
            </div>
        </div>
    )
}

export default Carrito