import './Cart.css'
import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div>
      <h2>Panier</h2>
      {cartItems.length === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Retirer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
