import * as actionTypes from "./homeActionType";
const HomeReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VEHICLE_DETAILS:
      return Object.assign({}, state, {
        vehicleDetails: action.payload
      });
    default:
      return state;
  }
};
export default HomeReducer;
