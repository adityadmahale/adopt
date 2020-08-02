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
    return (
      <div className="App">
        <Header />
        <Body onAdd={this.handleAdd} cartItems={this.state.cart} />
        <Footer />
      </div>
    );
  }
}

export default App;
