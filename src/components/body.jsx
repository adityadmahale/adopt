import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import Shop from "./shop";
import NotFound from "./notFound";

class Body extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/shop" component={Shop} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default Body;
