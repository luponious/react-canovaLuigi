import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulando el fetching con delay
        setTimeout(() => {
            const fetchedProductos = [
                { id: 1, name: "Remera A", description: "Soy una Remera primaveral", price: 1000, category: "Primavera" },
                { id: 2, name: "Remera B", description: "Remera de veraneo", price: 1500, category: "Verano" },
                { id: 3, name: "Remera C", description: "Remera de entrecasa u otoñal?", price: 2000, category: "Otono" },
                { id: 4, name: "Remera D", description: "Remera para los días fríos...", price: 2500, category: "Invierno" },
            ];
            
            setProductos(fetchedProductos);
            setLoading(false);
        }, 2000); // control del delay
    }, []);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                productos.map((product) => (
                    <ItemDetail key={product.id} producto={product} />
                ))
            )}
        </>
    );
}

export default ItemDetailContainer;
