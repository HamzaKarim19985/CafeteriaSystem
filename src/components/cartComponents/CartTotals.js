import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CartTotals extends Component {
  render() {
    const {
      cartSubTotal,
      cartTax,
      cartTotal,
      clearCart,
      addPayroll,
      addPayment
    } = this.props.value;
    return (
      <div class="row">
        <div class="col-10 ml-sm-5 ml-md-auto mt-5 mr-5 text-right text-capitalize">
          <button
            class="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            onClick={() => addPayroll()}
          >
            Via Payroll
          </button>
          <button
            class="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            onClick={() => addPayment()}
          >
            Via Cash
          </button>
          <button
            class="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            onClick={() => clearCart()}
          >
            Clear Cart
          </button>

          <h5>
            <span class="text-title">Subtotal:</span>
            <strong>{cartSubTotal}</strong>
          </h5>

          <h5>
            <span class="text-title">Tax:</span>
            <strong>{cartTax}</strong>
          </h5>

          <h5>
            <span class="text-title">Total:</span>
            <strong>{cartTotal}</strong>
          </h5>
        </div>
      </div>
    );
  }
}
