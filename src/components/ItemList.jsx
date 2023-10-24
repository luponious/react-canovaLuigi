import Item from './Item'

const ItemList = ( {productos} ) => {
    return (
        <>
            {
                productos.map((prod) => {
                    return (

                        <Item producto={prod} key={prod.id}/>
                        )
                        })
                    } 
        </>
    )
}

export default ItemList