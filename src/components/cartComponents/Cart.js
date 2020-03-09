import React, { Component } from "react";
import CartList from "./CartList";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";

export default class Cart extends Component {
  render() {
    return (
      <div>
        <ProductConsumer>
          {value => {
            const { cart } = value;

            return (
              <React.Fragment>
                <div class="row">
                  <div class="col-10 mx-auto my-3 text-center text-title">
                    <h1 class="text-capitalize font-weight-bold ">
                      Order History
                    </h1>
                  </div>
                </div>
                <div class="container text-center d-lg-block d-none">
                  <div class="row">
                    <div className="col-10 mx-auto col-lg-2">
                      <p className="text-uppercase">
                        <strong>products</strong>
                      </p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                      <p className="text-uppercase">
                        <strong>name</strong>
                      </p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                      <p className="text-uppercase">
                        <strong>price</strong>
                      </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <p className="text-uppercase">
                        <strong>Order</strong>
                      </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <p className="text-uppercase">
                        <strong>change</strong>
                      </p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                      <p className="text-uppercase">
                        <strong>total</strong>
                      </p>
                    </div>
                  </div>
                  <CartList value={value} />
                  <CartTotals />
                </div>
              </React.Fragment>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
