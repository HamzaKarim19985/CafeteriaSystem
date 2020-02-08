import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";

export default class Navbars extends Component {
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
              <Link class="dropdown-item" to="/">
                Login
              </Link>
              <Link class="dropdown-item" to="/Products">
                Menu
              </Link>
              <Link class="dropdown-item" to="/Cart">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
/* <ul class="navbar">
          <li>Home</li>
          <li>
            <a> Profile</a>
            <ul>
              <li>Sign In</li>
              <li>Register</li>
              <li>Order History</li>
              <li>Profile</li>
            </ul>
          </li>
          <li>Cart</li>
        </ul> */
