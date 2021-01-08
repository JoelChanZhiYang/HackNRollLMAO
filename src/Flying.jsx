import React, { Component } from "react";
import './assets/stylesheets/Flying.css';
import img from "./star.png";

class Flying extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  rickroll() {
    window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO";
  }

  render() {
    return (
      <div className="row_segment">
        <p className ="flying_text">If only you clicked that...</p>
        <img src={img} className="flying_item" onClick={this.rickroll}/>
      </div>
    );
  }
}

export default Flying;
