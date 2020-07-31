import React, { Component } from "react";
import Filter from "./filter";
import Search from "./search";
import Pagination from "./pagination";

class Shop extends Component {
  state = {
    category: "All",
    searchString: "",
    pageNumber: null,
  };

  handleSelect = (category) => {
    this.setState({ category });
  };

  handleSearch = (searchString) => {
    this.setState({ searchString });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber });
  };

  render() {
    const { category, searchString, pageNumber } = this.state;

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
        <div className="row">
          <div className="col-12">
            <Pagination
              pageSize={6}
              itemNumbers={14}
              pageNumber={pageNumber}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Shop;
