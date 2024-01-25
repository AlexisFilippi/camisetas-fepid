import React from 'react';

const CartItem = ({ id,  name, price, quantity }) => {
  
  return (
    <div>
      <h3>{name}</h3>
      <p>Cantidad: {quantity}</p>
      <p>Precio: {price}</p>
    
    </div>
  );
};

export default CartItem;