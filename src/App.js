import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Shop} from './pages/Shop'
import { ShopCategory } from './pages/ShopCategory.jsx';
import { LoginSignUp } from './pages/LoginSignUp.jsx'
import {Product} from './pages/Product.jsx'
import {Cart} from './pages/Cart.jsx'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/product' element={<Product/>}/>
          <Route path=':productId' element={<Product/>}/> 
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
