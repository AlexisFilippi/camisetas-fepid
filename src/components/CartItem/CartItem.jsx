import React from 'react';
import './CartItem.css'

const CartItem = ({ id,  name, price, quantity }) => {
  const subTotal = price * quantity
  return (
    <div className='ContainerCart'>
      <h3>{name}</h3>
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${price}</p>
      <p>SubTotal: ${subTotal}</p>
    
    </div>
  );
};

export default CartItem;