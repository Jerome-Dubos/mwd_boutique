// src/components/PaintingList.js
import React from 'react';
import { useCart } from '../../context/CartContext';

const paintings = [
  { id: 1, title: 'Tableau 1', price: 100 },
  { id: 2, title: 'Tableau 2', price: 150 },
  // Ajoutez d'autres tableaux ici
];

const PaintingList = () => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Nos Tableaux</h2>
      <ul>
        {paintings.map((painting) => (
          <li key={painting.id}>
            <div>
              <h3>{painting.title}</h3>
              <p>Prix: ${painting.price}</p>
              <button onClick={() => addToCart(painting)}>Ajouter au panier</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaintingList;
