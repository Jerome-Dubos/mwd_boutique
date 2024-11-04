// src/components/PaintingList.js
import React from 'react';
import { useCart } from '../../context/CartContext';
import paintingsData from '../../data/Artworks.json'; // Assurez-vous que ce chemin est correct
import './PaintingList.css';

const PaintingList = () => {
  const { addToCart } = useCart(); // Récupération de la fonction addToCart du contexte

  // Filtrer les œuvres disponibles
  const availablePaintings = paintingsData.filter(painting => painting.available);

  return (
      <div className="painting-list">
          {availablePaintings.map((painting) => (
              <div key={painting.id} className="painting-item">
                  <img src={painting.imageUrl} alt={painting.title} className="painting-image" />
                  <h3 className="painting-title">{painting.title}</h3>
                  <p className="painting-artist">Artiste : {painting.artist}</p>
                  <p className="painting-price">Prix : {painting.price}€</p>
                  <button className="add-to-cart" onClick={() => addToCart(painting)}>
                      Ajouter au panier
                  </button>
              </div>
          ))}
      </div>
  );
};

export default PaintingList;
