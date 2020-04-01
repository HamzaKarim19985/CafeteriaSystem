import React, { Component } from "react";

export default class CartItem extends Component {
  render() {
    const {
      id,
      title,
      img,
      price,
      size,
      flavour,
      sauce,
      count,
      total
    } = this.props.item;
    const {
      decrement,
      increment,
      removeItem,
      openModal,
      changeItem
    } = this.props.value;
    return (
      <div class="row my-1 text-center">
        <div class="col-10 mx-auto col-lg-2">
          <img
            src={img}
            class="img-fluid "
            style={{ width: "5rem", height: "2.6rem" }}
          />
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Product:</span>
          {title}
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Price:</span>${price}
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class=" mx-1">{size} |</span>
          <span class=" mx-1">{flavour} |</span>
          <span class=" mx-1">{sauce}</span>
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <div class="cart-icon">
            <button
              onClick={() => {
                changeItem(id);
              }}
            >
              Change Order
            </button>
            <button onClick={() => removeItem(id)}>
              <i class="fas fa-trash" />
            </button>
          </div>
        </div>

        <div class="col-10 mx-auto col-lg-2">
          <span class="d-lg-none">Total:</span>${total}
        </div>
      </div>
    );
  }
}
