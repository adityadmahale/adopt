import React, { Component } from "react";
import Filter from "./filter";
import Search from "./search";
import Pagination from "./pagination";
import Card from "./card";
import { getPlants } from "../services/shopService";
import { getCategories } from "../services/categoryService";
import { getCarts } from "../services/cartService";
import { paginate } from "../utils/paginate";
import { Fade } from "react-animation-components";
import "../sidenav.css";

class Shop extends Component {
  state = {
    categoryId: "0",
    searchString: "",
    pageNumber: 1,
    pageSize: 6,
    plants: [],
    categories: [],
    adoptedPlants: [],
    selectedPlant: null,
  };

  componentDidMount = async () => {
    const { data: categories } = await getCategories();
    const { data: plants } = await getPlants();

    let adoptedPlants = [];
    if (this.props.user) {
      const { data: carts } = await getCarts();
      for (const cart of carts) {
        adoptedPlants = adoptedPlants.concat(cart.plants);
      }
    }

    this.setState({
      categories: [{ _id: "0", name: "All" }, ...categories],
      plants,
      adoptedPlants,
    });
  };

  handleSelect = (categoryId) => {
    this.setState({ categoryId, pageNumber: 1, searchString: "" });
  };

  handleSearch = (searchString) => {
    this.setState({ searchString, pageNumber: 1, categoryId: "0" });
  };

  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber });
  };

  getPagedData = () => {
    const {
      categoryId,
      searchString,
      pageNumber,
      pageSize,
      plants: allPlants,
    } = this.state;

    const filtered =
      categoryId !== "0"
        ? allPlants.filter((plant) => plant.category._id === categoryId)
        : allPlants;
    const searched = filtered.filter((plant) =>
      plant.name.toLowerCase().startsWith(searchString.toLowerCase())
    );
    return {
      filteredPlants: paginate(searched, pageSize, pageNumber),
      itemLength: searched.length,
    };
  };

  navRef = React.createRef();

  openNav = () => {
    this.navRef.current.style.width = "100%";
  };

  closeNav = () => {
    this.navRef.current.style.width = "0";
  };

  renderSideNav = () => {
    const { selectedPlant } = this.state;
    return (
      <div ref={this.navRef} className="sidenav">
        <div className="sidenav-content">
          <span
            className="fa fa-times closebtn"
            onClick={() => this.closeNav()}
          ></span>
          {selectedPlant && (
            <React.Fragment>
              <h3 className="p-3">{selectedPlant.name}</h3>
              <div className="px-5 py-3">
                <img
                  className="rounded d-block mx-auto"
                  src={selectedPlant.path}
                  alt={selectedPlant.name}
                />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  };

  render() {
    const {
      categories: allCategories,
      categoryId,
      searchString,
      pageNumber,
      pageSize,
    } = this.state;
    const { onAdd, cartItems, user } = this.props;
    const { filteredPlants, itemLength } = this.getPagedData();

    return (
      <React.Fragment>
        {this.renderSideNav()}
        <div className="row">
          <div className="col-12 col-md-7">
            <Filter
              onSelect={this.handleSelect}
              selected={categoryId}
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
              <Fade in duration={200}>
                <Card
                  {...this.props}
                  item={plant}
                  onAdd={onAdd}
                  cartItems={cartItems}
                  user={user}
                  adopted={this.state.adoptedPlants.some(
                    (p) => p === plant.name
                  )}
                  onClick={() => {
                    this.setState({ selectedPlant: { ...plant } });
                    this.openNav();
                  }}
                />
              </Fade>
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
