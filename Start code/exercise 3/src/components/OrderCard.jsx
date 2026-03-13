import React from "react";

export default function OrderCard({
  product,
  price,
  quantity,
  onIncrement,
  onDecrement,
}) {
  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>$ {price}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          onClick={onDecrement}
          style={{ backgroundColor: quantity === 0 ? "#bfbfbf" : "" }}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={onIncrement}>
          +
        </div>
      </div>
    </div>
  );
}
