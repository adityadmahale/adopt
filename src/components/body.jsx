import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Shop from "./shop";
import NotFound from "./notFound";
import Cart from "./cart";
import Logout from "./logout";
import UserDetails from "./userDetails";
import ProtectedRoute from "./commons/protectedRoute";

class Body extends Component {
  state = {};
  render() {
    const { cartItems, onAdd, onRemove, user, onEmpty } = this.props;

    return (
      <section>
        <main className="container pt-4">
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              path="/shop"
              render={(props) => (
                <Shop
                  {...props}
                  onAdd={onAdd}
                  cartItems={cartItems}
                  user={user}
                />
              )}
            />
            <Route
              path="/login"
              render={(props) => <Login {...props} user={user} />}
            />
            <Route
              path="/register"
              render={(props) => <Register {...props} user={user} />}
            />
            <ProtectedRoute
              user={user}
              path="/cart"
              render={(props) => (
                <Cart
                  {...props}
                  cartItems={cartItems}
                  onRemove={onRemove}
                  onEmpty={onEmpty}
                />
              )}
            />
            <ProtectedRoute path="/logout" component={Logout} user={user} />
            <ProtectedRoute
              user={user}
              path="/user"
              render={(props) => <UserDetails {...props} user={user} />}
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
