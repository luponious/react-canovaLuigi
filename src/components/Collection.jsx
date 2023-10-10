import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { Image, Box } from '@chakra-ui/react';

const Collection = () => {
    const [producto, setProducto] = useState([]);
    const { id } = useParams(); // Get the id from the URL

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, 'productos');
        const oneItem = doc(db, 'projectreactluigi', `${id}`); // Fix the missing comma here

        getDocs(itemCollection).then((snapshot) => {
            const docs = snapshot.docs.map((doc) => doc.data());
            setProducto(docs);
        });
    }, [id]); // Add id as a dependency to re-run the effect when it changes

    return (
        <div>
            {producto.map((p) => (
                <div key={p.id}>
                    <Box boxSize='sm'>
                        <Image src={p.imag} alt={p.description} />
                    </Box>
                    <h3>nombre: {p.name}</h3>
                    <h4>$ {p.price}</h4>
                    <h5>Description: {p.description}</h5>
                    <h2>categoria: {p.category}</h2>
                </div>
            ))}
        </div>
    );
};

export default Collection;
