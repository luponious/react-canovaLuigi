import { useContext, useState } from 'react';
import { CartContext } from '../../context/ShopingCartContext';
import { useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {    Input,    Select,    Button,    VStack,    FormControl,    FormLabel,    Textarea,    Switch,    Text,   Grid} from '@chakra-ui/react';
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../../main';
function Checkout() {
    const [orderId, setOrderId] = useState('');
    const [purchaseId, setPurchaseId] = useState('');
    const [agreed, setAgreed] = useState(false);

    const { cart, precioTotal, eliminarProducto, deleteCartItem } = useContext(CartContext);
    const navigate = useNavigate();

    // Memoria del form
    const { control, handleSubmit } = useForm();
    const comprar = (data) => {
        const order = {
            cliente: data,
            productos: cart,
            total: precioTotal(),
        };

        // agregar a DB
        const prodData = collection(db, 'orders');
        addDoc(prodData, order).then((comprado) => {
            // ID de compra y limpia cart al fin
            setOrderId(comprado.id);
            eliminarProducto();
        });
    };

    // Render at the end of the purchase
    if (orderId) {
        return (
            <div className="isolate bg-white px-6 pt-24 lg:px-8">
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Compra Realizada con sucesso! 🎉 🎉 🎉</h1>
                    <h2 className="mt-2 text-xl justify-center">Gracias por tu compra!!</h2>
                    <h3 className="text-xl mt-3">
                        El ID de tu pedido es: <span className="font-bold">{orderId}</span>
                    </h3>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="isolate bg-white px-6 pt-24 lg:px-8">
                {/* bg + estilos */}
                <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                    <div
                        className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Resumen del carrito</h2>
                    {cart.length === 0 ? (
                        <p className="mt-4 text-xl text-gray-500">No hay productos en el carrito.</p>
                    ) : (
                        cart.length < 2 ? (
                            <p className="mt-4 text-xl text-gray-500">Ya elegiste estos productos: </p>
                        ) : (
                            <p className="mt-4 text-xl text-gray-500">Ya elegiste estos productos:</p>
                        )
                    )}

                    <div className="my-5">
                        {/* ...show productos en carrito */}
                        {cart.map((produ) => (
                            <div key={produ.id} className="mb-2 p-2 max-h-36 bg-slate-200 rounded-lg text-slate-950 flex-col overflow-hidden shadow-md">
                                <div className="flex gap-3 justify-between text-center items-center">
                                    <div className="w-32">
                                        <img className="min-w-unit-24 object-cover rounded-md" src={produ.imag} alt="" />
                                    </div>
                                    <div className="text-md sm:text-xl text-left mb-3">
                                        <h2 className="font-bold"> {produ.name} </h2>
                                    </div>
                                    <div className="">
                                        <small className="sm:visible">Cantidad</small>
                                        <p className="font-bold">{produ.cantidad}</p>
                                    </div>
                                    <div className="hidden md:flex">
                                        <div>
                                            <small className="">Unidad</small>
                                            <p className="font-bold">{produ.precio} €</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <small className="">Subtotal</small>
                                        <p className="font-bold">{produ.precio * produ.cantidad} €</p>
                                    </div>
                                    <div onClick={(e) => deleteCartItem(e, produ.id)} className="mr-6">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="cursor-pointer h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {cart.length === 0 ? (
                        <Button onClick={() => navigate('/productos')} className="cursor-pointer ml-3 py-3 px-4 bg-slate-500 text-slate-50 rounded-full">
                            Seguir comprando
                        </Button>
                    ) : (
                        <>
                            <Grid templateColumns="1fr 1fr" alignItems="center" justifyContent="space-between" className="text-2xl mx-4 mr-8">
                                <Text className="text-slate-950 font-bold">Precio Total:</Text>
                                <Text className="text-slate-950 font-bold">{precioTotal()} R$</Text>
                            </Grid>
                            <VStack spacing={3} alignItems="center">
                                <Button onClick={() => eliminarProducto()} className="cursor-pointer py-3 px-5 bg-slate-500 text-slate-50 rounded-full">
                                    Vaciar Carro
                                </Button>
                            </VStack>
                        </>
                    )}
                </div>
            </div>

            {/* Form-checkout */}
            {cart.length > 0 && (
                <div className="isolate bg-white py-20 overflow-hidden">
                    <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                        <div
                            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                            style={{
                                clipPath:
                                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                        />
                    </div>

                    <div className="mx-auto max-w-3xl">
                        <VStack spacing={5} alignItems="center">
                            <Text fontSize="4xl" fontWeight="bold" color="gray.900">
                                Finalizar el checkout
                            </Text>
                            <Text fontSize="xl" color="gray.500">
                                Confirma tus datos para efectuar tu compra.
                            </Text>
                        </VStack>
                        <Grid gridTemplateColumns={{ base: '1fr', sm: '1fr 1fr' }} alignItems="center" justifyContent="space-between" spacing={3}>
                            <FormControl id="first-name" isRequired>
                                <FormLabel fontSize="sm" fontWeight="semibold" color="gray.900">
                                    Nombre*
                                </FormLabel>
                                <Controller
                                    name="nombre"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} />}
                                />
                            </FormControl>
                            <FormControl id="last-name">
                                <FormLabel fontSize="sm" fontWeight="semibold" color="gray.900">
                                    Apellido (Opcional)
                                </FormLabel>
                                <Controller
                                    name="apellido"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} />}
                                />
                            </FormControl>
                            <FormControl id="email" isRequired>
                                <FormLabel fontSize="sm" fontWeight="semibold" color="gray.900">
                                    Email*
                                </FormLabel>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Input {...field} type="email" />}
                                />
                            </FormControl>
                            <FormControl id="phone-number">
                                <FormLabel fontSize="sm" fontWeight="semibold" color="gray.900">
                                    Teléfono (Opcional)
                                </FormLabel>
                                <Grid templateColumns="auto 1fr" gap={3}>
                                    <Select
                                        w="auto"
                                        color="gray.400"
                                        fontSize="sm"
                                        {...control.getProps('prefijo')}
                                    >
                                        <option>+11</option>
                                        <option>+51</option>
                                        <option>+44</option>
                                    </Select>
                                    <Controller
                                        name="telefono"
                                        control={control}
                                        defaultValue=""
                                        render={({ field }) => <Input {...field} type="tel" />}
                                    />
                                </Grid>
                            </FormControl>
                            <FormControl id="address" isRequired>
                                <FormLabel fontSize="sm" fontWeight="semibold" color="gray.900">
                                    Dirección
                                </FormLabel>
                                <Controller
                                    name="direccion"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <Textarea {...field} rows={2} />}
                                />
                            </FormControl>
                        </Grid>
                        <VStack alignItems="center" spacing={2}>
                            <Switch
                                isChecked={agreed}
                                onChange={() => setAgreed(!agreed)}
                                colorScheme="green"
                                size="lg"
                            >
                                Acepto la política de privacidad.
                            </Switch>
                            <Text fontSize="sm" color="gray.600">
                                Activando aquí, estarás aceptando nuestra{' '}
                                <Text as="span" fontWeight="semibold" color="slate.600">
                                    política de privacidad
                                </Text>
                                .
                            </Text>
                        </VStack>
                        <Button
                            type="submit"
                            onClick={handleSubmit(comprar)}
                            colorScheme="blue"
                            size="lg"
                            fontSize="md"
                            fontWeight="bold"
                        >
                            Checkout
                        </Button>
                        {purchaseId === '' ? <Text></Text> : <Text paddingTop="10" fontSize="lg" lineHeight="8" color="gray.600" textAlign="center">Tu formulario se ha enviado con el ID: {purchaseId}</Text>}
                    </div>
                </div>
            )}
        </>
    );
}

export default Checkout;
