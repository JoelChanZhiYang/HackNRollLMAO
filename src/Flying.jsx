import React, { Component } from "react";
import './assets/stylesheets/Flying.css';

class Flying extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row_segment">
        <div className="flying_item"></div>
      </div>
    );
  }
}

export default Flying;
