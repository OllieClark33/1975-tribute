import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div id="footer-container">
          <div className="top-row-footer">
            <div id="footer-logo-container">
              <a href="#header">
                <span id="footer-logo">THE 1975</span>
              </a>
            </div>
            <div id="socials-container">
              <a
                href="https://www.facebook.com/the1975/"
                className="social-link"
              >
                <i className="fab fa-facebook-square" />
              </a>
              <a href="https://twitter.com/the1975" className="social-link">
                <i className="fab fa-twitter" />
              </a>
              <a
                href="https://www.instagram.com/the1975/"
                className="social-link"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="https://www.youtube.com/user/The1975VEVO"
                className="social-link"
              >
                <i className="fab fa-youtube" />
              </a>
              <a
                href="https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW?autoplay=true"
                className="social-link"
              >
                <i className="fab fa-spotify" />
              </a>
              <a href="http://the1975.com/" className="social-link">
                <i className="fas fa-globe-europe" />
              </a>
            </div>
          </div>
          <div id="footer-nav">
            <a className="footer-link" href="#about">
              ABOUT
            </a>
            <a className="footer-link" href="#music">
              MUSIC
            </a>
            <a className="footer-link" href="#socials">
              SOCIALS
            </a>
          </div>
          <div id="tag-container">
            <span id="tag">by Ollie Clark</span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
