import React from "react";

const CartIcon = ({ cartSize }) => (
  <React.Fragment>
    <span className="fa fa-shopping-cart fa-lg"></span>
    {cartSize > 0 ? (
      <span className="badge badge-warning" id="lblCartCount">
        {cartSize}
      </span>
    ) : null}
  </React.Fragment>
);

export default CartIcon;
