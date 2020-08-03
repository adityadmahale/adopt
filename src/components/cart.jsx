import React from "react";

const Cart = ({ cartItems }) => {
  if (cartItems.length < 1) return <h4>No plants added</h4>;

  return (
    <div className="mx-auto card p-3 cart">
      <h4>Cart</h4>
      {cartItems.map((item) => {
        return (
          <div className="card flex-row flex-wrap mb-2" key={item._id}>
            <div className="card-header border-0 w-25">
              <img src={item.path} alt={item.name} className="w-100" />
            </div>
            <div className="card-block px-2">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.category}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
