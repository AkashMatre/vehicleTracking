import React, { Component } from "react";
import { Card, CardBody, Button, Input } from "reactstrap";
import "./Styled.css";
import Call from "../img/call.jpg";
import VehicleImg from "../img/Vehicle.png";
import ReCAPTCHA from "react-google-recaptcha";
import * as action from './loginAction';
import { connect } from "react-redux";
class Login extends Component {
  state = {
    phoneNumber:"",
    passWord:"",
    erroMessage:""
  };

  getPhoneNumber = (e) =>{
    this.setState({phoneNumber:e.target.value})
  }
  getPassword = (e) =>{
    this.setState({passWord:e.target.value})
  }
  validate =()=>{
    let errorMsg="";
    if(this.state.phoneNumber === "")
    {
      errorMsg = "Please Enter Phone Number";
    }
    else if(this.state.passWord === "")
    {
      errorMsg = "Please Enter Password";
    }
    
    return errorMsg;

  }

  
  login=()=>{

    if(this.validate() === "")
    {
      const { dispatch } = this.props;
      dispatch(action.login(this.state));
    }
    else{
      this.setState({erroMessage:this.validate()});
    }
    
  }
  onChange(value) {
    console.log("Captcha value:", value);
  }
  render() {
    return (
      <div className="Login-block">
        <h1>Login To Your Account</h1>
        <Card>
          <CardBody>
            <div className="all-txt">
              <div className="search-btn">
                <label>Phone Number</label>
                <Input type="input" onChange={e => this.getPhoneNumber(e)}/>
              </div>
              <div className="search-btn">
                <label>Password</label>
                <Input type="input"  onChange={e => this.getPassword(e)}/>
              </div>
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <div>
              <ReCAPTCHA
                sitekey="6LcaHMMUAAAAAA2EPgmwjD-mSkCSCwT7wbpDIj8M"
                onChange={this.onChange}
              />
              </div>
              <Button  onClick={this.login}>Login</Button>
              <span style={{color:"red"}}>{this.state.erroMessage}</span>
            </div>
            <div className="img">
              <img src={VehicleImg} alt="VehicleImg" />
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    // vehicleDetails: state.dashboardskillReducer.deleteinfo || ""
  };
};


export default connect(mapStateToProps)(Login);
