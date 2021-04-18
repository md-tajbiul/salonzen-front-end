import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import About from "./Components/About/About";
import AddService from "./Components/AddService/AddService";
import AllBooking from "./Components/AllBooking/AllBooking";
import Book from "./Components/Book/Book";
import Checkout from "./Components/Checkout/Checkout";
import Course from "./Components/Course/Course";
import Dashboard from "./Components/Dashboard/Dashboard";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Manage from "./Components/Manage/Manage";
import NavBar from "./Components/NavBar/NavBar";
import NewAdmin from "./Components/NewAdmin/NewAdmin";
import NoMatch from "./Components/NoMatch/NoMatch";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Review from "./Components/Review/Review";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    isLoggedIn: false
  });

  return (
<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <NavBar/>
        <Switch>
          <Route path="/academy">
            <Course />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/add-service">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/new-admin">
            <NewAdmin />
          </PrivateRoute>
          <PrivateRoute path="/manage-service">
            <Manage />
          </PrivateRoute>
          <PrivateRoute path="/all-booking">
            <AllBooking />
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
        <Footer/>
    </Router>
</UserContext.Provider>
  );
}

export default App;
