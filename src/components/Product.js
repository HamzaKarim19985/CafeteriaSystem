import React, { Component } from "react";
import { ProductConsumer, ProductContext } from "../context.js";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductConsumer>
        {value => {
          return (
            <div class="container page-wrapper">
              <div class="page-inner">
                <div class="row">
                  <div class="el-wrapper">
                    <div class="box-up">
                      <img class="img" src={img} alt="" />
                      <div class="img-info">
                        <div class="info-inner">
                          <span class="p-name">{title}</span>
                          <span class="p-company">Noveau</span>
                        </div>
                        <div class="a-size">
                          Available Varieties :{" "}
                          <span class="size">Size, Sauce, Flavour</span>
                        </div>
                      </div>
                    </div>

                    <div class="box-down">
                      <div class="h-bg">
                        <div class="h-bg-inner"></div>
                      </div>

                      <btn class="cart">
                        <span class="price">${price}</span>
                        <span class="add-to-cart">
                          <button
                            onClick={() => {
                              value.openModal(id);
                            }}
                          >
                            <span class="txt">Add in cart</span>
                          </button>
                        </span>
                      </btn>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
