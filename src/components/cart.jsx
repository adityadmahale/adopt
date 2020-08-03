import React, { Component } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class Cart extends Component {
  state = {
    pageSize: 4,
    pageNumber: 1,
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber });
  };

  render() {
    const { cartItems: allCartItems } = this.props;
    const { pageNumber, pageSize } = this.state;
    const cartSize = allCartItems.length;
    if (cartSize < 1) return <h4>No plants added</h4>;

    const cartItems = paginate(allCartItems, pageSize, pageNumber);

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
        <Pagination
          pageSize={pageSize}
          itemNumbers={cartSize}
          pageNumber={pageNumber}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Cart;
