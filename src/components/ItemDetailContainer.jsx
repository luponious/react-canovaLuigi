import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            const fetchedProductos = [
                { id: 1, name: "Remera A", description: "Soy una Remera primaveral", price: 1000, category: "Primavera" },
                { id: 2, name: "Remera B", description: "Remera de veraneo", price: 1500, category: "Verano" },
                { id: 3, name: "Remera C", description: "Remera de entrecasa u otoñal?", price: 2000, category: "Otono" },
                { id: 4, name: "Remera D", description: "Remera para los días fríos...", price: 2500, category: "Invierno" },
                { id: 5, name: "Remera D2", description: "Otra Remera para los días fríos completamente diferente de la outra para dias frios...", price: 2500, category: "Invierno" },
            ];

            // para la url "itemdetail"mostrar todo el array
            if (id === 'itemdetail') {
                setProductos(fetchedProductos);
            } else {
                // filtro por id
                const product = fetchedProductos.find(producto => producto.id === parseInt(id));

                if (product) {
                    setProductos([product]);
                } else {
                    setProductos([]);
                }
            }

            setLoading(false);
        }, 2000); 
    }, [id]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : productos.length > 0 ? (
                productos.map(product => (
                    <ItemDetail key={product.id} producto={product} />
                ))
            ) : (
                <p>No product found</p>
            )}
        </>
    );
}

export default ItemDetailContainer;
