// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

// Hook personnalisé pour accéder au contexte plus facilement
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    // État pour stocker les articles du panier
    const [cartItems, setCartItems] = useState([]);

    // Fonction pour ajouter un article au panier
    const addToCart = (painting) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === painting.id);
            if (existingItem) {
                // Si l'article existe, on augmente sa quantité
                return prevItems.map(item =>
                    item.id === painting.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Si l'article n'existe pas encore, on l'ajoute avec une quantité initiale de 1
                return [...prevItems, { ...painting, quantity: 1 }];
            }
        });
    };

    // Fonction pour retirer un article du panier
    const removeFromCart = (paintingId) => {
        setCartItems((prevItems) =>
            prevItems.filter(item => item.id !== paintingId)
        );
    };

    // Fonction pour vider le panier
    const clearCart = () => {
        setCartItems([]);
    };

    // Calcul du nombre total d'articles dans le panier
    const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, itemCount }}>
            {children}
        </CartContext.Provider>
    );
};
