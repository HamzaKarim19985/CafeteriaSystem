import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    return (
      <div class="row my-1 text-center">
        <div class="col-10 mx-auto col-lg-2">
          <img
            src={"http://code.slicecrowd.com/labs/4/images/t-shirt.png"}
            class="img-fluid "
            style={{ width: "5rem", height: "5rem" }}
          />
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Product:</span>
          T-Shirt
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Price:</span>
          15$
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="btn btn-black mx-1">-</span>
          <span class="btn btn-black mx-1">1</span>

          <span class="btn btn-black mx-1">+</span>
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <div class="cart-icon">
            <i class="fas fa-trash" />
          </div>
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Total:</span>
          15$
        </div>
      </div>
    );
  }
}
