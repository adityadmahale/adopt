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
    const { cartItems, onAdd, onRemove } = this.props;

    return (
      <section>
        <main className="container pt-4">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/cart"
              render={(props) => <Cart {...props} cartItems={cartItems} />}
            />
            <Route
              path="/shop"
              render={(props) => (
                <Shop
                  {...props}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  cartItems={cartItems}
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
