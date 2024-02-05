import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Contacto from './components/Contact/Contact';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          < NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>


  );
}

export default App;
