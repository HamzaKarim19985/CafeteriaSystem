import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer, ProductContext } from "../context.js";
import Select from "react-select";

const options = [
  { value: "Small", label: "Small" },
  { value: "Medium", label: "Medium" },
  { value: "Large", label: "Large" }
];
const options2 = [
  { value: "Mild", label: "Mild" },
  { value: "Flavoured", label: "Flavour" },
  { value: "Extra", label: "Extra" }
];
const options3 = [
  { value: "Hot", label: "Hot" },
  { value: "Sweet", label: "Sweet" },
  { value: "Special", label: "Special" }
];
export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: null,
      selectedOption2: null,
      selectedOption3: null,
      totalState: null
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (price, event) => {
    var value = event.value;
    var totals = price;
    if (value === "Small") totals -= 2;
    else if (value === "Large") totals += 2;
    this.totalState = totals;
    this.setState({ selectedOption: value, totalState: totals });
    console.log(this.totalState);
  };
  handleChange2 = event => {
    this.setState({ selectedOption2: event.value });
  };
  handleChange3 = event => {
    this.setState({ selectedOption3: event.value });
  };
  render() {
    const {
      selectedOption,
      selectedOption2,
      selectedOption3,
      totalState
    } = this.state;
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const {
            id,
            img,
            title,
            price,
            sauce,
            flavour,
            size,
            total
          } = value.modalProduct;

          if (!modalOpen) return null;
          else {
            return (
              <div class="container">
                <div class="ModalContainer">
                  <img src={img} class="img-fluid" alt="" />
                  <h2>{title}</h2>
                  <div class="horizontal-container">
                    <Select
                      options={options}
                      onChange={this.handleChange.bind(this, price)}
                      className="select"
                      placeholder="Size"
                    />

                    <Select
                      options={options2}
                      onChange={this.handleChange2}
                      className="select"
                      placeholder="Flavour"
                    />

                    <Select
                      options={options3}
                      onChange={this.handleChange3}
                      className="select"
                      placeholder="Sauce"
                    />
                  </div>
                  <h5 class="text-muted">Price: ${this.totalState}</h5>

                  <div class="horizontal-container">
                    <button
                      class="ButtonContainer"
                      onClick={() => {
                        closeModal();
                      }}
                    >
                      Continue shopping
                    </button>

                    <Link to="/Cart">
                      <button
                        class="ButtonContainer"
                        onClick={() => {
                          value.addToCart(
                            id,
                            selectedOption,
                            selectedOption2,
                            selectedOption3,
                            totalState
                          );
                        }}
                      >
                        Add To Cart
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
