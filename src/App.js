import './App.css';
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartPage from './components/CartPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ProductCard />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
