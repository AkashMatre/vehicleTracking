import React, { Component } from "react";
import { Card, CardBody, Button, Input } from "reactstrap";
import "./Styled.css";
import Call from "../img/call.jpg";
import VehicleImg from "../img/Vehicle.png";
import * as action from './signupAction';
import { connect } from "react-redux";

class SignUp extends Component {
  state = {
    name:"",
    address:"",
    city:"",
    phoneNumber:"",
    email:"",
    password:"",
    cnfrmPswrd:"",
    erroMessage:""
  };
  getName =(e)=>{
    this.setState({name:e.target.value})
  }
  getAddress=(e)=>{
    this.setState({address:e.target.value})
  }
  getCity=(e)=>{
    this.setState({city:e.target.value})
  }
  getPhoneNumber=(e)=>{
    this.setState({phoneNumber:e.target.value})
  }
  getEmail=(e)=>{
    this.setState({email:e.target.value})
  }
  getPassword=(e)=>{
    this.setState({password:e.target.value})
  }
  getCnfrmPassword=(e)=>{
    this.setState({cnfrmPswrd:e.target.value})
  }

  validate =()=>{
    let errorMsg="";
    if(this.state.name === "")
    {
      errorMsg = "Please Enter Name";
    }
    else if(this.state.address === "")
    {
      errorMsg = "Please Enter Address";
    }
    else if(this.state.city === "")
    {
      errorMsg = "Please Enter City"; 
    }
    else if(this.state.phoneNumber === "")
    {
      errorMsg = "Please Enter PhoneNumber";
    }
    else if(this.state.email === "")
    {
      errorMsg = "Please Enter Email";
    }
    else if(this.state.password === "")
    {
      errorMsg = "Please Enter Password";
    }
    else if(this.state.cnfrmPswrd === "")
    {
      errorMsg = "Please Enter Confirm Password";
    }
    else if(this.state.password !== this.state.cnfrmPswrd)
    {
      errorMsg = "Password and Confirm Password must be same";
    }


    return errorMsg;

  }

  signUp = () =>{
    if(this.validate() === "")
    {
      const { dispatch } = this.props;
      dispatch(action.signupUser(this.state));
    }
    else{
      this.setState({erroMessage:this.validate()})
    }
    
  }
  render() {
    return (
      <div className="Login-block">
      <h1>Register</h1>
      <Card>
        <CardBody>
          <div className="all-txt">
            <div className="search-btn">
              <label>Name</label>
              <Input type="input" onChange={e => this.getName(e)}/>
              <label>Address</label>
              <Input type="input"  onChange={e =>this.getAddress(e)}/>
            </div>

            <div className="search-btn">
              <label>City</label>
              <Input type="input"  onChange={e =>this.getCity(e)}/>
              <label>Phone Number</label>
              <Input type="input"  onChange={e =>this.getPhoneNumber(e)}/>
            </div>
          
          
            <div className="search-btn">
              <label>Email</label>
              <Input type="input"  onChange={e =>this.getEmail(e)}/>
              <label>Password</label>
              <Input type="input"  onChange={e =>this.getPassword(e)}/>
            </div>
         
            <div className="search-btn">
              <label>Confirm Password</label>
              <Input type="input"  onChange={e =>this.getCnfrmPassword(e)}/>
            </div>
            <div>
            </div>
            <Button  onClick={this.signUp}>REGISTER</Button>
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

export default connect(mapStateToProps)(SignUp);
