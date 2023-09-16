import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
// import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const App = () => {
  const greeting = "Bienvenido a mi tienda de remeras."
  // const [product, setProduct] = useState([])
  // const getProducts = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products/")
  //   const data = await response.json()
  //   return data
  // }
  // useEffect(() => {
  //   getProducts().then((product) => setProduct(product))
  // }, [])

  return (
    <>
      <BrowserRouter>
        <NavBar />


        <Routes>
          {/* <Route exact path="/ID RUTA DEL COMPONENTE" element={<EL COMPONENTE />} /> */}

          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/ItemDetail" element={<ItemDetailContainer />} />
          
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          {/* <Route path="/category/:id" element={<ItemListContainer />} /> */}



        </Routes>


      </BrowserRouter>


      {/* {
        product.map((p) => {
          return (
            <NombreDelComp/API key={p.id} title={p.title} price={p.price} />
          )
        })
      }

      <NombreDelComp/API /> */}

    </>
  )
}


export default App
