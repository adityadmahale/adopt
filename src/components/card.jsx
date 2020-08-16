import React, { Component } from "react";
import { toast } from "react-toastify";

class Card extends Component {
  renderButton = () => {
    const { item, onAdd, cartItems, user, adopted } = this.props;

    if (adopted)
      return (
        <div className="text-green align-self-center">
          <span className="fa fa-check-circle-o fa-lg"></span> Adopted
        </div>
      );

    const found = cartItems.find((plant) => plant._id === item._id);

    return (
      <button
        className="btn item-selected px-4"
        onClick={() => {
          if (!user) {
            this.props.history.push({
              pathname: "/login",
              state: { path: "/shop" },
            });
            toast.warn("Log in before adding to cart");
            return;
          }

          onAdd(item);
        }}
        disabled={found}
      >
        {found ? "Added" : "Add"}
      </button>
    );
  };

  render() {
    const { name, path } = this.props.item;
    return (
      <div className="card mt-3">
        <img className="card-img-top" src={path} alt="Houseplant" />
        <div className="card-body pt-1">
          <h4 className="card-title">{name}</h4>
          <div className="row">
            <div className="col-6 align-self-center">
              <p className="card-text py-2">
                <span
                  className="fa fa-info-circle fa-lg text-green"
                  style={{ cursor: "pointer" }}
                  aria-hidden="true"
                  onClick={() => this.props.onClick()}
                ></span>
              </p>
            </div>
            <div className="col-6 d-flex justify-content-center">
              {this.renderButton()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
