import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartTotals extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-10 ml-sm-5 ml-md-auto mt-5 mr-5 text-right text-capitalize">
          <Link to="/">
            <button
              class="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
            >
              Clear
            </button>
          </Link>

          <h5>
            <span class="text-title">Subtotal:</span>
            <strong>$15</strong>
          </h5>

          <h5>
            <span class="text-title">Tax:</span>
            <strong>$2.1</strong>
          </h5>

          <h5>
            <span class="text-title">Total:</span>
            <strong>$17.1</strong>
          </h5>
        </div>
      </div>
    );
  }
}
