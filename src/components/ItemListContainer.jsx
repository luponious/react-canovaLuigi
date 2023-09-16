import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { category } = useParams(); 
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const productos = [
    { id: 1, name: "Remera A", description: "Soy una Remera primaveral", price: 1000, category: "Primavera" },
    { id: 2, name: "Remera B", description: "Remera de veraneo", price: 1500, category: "Verano" },
    { id: 3, name: "Remera C", description: "Remera de entrecasa u otoñal?", price: 2000, category: "Otono" },
    { id: 4, name: "Remera D", description: "Remera para los días fríos...", price: 2500, category: "Invierno" },
    { id: 5, name: "Remera D2", description: "Otra Remera para los días fríos completamente diferente de la outra para dias frios...", price: 2500, category: "Invierno" },
  ];

  useEffect(() => {
    setTimeout(() => {
      const filteredProducts = category
        ? productos.filter(producto => producto.category === category)
        : productos;

      setFilteredProductos(filteredProducts);
      setLoading(false);
    }, 1000); 
  }, [category]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList productos={filteredProductos} />
      )}
    </>
  );
}

export default ItemListContainer;
