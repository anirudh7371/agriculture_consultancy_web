import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StickyNavbar } from './Navbar/Navbar';
import { Footer } from './Footer/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Products from './pages/Products';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <StickyNavbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
