import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Switch, Route } from "react-router-dom";
import Navbars from "./components/Navbars";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products";
import Profile from "./components/Profile";
import Cart from "./components/cartComponents/Cart";
import Modal from "./components/Modal";
import SystemAdmin from "./components/systemAdmin";
import firebase from "./config/Fire";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);

      if (user) {
        this.setState({ user });
        console.log(user.email);
      } else {
        this.setState({ user: null });
        console.log("No user Sighned in");
      }
    });
  }

  render() {
    /*
    db.collection("cities")
      .doc("LA")
      .set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });

    const db = fire.firestore();
    db.collection("cities")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(element => {
          console.log(element.data());
        });
      });  */
    /*  const fetchData = async () => {
      const db = fire.firestore();
      const data = await db.collection("cities").get();
      data.docs.forEach(e => {
        console.log(e.data().name);
      });
    };
    fetchData(); */
    const systemAdmin = localStorage.getItem("systemAdmin");
    if (this.state.user == null) {
      return (
        <React.Fragment>
          <Navbars />
          <Switch>
            <Route exact path="/" component={LandingPage}></Route>
          </Switch>
          <Modal />
        </React.Fragment>
      );
    } else if (this.state.user.email == "systemadmin@gmail.com") {
      return (
        <React.Fragment>
          <Navbars />
          <Switch>
            <Route path="/SystemAdmin" component={SystemAdmin}></Route>
            <Route path="/Products" component={Products}></Route>
            <Route component={SystemAdmin} />
          </Switch>
          <Modal />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Navbars />
          <Switch>
            <Route exact path="/" component={Products}></Route>
            <Route path="/Products" component={Products}></Route>
            <Route path="/Cart" component={Cart}></Route>
            <Route path="/Modal" component={Modal}></Route>
            <Route path="/Profile" component={Profile}></Route>
          </Switch>
          <Modal />
        </React.Fragment>
      );
    }
  }
}

export default App;
/*
<Switch>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/Products" component={Products}></Route>
          <Route path="/Cart" component={Cart}></Route>
          <Route path="/Modal" component={Modal}></Route>
          <Route path="/Profile" component={Profile}></Route>
        </Switch>
        <Modal /> 
        
        
        <Switch>
            <Route exact path="/" component={LandingPage}></Route>
          </Switch>
        */
