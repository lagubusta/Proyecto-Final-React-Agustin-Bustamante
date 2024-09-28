import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrderHistory from './components/OrderHistory/OrderHistory';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer />}/>
          <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
          <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
          <Route path='/cart' element= {<Cart/>}/>
          <Route path='/checkout' element= {<Checkout/>}/>
          <Route path='/orderhistory' element= {<OrderHistory/>}/>
          <Route path='*' element= {<h1> Not Found </h1>}/>
        </Routes>
      <Footer></Footer>
      </CartProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;