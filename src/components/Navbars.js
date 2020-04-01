import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import firebase from "../config/Fire";

export default class Navbars extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    firebase.auth().signOut();
    console.log("SighnedOut");
  }
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <Link to="/Products" class="brand-logo">
            <i class="large material-icons">local_dining</i>Cafe Noveau
          </Link>

          <div class="dropdown show right">
            <a
              class="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cafeteria Menu
            </a>

            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <Link class="dropdown-item" to="/" onClick={this.logout}>
                Logout
              </Link>
              <Link class="dropdown-item" to="/Products">
                Menu
              </Link>
              <Link class="dropdown-item" to="/Cart">
                Cart
              </Link>
              <Link class="dropdown-item" to="/Profile">
                Profile
              </Link>
              <Link class="dropdown-item" to="/SystemAdmin">
                System Admin
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
