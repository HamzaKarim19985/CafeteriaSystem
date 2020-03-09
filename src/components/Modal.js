import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer, ProductContext } from "../context.js";
import Select from "react-select";

const options = [
  { value: -3, label: "Small" },
  { value: 0, label: "Medium" },
  { value: 3, label: "Large" }
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
  constructor() {
    super();

    this.state = {
      selectedOption: "Medium",
      selectedOption2: null,
      selectedOption3: null,
      totalState: 0,
      priceChange: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.logValues = this.logValues.bind(this);
  }
  handleChange = (price, event) => {
    let value = event.value;
    let label = event.label;
    let totals = price;
    if (value === -3) totals -= 3;
    else if (value === 3) totals += 3;
    this.setState(
      {
        selectedOption: label,
        totalState: totals,
        priceChange: value
      } /*,
      () => {
        this.props.onChange(this.state.totalState);
      } */
    );
  };
  /*
  componentDidMount() {
    this.setState({ totalState: this.state.price + this.state.priceChange });
  } */

  logValues = () => {
    console.log(this.state.selectedOption);
    console.log(this.state.totalState);
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
                  <h5 class="text-muted">Price: ${price}</h5>

                  <div class="horizontal-container">
                    <button
                      class="ButtonContainer"
                      onClick={() => {
                        this.logValues();
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
