import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Footer from "./components/footer";
import Login from "./components/login";
import Register from "./components/register";
import Shop from "./components/shop";
import NotFound from "./components/notFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/shop" component={Shop} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
