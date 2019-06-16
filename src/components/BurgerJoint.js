import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class BurgerJoint extends Component {


  render() {
    const burgerInfo  = this.props.burgerInfo;
    if(burgerInfo.address == null){
      return (
        <div className="container">
          <br />
          <br />
          <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
                <span className="mx-auto"><b>Name:</b> {burgerInfo.name}, <b>Address:</b> {burgerInfo.address}</span>
              </div>
              <div className="col-lg-6 col-md-4 col-8">
              <figcaption>No Burger Photo Found For This Joint</figcaption>
              <img src="https://static.spacecrafted.com/fa2472313e2b436ea397f427db03fa1c/i/bb922a31fdfb4e04a18983adb81bc3e4/1/GCuCv727RiYFXYTGfhakB6/default-placeholder-400x400.png"/>
              </div>
            </div>
          </div>
        </div>
      )
    }else{
      return (
        <div className="container">
          <br />
          <br />
          <div className="card card-body bg-light mb-3">
            <div className="row">
              <div className="col-2">
              <span className="mx-auto"><b>Name:</b> {burgerInfo.name}, <b>Address:</b> {burgerInfo.address}</span>
              </div>
              <div className="col-lg-6 col-md-4 col-8">
              <br />
              <img src={`${burgerInfo.image}`} width="400" height="400"/>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
  }
}

export default connect(
  null,
  {  }
)(BurgerJoint);
