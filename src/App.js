import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/pages/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Product from './components/pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
