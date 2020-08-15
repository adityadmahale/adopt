import React, { Component } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import { postCart } from "../services/cartService";
import { toast } from "react-toastify";

class Cart extends Component {
  state = {
    pageSize: 2,
    pageNumber: 1,
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber });
  };

  handleSubmit = async () => {
    try {
      const plants = this.props.cartItems.map((plant) => plant.name);
      await postCart(plants);
      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        toast.error("Something went wrong");
      }
    }
  };

  renderTable = (cartItems) => {
    return (
      <table className="table">
        <thead>
          <tr>
            <th className="d-none d-xl-block border-0"></th>
            <th className="border-0">Name</th>
            <th className="border-0">Type</th>
            <th className="border-0" />
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item._id}>
                <td className="d-none d-xl-block">
                  <div className="border-0">
                    <img
                      className="rounded"
                      src={item.path}
                      alt={item.name}
                      style={{ width: 256, height: 183 }}
                    />
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.category.name}</td>
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
        <div className="row">
          <div className="col-8">
            <h4>
              Cart{" "}
              <span className="badge badge-pill badge-warning">{cartSize}</span>
            </h4>
          </div>
          <div className="col-4">
            <button
              className="btn item-selected px-4 float-right"
              onClick={this.handleSubmit}
            >
              Adopt
            </button>
          </div>
        </div>
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
