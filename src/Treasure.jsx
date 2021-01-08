import React, { Component } from "react";
import "./assets/stylesheets/Treasure.css";
import img from "./Treasure.png";
import img_hover from "./Treasure_hover.png";

const texts = [
  "Dont be tempted",
  "I wonder whats inside...",
  "Definitely something cool inside",
];

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(texts);

class Treasure extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let item = texts[Math.floor(this.props.randNum * texts.length)];
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
