import React, { Component } from "react";

class Music extends Component {
  render() {
    return (
      <section id="music">
        <h2 id="music-title">Music</h2>
        <div id="music-container">
          <div className="music-tile-row">
            <div className="row">
              <div className="music-img">
                <img
                  src="images/first-album.png"
                  alt="The 1975"
                  className="album-cover"
                />
                <div className="overlay">
                  <h3 className="overlay-title">The 1975</h3>
                  <p className="overlay-text">Released: September 2013</p>
                </div>
              </div>
              <div className="music-img">
                <img
                  src="images/second-album.png"
                  alt="ILIWYSFYASBYSUOI"
                  className="album-cover"
                />
                <div className="overlay">
                  <h3 className="overlay-title">I Like It When You Sleep</h3>
                  <p className="overlay-text">Released: February 2016</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="music-img">
                <img
                  src="images/third-album.png"
                  alt="A Brief Enquiry into Online Relationships"
                  className="album-cover"
                  id="third-album"
                />
                <div className="overlay">
                  <h3 className="overlay-title">A Brief Inquiry into Online Relationships</h3>
                  <p className="overlay-text">Released: November 2018</p>
                </div>
              </div>
              <div className="music-img">
                <img
                  src="images/fourth-album.png"
                  alt="Notes on a Conditional Form"
                  className="album-cover"
                />
                <div className="overlay">
                  <h3 className="overlay-title">Notes on a Conditional Form</h3>
                  <p className="overlay-text">Released: May 2020</p>
                </div>
              </div>
            </div>
          </div>  
          <div className="row video-row">
            <h2 id="video-title">Watch their live show</h2>
            <div id="video-container">
              <iframe
                id="video"
                title="The 1975 Live at the O2"
                src="https://www.youtube.com/embed/5kiY87XLahk?mute=0&controls=1"
                frameBorder={0}
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Music;
