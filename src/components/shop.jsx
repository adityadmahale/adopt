import React, { Component } from "react";
import Filter from "./filter";
import Search from "./search";

class Shop extends Component {
  state = {
    category: null,
    searchString: "",
  };

  handleSelect = (category) => {
    this.setState({ category });
  };

  handleSearch = (searchString) => {
    this.setState({ searchString });
  };

  render() {
    const { category, searchString } = this.state;

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-7">
            <Filter onSelect={this.handleSelect} selected={category} />
          </div>
          <div className="col col-md-5">
            <Search onSearch={this.handleSearch} value={searchString} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shop;
