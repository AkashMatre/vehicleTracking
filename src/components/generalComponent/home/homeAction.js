import * as actionTypes from "./homeActionType";
import axios from "axios";

export function getVehicleDetails(vehicleTrackingId) {
    console.log("tracking id" , vehicleTrackingId)
  var headers = {
    "Content-Type": "application/json",
    // "x-auth-token": sessionStorage.getItem("token")
  }; 
  return function(dispatch) {
    return axios
      .get(`http://localhost:3200/api/employee/getEmployeeBySkill`, { vehicleTrackingId })
      .then(res => {
        dispatch({
          type: actionTypes.FETCH_VEHICLE_DETAILS,
          payload: res.data.data
        });
      });
  };
}