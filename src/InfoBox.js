import React, { Component } from "react";

class InfoBox extends Component {
  constructor(props) {
    super(props);
    this.popUp = this.popUp.bind(this);
  }

  popUp() {
    alert(`Redirect to ${this.props.title} page`)
  }

  render() {
    console.log(this.props);
    let title = this.props.title;
    let content = this.props.content;
    return (
      <div className="info-box">
        <h3 className="info-box-header">{title}</h3>
        <span className="info-box-content">{content}</span>
        <button className="button-fill" onClick={this.popUp}>Read More</button>
      </div>
    );
  }
}

export default InfoBox;
