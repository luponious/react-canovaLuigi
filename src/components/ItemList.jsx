import React from 'react'
import Item from './Item'

const ItemList = ({ productos }) => {

    return (
        <div>

            {
                productos.map((p) => {
                    return (
                        <Item
                            id={p.id}
                            name={p.name}
                            description={p.description}
                            category={p.category}
                            price={p.price}
                        />
                    )
                })
            }

        </div>
    )
}

export default ItemList