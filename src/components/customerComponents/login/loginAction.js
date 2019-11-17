import * as actionTypes from "./loginActionType";
import axios from "axios";

export function login(userRegisterData) {
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
          type: actionTypes.LOGIN_USER,
          payload: res.data.data
        });
      });
  };
}