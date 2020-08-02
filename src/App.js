import React, { Component } from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

class App extends Component {
  state = {
    cart: [],
  };

  handleAdd = (plant) => {
    this.setState({ cart: [...this.state.cart, plant] });
  };

  render() {
    const { cart } = this.state;
    return (
      <div className="App">
        <Header cartSize={cart.length} />
        <Body onAdd={this.handleAdd} cartItems={cart} />
        <Footer />
      </div>
    );
  }
}

export default App;
