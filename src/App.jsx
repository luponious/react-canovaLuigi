import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
// import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"

//import ShoppingCartContext from "./context/ShopingCartContext";
//import ComponentA from "./components/ComponentA";

export const App = () => {

  return (
         <>
           <BrowserRouter>
             <NavBar />


             <Routes>
               <Route exact path="/" element={<ItemListContainer />} />
               <Route exact path="/cart" element={<Cart />} />
     {/* RUTAS CON FILTRO */}
               <Route path="/item/:id" element={<ItemDetailContainer />} />
               <Route path="/categoria/:category" element={<ItemListContainer />} />
             </Routes>
           </BrowserRouter>
         </>

 /*   <>
      <ShoppingCartContext>
        <ComponentA />
      </ShoppingCartContext>
    </>*/
  )
}


export default App
