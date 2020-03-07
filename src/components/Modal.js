import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer, ProductContext } from "../context.js";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) return null;
          else {
            return (
              <div class="container">
                <div class="ModalContainer">
                  <img
                    src={
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTg_PCvrlzkX_EzHag6Tkit3ZJs3J24N3wGqu2vHueOsnnabIz3"
                    }
                    class="img-fluid"
                    alt=""
                  />
                  <h2>{"Burger"}</h2>
                  <div class="horizontal-container">
                    <div class="selectdiv">
                      <label>
                        <select>
                          <option selected> Size </option>
                          <option>Small</option>
                          <option>Medium</option>
                          <option>Large</option>
                        </select>
                      </label>
                    </div>

                    <div class="selectdiv">
                      <label>
                        <select>
                          <option selected> Flavour </option>
                          <option>Mild</option>
                          <option>Flavoured</option>
                          <option>Extra</option>
                        </select>
                      </label>
                    </div>
                    <div class="selectdiv">
                      <label>
                        <select>
                          <option selected>Sauce</option>
                          <option>Speacial </option>
                          <option>Hot </option>
                          <option>Sweet </option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <h5 class="text-muted">Price: ${16}</h5>

                  <div class="horizontal-container">
                    <Link to="/">
                      <button
                        class="ButtonContainer"
                        /* onClick={() => {
                    closeModal();
                  }} */
                      >
                        Continue shopping
                      </button>
                    </Link>

                    <Link to="/Cart">
                      <button
                        class="ButtonContainer"
                        /* onClick={() => {
                    closeModal();
                  }} */
                      >
                        To Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
