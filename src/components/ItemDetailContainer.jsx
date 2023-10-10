import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'; 

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);
    //console.log('ItemDetailContainer rendering');

    useEffect(() => {
        const fetchProducto = async () => {
            const db = getFirestore();
            const itemDocRef = doc(db, 'productos', id); 

            try {
                const itemSnapshot = await getDoc(itemDocRef);

                if (itemSnapshot.exists()) {
                    const itemData = itemSnapshot.data();
                    setProducto(itemData);
                } else {
                    console.log('Item not found');
                }
            } catch (error) {
                console.error('Error fetching item data:', error);
            }

            setLoading(false);
        };

        fetchProducto();
    }, [id]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <ItemDetail producto={producto} />
            )}
        </>
    );
};

export default ItemDetailContainer;
