import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header id="header">
        <div id="nav-logo-container">
          <h1 id="home-logo">THE 1975</h1>
        </div>
        <nav>
          <a className="nav-link" href="#about">
            ABOUT
          </a>
          <a className="nav-link" href="#music">
            MUSIC
          </a>
          <a className="nav-link" href="#footer">
            SOCIALS
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
