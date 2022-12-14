import CartItem from "../CartItem/CartItem";

import { Wrapper } from "./Cart.styles";
import { CardItemType } from "../App";
import React from "react";
type Props = {
  cartItems: CardItemType[];
  addToCart: (clickedItem: CardItemType) => void;
  removeFromCart: (id: number) => void;
};
const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CardItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No Items in Cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total:${calculateTotal(cartItems).toFixed(0)}</h2>
    </Wrapper>
  );
};
export default Cart;
