import React, { Component } from "react";
import { Card, CardBody, Button } from "reactstrap";
import "./Styled.css";
import Call from "../img/call.jpg";
import VehicleImg from "../img/Vehicle.png";
class Tracking extends Component {
  state = {};
  render() {
    return (
      <div className="tracking-block">
        {/* <h1>Add More Life to Your Vehicle</h1>
        <Card>
          <CardBody> 
            <div className="all-txt">
              <Button>Track Your Vehicle Status</Button>
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
        </Card> */}
      </div>
    );
  }
}

export default Tracking;
