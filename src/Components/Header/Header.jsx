// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Galerie d'Art</h1>
      <nav>
        <Link to="/">Accueil</Link>
        <Link to="/about">À Propos</Link>
        <Link to="/cart">Panier</Link>
      </nav>
    </header>
  );
};

export default Header;
