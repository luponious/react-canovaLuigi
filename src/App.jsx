import Carrito from './components/Cart/Cart'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './components/Cart/Checkout'
import ShoppingCartContext from './context/ShopingCartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ShoppingCartContext>
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route exact path='/carrito' element={<Carrito />} />
          <Route exact path='/checkout' element={<Checkout />} />
          <Route exact path='/productos' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />

        </Routes>
      </BrowserRouter>
    </ShoppingCartContext>
  );
}

export default App;
