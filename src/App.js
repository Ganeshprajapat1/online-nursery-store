import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Cartt from './Pages/Cartt';
import Checkout from './components/Checkout/Checkout';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/product';
import Cartitems from './components/Cartitems/Cartitems';
import Loginsignup from './Pages/Loginsignup';
import CameraComponent from './components/Custom/Customize';
import Login from './Pages/Login'; 

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Place the CameraComponent route here */}
          <Route path="/customize" element={<CameraComponent />} />

          {/* Other routes */}
          <Route path="/" element={<Shop />} />
          <Route path="/plants" element={<ShopCategory category="plant" />} />
          <Route path="/soils" element={<ShopCategory category="soil" />} />
          <Route path="/gardens" element={<ShopCategory category="garden" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cartt />} />
          <Route path="/cart" element={<Cartitems />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Loginsignup" element={<Loginsignup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
