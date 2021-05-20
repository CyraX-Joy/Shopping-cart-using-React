import React from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  const { Items } = props;
  return (
    <div className="cart">
      {Items.map((item) => {
        return (<CartItem 
                  item={item} 
                  key={item.id}
                  onIncreaseQuantity={props.onIncreaseQuantity}
                  onDecreaseQuantity={props.onDecreaseQuantity}
                  onDeleteQuantity={props.onDeleteQuantity}
                />);
      })}
    </div>
  );
}

export default Cart;
