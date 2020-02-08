import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import Cart from "./components/cartComponents/Cart";
function App() {
  return (
    <React.Fragment>
      <Navbars />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/Products" component={Products}></Route>
        <Route path="/Cart" component={Cart}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
