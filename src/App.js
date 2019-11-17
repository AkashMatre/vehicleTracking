import React from "react";
import "./App.css";
import Tracking from "../src/components/customerComponents/Tracking/Tracking";
import TrackingSearch from "../src/components/customerComponents/TrackingSearch/TrackingSearch";
import Header from './components/commonComponent/Header/Header';

import Home from './components/generalComponent/home/home';
import Pricing from './components/generalComponent/pricing/pricing';
import Offers from './components/generalComponent/offers/offers';
import ContactUs from './components/generalComponent/contactus/contactus';
import BookNow from './components/generalComponent/booknow/booknow';
import AboutUs from './components/generalComponent/aboutus/aboutus';
import Login from './components/customerComponents/login/login';
import SignUp from './components/customerComponents/signup/signup';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomeReducer from './components/generalComponent/home/homeReducer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const store = createStore(HomeReducer);
function App() {
  return (
    <div className="App">
        <Provider store={store}>
      <Header />
      {/* <Home/> */}
      <Router>
        <switch>
          <Route exact path="/" component= {Home}  />
          <Route exact path="/home" component= {Home}  />
          <Route exact path="/aboutus" component= {AboutUs}  />
          <Route exact path="/pricing" component= {Pricing}  />
          <Route exact path="/ouroffers" component= {Offers}  />
          <Route exact path="/contactus" component= {ContactUs}  />
          <Route exact path="/booknow" component= {BookNow}  /> 
          <Route exact path="/login" component= {Login}  /> 
          <Route exact path="/signup" component= {SignUp}  /> 
        </switch>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
