import React, { useEffect, useState } from 'react';
import { Commerce } from 'commercejs';
import '../styles/Carrinho.css';

const commerce = new Commerce(process.env.REACT_APP_PUBLIC_KEY);

function Carrinho() {
  const [cart, setCart] = useState({});

  useEffect(() => {
    commerce.cart.retrieve().then(setCart);
  }, []);

  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart.update(lineItemId, { quantity }).then(setCart);
  };

  const handleRemoveCartItem = (lineItemId) => {
    commerce.cart.remove(lineItemId).then(setCart);
  };

  return (
    <div>
      {cart.line_items && (
        <ul>
          {cart.line_items.map((item) => (
            <li key={item.id}>
              <div>{item.product.name}</div>
              <div>{item.quantity}</div>
              <button onClick={() => handleUpdateCartQty(item.id, item.quantity - 1)}>-</button>
              <button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => handleRemoveCartItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <div>
        Total: ${cart.total_price}
      </div>
    </div>
  );
}

export default Carrinho;