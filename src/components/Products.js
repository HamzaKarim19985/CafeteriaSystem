import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data.js";
import Product from "./Product";
import { ProductConsumer, ProductContext } from "../context.js";
export default class Products extends Component {
  render() {
    return (
      <div class="container">
        <div>
          <div class="title">Browse Our Menu</div>
        </div>
        <div>
          <form action="" class="search-form mt-4">
            <input type="search" class="search-input" />
            <i class="fa fa-search"></i>
          </form>
        </div>

        <div class="Grid-container">
          <ProductConsumer>
            {value => {
              return value.products.map(e => {
                return <Product key={e.id} product={e} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}
