import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import fire from "../config/Fire";

export default class Navbars extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <Link to="/Products" class="brand-logo">
            <i class="large material-icons">local_dining</i>Cafe Noveau
          </Link>

          <Link to="/">
            <div>
              <button onClick={this.logout}>L</button>
            </div>
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
              <Link class="dropdown-item" to="/Profile">
                Profile
              </Link>
              <Link class="dropdown-item" to="/SystemAdmin">
                Modal
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
