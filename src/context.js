import React, { Component } from "react";
import { storeProducts, detailProduct } from "./components/data.js";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    menuOption: null,
    products: [],
    cart: [],
    detailProduct: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
    loggedIn: false,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    payrollDeduction: 0,
    totalPayments: 0,
    userID: null
  };

  componentDidMount() {
    this.setProducts();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.menuOption !== this.state.menuOption) {
      this.setProducts();
    }
  }

  addTotals = () => {
    let subTotal = 0;

    this.state.cart.map(item => {
      subTotal += item.total;
    });
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;

    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  addPayroll = () => {
    let payment = this.state.cartTotal;
    this.setState(
      () => {
        return {
          payrollDeduction: this.state.payrollDeduction + payment,
          totalPayments: this.state.totalPayments + payment
        };
      },
      () => {
        this.clearCart();
      }
    );
  };
  addPayment = () => {
    let payment = this.state.cartTotal;
    this.setState(
      () => {
        return {
          totalPayments: this.state.totalPayments + payment
        };
      },
      () => {
        this.clearCart();
      }
    );
  };
  clearCart = () => {
    this.setState(
      () => {
        return { cart: [], cartTotal: 0, cartSubTotal: 0, cartTax: 0 };
      },
      () => {
        this.setProducts();
      }
    );
  };

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false
      };
    });
  };

  decrement = id => {
    const tempCart = [...this.state.cart];
    const selectProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    if (product.count == 0) {
      this.removeItem(id);
    } else {
      product.total = product.count * product.price;

      this.setState(
        () => {
          return { cart: tempCart };
        },
        () => this.addTotals()
      );
    }
  };

  increment = id => {
    const tempCart = [...this.state.cart];
    const selectProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    product.total = product.count * product.price;

    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => this.addTotals()
    );
  };
  changeItem = id => {
    this.removeItem(id);
    this.openModal(id);
  };
  menuAll = () => {
    this.setState(() => {
      return {
        menuOption: 1
      };
    });
  };
  menuVeggie = () => {
    this.setState(() => {
      return {
        menuOption: 2
      };
    });
  };
  menuMeat = () => {
    this.setState(() => {
      return {
        menuOption: 3
      };
    });
  };
  openModal = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalOpen: true,
        modalProduct: product
      };
    });
  };
  removeItem = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);

    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));

    const removedProduct = tempProducts[index];
    removedProduct.count = 0;
    removedProduct.total = 0;
    removedProduct.inCart = false;

    this.setState(
      () => {
        return { products: tempProducts, cart: tempCart };
      },
      () => {
        this.addTotals();
      }
    );
  };
  setProducts = () => {
    let tempProduct = [];
    const menuOpt = localStorage.getItem("menuOpt");
    console.log(menuOpt);
    if (menuOpt == "Vegetarian") {
      storeProducts.forEach(item => {
        if (item.veggie == true) {
          const singleItem = { ...item };
          tempProduct = [...tempProduct, singleItem];
        }
      });
    } else if (menuOpt == "Meat") {
      storeProducts.forEach(item => {
        if (item.veggie == false) {
          const singleItem = { ...item };
          tempProduct = [...tempProduct, singleItem];
        }
      });
    } else {
      storeProducts.forEach(item => {
        const singleItem = { ...item };
        tempProduct = [...tempProduct, singleItem];
      });
    }
    this.setState(() => {
      {
        return { products: tempProduct };
      }
    });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };
  handleDetail = id => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  handleDetail = userID => {
    this.setState(() => {
      return { userID: userID };
    });
  };
  addToCart = (id, size, flavour, sauce, total) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.count = 1;
    product.inCart = true;
    product.size = size;
    product.flavour = flavour;
    product.sauce = sauce;
    product.total = total;
    const price = product.price;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, product]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          changeItem: this.changeItem,
          addPayroll: this.addPayroll,
          addPayment: this.addPayment,
          menuAll: this.menuAll,
          menuMeat: this.menuMeat,
          menuVeggie: this.menuVeggie
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductConsumer, ProductProvider, ProductContext };
