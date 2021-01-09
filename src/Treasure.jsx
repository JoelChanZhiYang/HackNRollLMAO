import React, { Component } from "react";
import "./assets/stylesheets/Treasure.css";
import img from "./Treasure.png";
import img_hover from "./Treasure_hover.png";

const texts = [
  "Dont be tempted",
  "I wonder whats inside...",
  "Definitely something cool inside",
  "Not SUS",
  "OwO whats this",
  "Click me ... ?",
  "Do not disturb",
  "Beware your curiosity",
  "Worth checking out",
  "May contain good stuff",
  "Not a trap",
  "I'm a trap",
];

class Treasure extends Component {
  constructor(props) {
    super(props);
    this.state = {randNum: Math.random()};
  }

  render() {
    let item = texts[Math.floor(this.state.randNum * texts.length)];
    return (
      <div className="row_segment">
        <div className="treasure_grid">
          <h6 className="treasure_row treasure_text">{item}</h6>
          <div className="img_store">
            <img
              className="treasure_img treasure_row"
              id="not_hover"
              src={img}
              onClick={this.props.fku}
            ></img>
            <img
              className="treasure_img treasure_row"
              id="hover"
              src={img_hover}
              onClick={this.props.fku}
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Treasure;
