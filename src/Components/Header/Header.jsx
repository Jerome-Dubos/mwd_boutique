// src/components/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Images/Logo.png';
import './Header.css';
import { useCart } from '../../context/CartContext'; // Importer le contexte du panier

function Header() {
  const { cartItems } = useCart(); // Obtenir les articles dans le panier

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Logo MWD Boutique" />
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" activeclassname="active">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">
                À Propos
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="cart-link" activeclassname="active">
                Panier
                {cartItems.length > 0 && (
                  <span className="cart-badge">{cartItems.length}</span> // Badge pour indiquer le nombre d'articles
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
