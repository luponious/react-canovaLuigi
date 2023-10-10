import { useState, useEffect } from 'react';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import Item from './Item';

const ItemList = ({ category, id }) => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, 'productos');
    let queryRef;
    
    if (category) {
      // Filter por category
      queryRef = query(itemCollection, where('category', '==', category));
    } else if (id) {
      // Fetch 1 item por ID
      queryRef = query(itemCollection, where('id', '==', id));
    } else {
      // (no filter)
      queryRef = itemCollection;
    }

    getDocs(queryRef)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        setProducto(docs);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [category, id]);

  return (
    <>
      <div>
        {producto.map((p) => (
          <Item
            key={p.id}
            id={p.id}
            imag={p.imag}
            name={p.name}
            description={p.description}
            category={p.category}
            price={p.price}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
