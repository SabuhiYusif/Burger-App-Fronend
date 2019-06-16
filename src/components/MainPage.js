import React, { Component } from "react";
import { connect } from "react-redux";
import { getBurgerJoints } from "../actions/burgerActions";
import PropTypes from "prop-types";
import BurgerJoint from "./BurgerJoint";

class MainPage extends Component {
  componentDidMount() {
    this.props.getBurgerJoints();
  }

  render() {
   
		if(this.props.burger_joints == undefined){
			return (
				<p>Loading...</p>
			)
		}else{
			return (
				<div className="projects">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h1 className="display-4 text-center">Burger Joints in Tallinn</h1>
								<br />
								<br />
								<hr />
								{this.props.burger_joints.map(info => (
                <BurgerJoint key={info.id} burgerInfo={info} />
              ))}
							
							</div>
						</div>
					</div>
				</div>
			);
		}
   
  }
}

MainPage.protoTypes = {
	burger_joints: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  burger_joints: state.burger_joints
});
export default connect(
  mapStateToProps,
  { getBurgerJoints }
)(MainPage);
