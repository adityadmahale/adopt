import React, { Component } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";

class Cart extends Component {
  state = {
    pageSize: 2,
    pageNumber: 1,
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber });
  };

  renderTable = (cartItems) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Type</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item._id}>
                <td>
                  <div className="border-0">
                    <img
                      src={item.path}
                      alt={item.name}
                      style={{ width: 256, height: 183 }}
                    />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>
                  <span
                    className="fa fa-trash fa-lg text-green align-self-center"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      this.props.onRemove(item);
                      this.setState({ pageNumber: 1 });
                    }}
                  ></span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  render() {
    const { cartItems: allCartItems } = this.props;
    const { pageNumber, pageSize } = this.state;
    const cartSize = allCartItems.length;
    if (cartSize < 1) return <h4>No plants added</h4>;

    const cartItems = paginate(allCartItems, pageSize, pageNumber);

    return (
      <div className="mx-auto card p-3 cart">
        <h4 className="mb-3">
          Cart{" "}
          <span className="badge badge-pill badge-warning">{cartSize}</span>
        </h4>
        {this.renderTable(cartItems)}
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
