import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = () => {
  const productos = [
    {id: 1, name: "Remera A", description: "Soy una Remera primaveral", price: 1000, category:"Primavera"},
    {id: 2, name: "Remera B", description: "Remera de veraneo", price: 1500, category:"Verano"},
    {id: 3, name: "Remera C", description: "Remera de entrecasa u otoñal?", price: 2000, category:"Otono"},
    {id: 4, name: "Remera D", description: "Remera para los dias frios...", price: 2500, category:"Invierno"},
  ]

  const mostrarProductos = new Promise((resolve, reject) =>{
    if (productos.length > 0) { 
      setTimeout(() => {
        resolve(productos)
      }, 5000)//control del tiempo del simulador de respuesta
    } else {
      reject("No se pudo mostrar los productos")
    }
  })

  mostrarProductos
    .then((resultado) => {
      console.log(resultado)
    })

    .catch((error) => {
      console.log(error)
    })


  return (
<>
    <ItemList productos={productos}/>
</>
  )
}

export default ItemListContainer