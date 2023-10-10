import { collection, getFirestore, getDoc, snapshot } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import ItemDetail from '.components/ItemDetail'
import { useEffect, useState } from 'react'

const Document = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {

        const db = getFirestore()
        const oneItem = doc(db, "projectreactluigi" `${id}`)
        getDoc(oneItem).then((snapshot) => {
            if (snapshotEqual.exists()) {
                const docs = snapshot.data()
                setProducto(docs)
            }
        })

    }, [])

    return(
        <div>
            <ItemDetail producto={producto} />
            {/* <h1>nombre:{producto.name}</h1>
            <h2>categoria:{producto.category}</h2>
            <h3>${producto.price}</h3> */}
        </div>
    )
}
export default Document