import React, { Component } from "react";
import { storeProducts, detailProduct } from "../data";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: storeProducts,
      filteredArr: [],
      query: ""
    };
  }
  render() {
    return (
      <div class="container">
        <form action="" class="search-form">
          <input type="search" class="search-input" />
          <i class="fa fa-search"></i>
        </form>
      </div>
    );
  }
}
