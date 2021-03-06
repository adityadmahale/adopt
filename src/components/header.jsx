import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import CartIcon from "./cartIcon";

class Header extends Component {
  state = {
    width: 0,
  };

  collapseButtonRef = React.createRef();

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  renderLogo = () => {
    return (
      <Link className="navbar-brand" to="/">
        <img src="logo.jpg" alt="logo" />
      </Link>
    );
  };

  renderToggleButton = () => {
    return (
      <button
        className="navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        ref={this.collapseButtonRef}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    );
  };

  renderNavList = (links, right) => {
    const { width } = this.state;
    const classes = right ? "navbar-nav ml-auto" : "navbar-nav";
    return (
      <ul className={classes}>
        {links.map((link) => {
          if (width < 992 && link.name === "Cart") return null;
          return (
            <li className="nav-item px-2" key={link.name}>
              <NavLink
                className="nav-link"
                to={link.path}
                onClick={() => {
                  if (width < 992) this.collapseButtonRef.current.click();
                }}
              >
                {link.content ? link.content : link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  };

  renderCartIcon = () => {
    const { width } = this.state;
    if (width > 991 || !this.props.user) return null;

    return (
      <Link className="nav-link ml-auto" to="/cart">
        <CartIcon cartSize={this.props.cartSize} />
      </Link>
    );
  };

  generateNavLinks = () => {
    const { user, cartSize } = this.props;
    const left = [
      { name: "Home", path: "/home" },
      { name: "Shop", path: "/shop" },
    ];
    let right = null;
    if (user)
      right = [
        {
          name: "Cart",
          path: "/cart",
          content: <CartIcon cartSize={cartSize} />,
        },
        {
          name: "Logout",
          path: "/logout",
          content: (
            <React.Fragment>
              <span className="fa fa-sign-out fa-lg"></span> Logout
            </React.Fragment>
          ),
        },
        {
          name: user.username,
          path: "/user",
          content: (
            <React.Fragment>
              <span className="fa fa-user fa-lg"></span> {user.username}
            </React.Fragment>
          ),
        },
      ];
    else
      right = [
        {
          name: "Login",
          path: "/login",
          content: (
            <React.Fragment>
              <span className="fa fa-sign-in fa-lg"></span> Login
            </React.Fragment>
          ),
        },
        {
          name: "Register",
          path: "/register",
          content: (
            <React.Fragment>
              <span className="fa fa-user-plus fa-lg"></span> Register
            </React.Fragment>
          ),
        },
      ];
    return { left, right };
  };

  render() {
    const { left, right } = this.generateNavLinks();
    return (
      <nav className="navbar navbar-expand-lg text-light">
        {this.renderLogo()}
        {this.renderCartIcon()}
        {this.renderToggleButton()}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {this.renderNavList(left)}
          {this.renderNavList(right, true)}
        </div>
      </nav>
    );
  }
}

export default Header;
