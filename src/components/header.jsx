import React, { Component } from "react";

class Header extends Component {
  state = {};

  left = [
    { name: "Home", url: "#" },
    { name: "Shop", url: "#" },
  ];
  right = [
    { name: "Login", url: "#" },
    { name: "Register", url: "#" },
  ];

  renderLogo = () => {
    return (
      <a className="navbar-brand" href="#">
        <img src="logo.jpg" alt="logo" />
      </a>
    );
  };

  renderToggleButton = () => {
    return (
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
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
            <li className="nav-item active px-2" key={link.name}>
              <a className="nav-link" href={link.url}>
                {link.name}
              </a>
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
