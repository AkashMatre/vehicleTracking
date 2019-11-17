import React, { Component } from "react";
import Header from './../../commonComponent/Header/Header';
import { Card, CardBody, Button, Input } from "reactstrap";
import "./Styled.css";
import Call from "./../../commonComponent/img/call.jpg";
import VehicleImg from "./../../commonComponent/img/Vehicle.png";
import * as action from './homeAction';

class Home extends Component {
  state = {
    trackingId:0
  };

  getTrackingId =(e)=>{
      this.setState({trackingId:e.target.value})
  }
  getProcessingVehicleInfo =()=>{
    console.log("get processing vehicle info" , this.state.trackingId);
    action.getVehicleDetails(this.state.trackingId)
  }
  render() {
    return (
      <div>
        {/* <Header /> */}
        <div className="tracking-block">
        <h1>Add More Life to Your Vehicle</h1>
        <Card>
          <CardBody>
            <div className="all-txt">
              <div className="search-btn">
                <Input type="input" placeholder="Tracking ID"  onChange={e => this.getTrackingId(e)}/>
                <Button onClick={this.getProcessingVehicleInfo}>Search</Button>
              </div>
              <span className="or-txt">Or</span>
              <div className="call-us">
                <img src={Call} alt="Call" />
                <span>Call us on 987456123</span>
              </div>
            </div>
            <div className="img">
              <img src={VehicleImg} alt="VehicleImg" />
            </div>
          </CardBody>
        </Card>
      </div>
      </div>
    );
  }
}

export default Home;
