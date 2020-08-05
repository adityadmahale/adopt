import React, { Component } from "react";

class Card extends Component {
  renderButton = () => {
    const { item, onAdd, cartItems, user } = this.props;

    // const found = cartItems.find((plant) => plant._id === item._id);
    // if (found)
    //   return (
    //     <span className="fa fa-check-circle-o fa-lg text-green align-self-center"></span>
    //   );

    const found = cartItems.find((plant) => plant._id === item._id);
    if (found)
      return (
        <span className="fa fa-check fa-lg text-green align-self-center"></span>
      );

    return (
      <button
        className="btn item-selected px-4"
        onClick={() => {
          if (!user) return this.props.history.push("/login");
          onAdd(item);
        }}
      >
        Add
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
