import React, { Component } from "react";
<<<<<<< Updated upstream
import './assets/stylesheets/Treasure.css'
=======
import "./assets/stylesheets/Treasure.css";
import img from "./Treasure.png";
>>>>>>> Stashed changes

class Treasure extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row_segment">
        <img className="treasure_img" src={img} onClick={this.props.fku}></img>
      </div>
    );
  }
}

export default Treasure;
