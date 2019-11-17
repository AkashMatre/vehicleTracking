import * as actionTypes from "./signupActionType";
import axios from "axios";

export function signupUser(userRegisterData) {
    console.log("tracking id" , userRegisterData)
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  }; 
  return function(dispatch) {
    return axios
      .get(`http://localhost:3200/registerUser`, { userRegisterData })
      .then(res => {
        dispatch({
          type: actionTypes.SIGN_UP_USER,
          payload: res.data.data
        });
      });
  };
}