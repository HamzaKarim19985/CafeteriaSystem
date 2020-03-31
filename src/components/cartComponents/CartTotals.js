import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../config/Fire";

export default class CartTotals extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date().toLocaleString().substring(0, 10)
    };
    this.uploadCart = this.uploadCart.bind(this);
  }

  barcodeGen = () => {
    return Math.floor(Math.random() * 1000) + 1235;
  };

  uploadCart = cart => {
    const userEmail = localStorage.getItem("user");
    const db = firebase.firestore();

    cart.map(e => {
      db.collection("orders").add({
        barcode: this.barcodeGen(),
        date: this.state.date,
        name: e.title,
        price: e.price,
        userID: userEmail,
        size: e.size,
        sauce: e.sauce,
        flavour: e.flavour,
        status: "Placed"
      });
    });
  };

  render() {
    const {
      cart,
      cartSubTotal,
      cartTax,
      cartTotal,
      clearCart,
      addPayroll,
      addPayment
    } = this.props.value;
    const userEmail = localStorage.getItem("user");
    return (
      <div class="row">
        <div class="col-10 ml-sm-5 ml-md-auto mt-5 mr-5 text-right text-capitalize">
          <button
            class="btn btn-outline-danger text-uppercase mb-3 px-5"
            type="button"
            onClick={() => {
              addPayroll();
              this.uploadCart(cart);
            }}
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
