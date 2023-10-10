import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Loader from './Loader';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"; 

const ItemListContainer = () => {
  const { category } = useParams(); 
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      //console.log(category); //para chequear si recibe la categoria correctamente
      const db = getFirestore();
      const itemCollection = collection(db, "productos");
      let productosQuery;

      
      if (category) {
        productosQuery = query(itemCollection, where("category", "==", category));
      } else {
        productosQuery = itemCollection;
      }

      try {
        const snapshot = await getDocs(productosQuery);
        const productosData = snapshot.docs.map((doc) => doc.data());
        setFilteredProductos(productosData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchProductos();
  }, [category]);

  return (
    <>
      {loading ? (
        <Loader />
        ) : (
          <ItemList productos={filteredProductos} />
          
          )}
    </>
  );
}
console.log(ItemList);

export default ItemListContainer;
