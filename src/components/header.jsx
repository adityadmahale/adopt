import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

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

  left = [
    { name: "Home", path: "/home" },
    { name: "Shop", path: "/shop" },
  ];
  right = [
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" },
  ];

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
    const classes = right ? "navbar-nav ml-auto" : "navbar-nav";
    return (
      <ul className={classes}>
        {links.map((link) => {
          return (
            <li className="nav-item px-2" key={link.name}>
              <NavLink
                className="nav-link"
                to={link.path}
                onClick={() => {
                  if (this.state.width < 992)
                    this.collapseButtonRef.current.click();
                }}
              >
                {link.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    );
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg text-light">
        {this.renderLogo()}
        {this.renderToggleButton()}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {this.renderNavList(this.left)}
          {this.renderNavList(this.right, true)}
        </div>
      </nav>
    );
  }
}

export default Header;
