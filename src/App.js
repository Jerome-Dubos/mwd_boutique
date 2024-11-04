import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import NotFound from './Pages/NotFound/NotFound.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Cart from './Components/Cart/Cart.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
        <Link to="/cart">Panier</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;