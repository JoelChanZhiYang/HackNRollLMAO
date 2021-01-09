import React, { Component } from "react";
import img from "./star.png";
import back_img from "./star_back.png";
import "./assets/stylesheets/Yay.css";

class Yay extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-9 col-lg-8">
          <h1 className="congrats_banner">You're a SUPERSTAR!</h1>
          <div className="flip-box">
            <div className="flip-box-inner">
              <div className="flip-box-front">
                <img src={img} alt="its a star" className="congrats_img" />
              </div>
              <div className="flip-box-back">
                <img src={back_img} alt="its a star" className="congrats_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Yay;
