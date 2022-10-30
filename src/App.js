import './App.css';
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Container>
              <Routes>
                <Route path='/' element={<ItemListContainer greeting={'PELICULAS'} />} />
                <Route path='/item/:id' element={<ItemDetailContainer />} />
                <Route path='/category/:categoryId' element={<ItemListContainer />} />
                <Route path='/cart' element={<Cart greeting={'CARRITO'}  />} />
                <Route path='/checkout' element={<Checkout greeting={'CheckOut'} />} />
              </Routes>
          </Container>
      </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
