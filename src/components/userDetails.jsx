import React, { Component } from "react";
import { getCarts } from "../services/cartService";

class UserDetails extends Component {
  state = {
    carts: [],
  };

  componentDidMount = async () => {
    const { data: carts } = await getCarts();
    this.setState({ carts });
  };

  renderTable = () => {
    return (
      <table className="table">
        <thead>
          <tr className="row">
            <th className="col-8">Plants</th>
            <th className="col-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {this.state.carts.map((cart) => {
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
    );
  };

  render() {
    const { user } = this.props;
    return user ? (
      <div className="mx-auto card p-3 cart">
        <h1>{user.username}</h1>
        <h5>Adoption history</h5>
        {this.renderTable()}
      </div>
    ) : null;
  }
}

export default UserDetails;
