import React, { Component } from "react";
import './assets/stylesheets/Treasure.css'

class Treasure extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="row_segment">
        <button
          onClick={this.props.fku}
          className="treasure row_segment"
        >hello</button>
      </div>
    );
  }
}

export default Treasure;
