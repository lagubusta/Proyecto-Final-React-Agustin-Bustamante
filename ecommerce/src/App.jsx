import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element= {<ItemListContainer />}/>
          <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
          <Route path='/item/:itemId' element= {<ItemDetailContainer/>}/>
          <Route path='*' element= {<h1> Not Found </h1>}/>
        </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </main>
  );
}

export default App;
