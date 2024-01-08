import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from './components/home/Home';
import { Category } from './components/category/Category';
import { Product } from './components/product/Product';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/category/:id" element={<Category/>}/>
        <Route path="/product/:id" element={<Product/>} />
      </Routes>
    </BrowserRouter>
    
    
    
    
    </>
  );
}

export default App;
