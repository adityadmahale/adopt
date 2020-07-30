import React, { Component } from "react";
import Filter from "./filter";

class Shop extends Component {
  state = {
    type: null,
  };

  handleSelect = (type) => {
    this.setState({ type });
  };

  render() {
    return <Filter onSelect={this.handleSelect} selected={this.state.type} />;
  }
}

export default Shop;
