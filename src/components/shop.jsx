import React, { Component } from "react";
import Filter from "./filter";
import Search from "./search";
import Pagination from "./pagination";
import Card from "./card";
import plantsList from "../services/shopService";
import categories from "../services/categoryService";
import { paginate } from "../utils/paginate";

class Shop extends Component {
  state = {
    category: "All",
    searchString: "",
    pageNumber: 1,
    pageSize: 6,
    plants: [],
    categories: [],
  };

  componentDidMount() {
    this.setState({ plants: plantsList });
    this.setState({ categories: [{ _id: 0, name: "All" }, ...categories] });
  }

  handleSelect = (category) => {
    this.setState({ category, pageNumber: 1, searchString: "" });
  };

  handleSearch = (searchString) => {
    this.setState({ searchString, pageNumber: 1 });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber });
  };

  getPagedData = () => {
    const {
      category,
      searchString,
      pageNumber,
      pageSize,
      plants: allPlants,
    } = this.state;

    const filtered =
      category !== "All"
        ? allPlants.filter((plant) => plant.category === category)
        : allPlants;
    const searched = filtered.filter((plant) =>
      plant.name.toLowerCase().startsWith(searchString.toLowerCase())
    );
    return {
      filteredPlants: paginate(searched, pageSize, pageNumber),
      itemLength: searched.length,
    };
  };

  render() {
    const {
      categories: allCategories,
      category,
      searchString,
      pageNumber,
      pageSize,
    } = this.state;

    const { filteredPlants, itemLength } = this.getPagedData();

    return (
      <React.Fragment>
        <div className="row">
          <div className="col-12 col-md-7">
            <Filter
              onSelect={this.handleSelect}
              selected={category}
              items={allCategories}
            />
          </div>
          <div className="col col-md-5">
            <Search onSearch={this.handleSearch} value={searchString} />
          </div>
        </div>

        <div className="row">
          {filteredPlants.map((plant) => (
            <div className="col-12 col-md-4" key={plant._id}>
              <Card
                item={plant}
                onAdd={this.props.onAdd}
                cartItems={this.props.cartItems}
              />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <Pagination
              pageSize={pageSize}
              itemNumbers={itemLength}
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
