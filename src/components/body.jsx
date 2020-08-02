import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Shop from "./shop";
import NotFound from "./notFound";
import Cart from "./cart";

class Body extends Component {
  state = {};
  render() {
    return (
      <section>
        <main className="container pt-4">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/cart"
              render={(props) => (
                <Cart {...props} cartItems={this.props.cartItems} />
              )}
            />
            <Route
              path="/shop"
              render={(props) => (
                <Shop
                  {...props}
                  onAdd={this.props.onAdd}
                  cartItems={this.props.cartItems}
                />
              )}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </section>
    );
  }
}

export default Body;
