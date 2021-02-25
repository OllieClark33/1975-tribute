import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <section id="about">
        <div id="infomation-container">
          <div className="info-box">
            <h3 className="info-box-header">About</h3>
            <span className="info-box-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              corrupti? Lorem ipsum dolor sit amet consectetur adipisicing
              elit...
            </span> 
            <button className="button-fill">Read More</button>
          </div>
          <div className="info-box">
            <h3 className="info-box-header">History</h3>
            <span className="info-box-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              corrupti? Lorem ipsum dolor sit amet consectetur adipisicing
              elit...
            </span>
            <button className="button-fill">Read More</button>
          </div>
          <div className="info-box">
            <h3 className="info-box-header">Awards</h3>
            <span className="info-box-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              corrupti? Lorem ipsum dolor sit amet consectetur adipisicing
              elit...
            </span>
            <button className="button-fill">Read More</button>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
