import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data.js";
import Product from "./Product";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredArr: [],
      query: ""
    };
  }
  testing = obj => {
    console.log(detailProduct.id);
  };
  render() {
    let productList = storeProducts;
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
          {productList.map(e => {
            return <Product key={e.id} product={e} />;
          })}
        </div>
      </div>
    );
  }
}
