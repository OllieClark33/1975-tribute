import React, { Component } from 'react';

class Cover extends Component {
    render() {
        return (
          <section id="cover">
            <a
              href="https://open.spotify.com/artist/3mIj9lX2MWuHmhNCA7LSCW?autoplay=true"
              id="cover-link"
            >
              <div id="cover-photo-container">
                <div className="cover-overlay">
                  <span id="cover-text">Listen on Spotify&nbsp;</span>
                  <span id="cover-icon">
                    <i className="fab fa-spotify" />
                  </span>
                </div>
                <div id="img-container">
                  <img
                    src="images/cover-photo.png"
                    alt="The 1975"
                    id="cover-photo"
                  />
                </div>
              </div>
            </a>
          </section>
        );
    }
}

export default Cover;