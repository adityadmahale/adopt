import React, { Component } from "react";
import { getCarts } from "../services/cartService";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import { FadeTransform } from "react-animation-components";

class UserDetails extends Component {
  state = {
    carts: [],
    pageSize: 6,
    pageNumber: 1,
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber });
  };

  componentDidMount = async () => {
    const { data: carts } = await getCarts();
    this.setState({ carts });
  };

  renderTable = (carts, cartsSize) => {
    if (cartsSize < 1) return <p>No adoption history</p>;

    return (
      <React.Fragment>
        <h5>Adoption history</h5>
        <table className="table">
          <thead>
            <tr className="row">
              <th className="col-8">Plants</th>
              <th className="col-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((cart) => {
              const d = new Date(cart.dateAdopted);
              return (
                <tr className="row" key={cart._id}>
                  <td className="col-8">{cart.plants.join(", ")}</td>
                  <td className="col-4">{`${d.getDate()}/${
                    d.getMonth() + 1
                  }/${d.getFullYear()}`}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
  };

  render() {
    const { carts: allCarts, pageSize, pageNumber } = this.state;
    const { user } = this.props;
    const cartsSize = allCarts.length;

    const carts = paginate(allCarts, pageSize, pageNumber);

    return user ? (
      <FadeTransform
        in
        duration={300}
        transformProps={{
          exitTransform: "translateY(-20px)",
        }}
      >
        <div className="mx-auto card p-3 cart">
          <h1>{user.username}</h1>
          {this.renderTable(carts, cartsSize)}
          <Pagination
            pageSize={pageSize}
            itemNumbers={cartsSize}
            pageNumber={pageNumber}
            onPageChange={this.handlePageChange}
          />
        </div>
      </FadeTransform>
    ) : null;
  }
}

export default UserDetails;
