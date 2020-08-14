import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

class App extends Component {
  state = {
    cart: [],
    user: null,
  };

  componentDidMount() {
    const user = { username: "Aditya", email: "test@gmail.com" };
    this.setState({ user });
  }

  handleAdd = (plant) => {
    this.setState({ cart: [...this.state.cart, plant] });
  };

  handleRemove = (plant) => {
    const cart = this.state.cart.filter((p) => p._id !== plant._id);
    this.setState({ cart });
  };

  render() {
    const { cart, user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <Header cartSize={cart.length} user={user} />
        <Body
          onAdd={this.handleAdd}
          cartItems={cart}
          onRemove={this.handleRemove}
          user={user}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
