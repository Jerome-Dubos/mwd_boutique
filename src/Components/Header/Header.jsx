// src/components/Header.js
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Images/Logo.png'
import './Header.css'

function Header() {
  return (
    <nav>
      <div>
        <img src={logo} alt="Logo MWD Boutique" />
      </div>
      <ul>
        <NavLink to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/about" activeclassname="active">
          A Propos
        </NavLink>
        <NavLink to="/cart" activeclassname="active">
          Panier
        </NavLink>
      </ul>
    </nav>
  )
}

export default Header
