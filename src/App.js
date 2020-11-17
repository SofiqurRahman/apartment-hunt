import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddRentHouse from './components/AddRentHouse/AddRentHouse';
import HomeDetails from './components/HomeDetails/HomeDetails';
import BookingList from './components/BookingList/BookingList';
import MyRent from './components/MyRent/MyRent';
function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route path="/homeDetails">
            <HomeDetails /> 
          </Route>
          <Route path="/addRentHouse">
            <AddRentHouse />
          </Route>
          <Route path="/bookingList">
            <BookingList />
          </Route>
          <Route path="/myRent">
            <MyRent />
          </Route>
          <Route path="/">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
