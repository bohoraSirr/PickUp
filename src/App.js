import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Shop} from './pages/Shop'
import { ShopCategory } from './pages/ShopCategory.jsx';
import { LoginSignUp } from './pages/LoginSignUp.jsx'
import Product from './pages/Product.jsx'
import {Cart} from './pages/Cart.jsx'
import Footer from './components/Footer/Footer'
import men_banner from './components/Assets/Frontend_Assets/banner_mens.png'
import women_banner from './components/Assets/Frontend_Assets/banner_women.png'
import kid_banner from './components/Assets/Frontend_Assets/banner_kids.png'

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
