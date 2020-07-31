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
    this.setState({ categories: [{ id: 0, name: "All" }, ...categories] });
  }

  handleSelect = (category) => {
    this.setState({ category, pageNumber: 1 });
  };

  handleSearch = (searchString) => {
    this.setState({ searchString, pageNumber: 1 });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber });
  };

  render() {
    const {
      categories: allCategories,
      category,
      searchString,
      pageNumber,
      pageSize,
      plants: allPlants,
    } = this.state;

    const plants = paginate(allPlants, pageSize, pageNumber);

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
          {plants.map((plant) => (
            <div className="col-12 col-md-4" key={plant.id}>
              <Card
                title={plant.name}
                description={plant.category}
                imagePath={plant.path}
              />
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-12">
            <Pagination
              pageSize={pageSize}
              itemNumbers={allPlants.length}
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
