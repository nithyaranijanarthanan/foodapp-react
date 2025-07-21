import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 
import Placeorder from './pages/Placeorder/Placeorder';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact/Contact';
import SignIn from './pages/Signin/SignIn';
import Menu from './pages/Menu/Menu';
import MenuDetail from './pages/Menu/MenuDetail';
import CategoryMenu from './pages/Menu/CategoryMenu';
import Faqs from './pages/Faqs';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Placeorder />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
         <Route path="/menu" element={<Menu />} />
<Route path="/menu/:name" element={<MenuDetail />} />
           <Route path="/menu/:categoryName" element={<CategoryMenu />} />
           <Route path="/faq" element={<Faqs />} />
           <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
