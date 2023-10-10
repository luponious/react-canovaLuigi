import { collection, getFirestore, addDoc } from 'firebase/firestore'
import { useState } from 'react'

const SendOrder = () => {
    const [orderId, setOrderId] = useState(null)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const db = getFirestore()
    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(orderCollection, order).then(({ id }) =>
            setOrderId(id))
    }

    const order = {
        buyer: {
            name, email
        },

        items: Cart.map(({ id, name, price }) => ({
            id, name, price
        }))
    }

    const orderCollection = collection(db, "orden")

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre y apellido'
                    onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Confirmar</button>
            </form>
            Order ID:{orderId}
        </div>
    )
}

export default SendOrder