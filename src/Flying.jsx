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
        <p className ="flying_text">If only you clicked that...</p>
        <div className="flying_item"></div>
      </div>
    );
  }
}

export default Flying;
